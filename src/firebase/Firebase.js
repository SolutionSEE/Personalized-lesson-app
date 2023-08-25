import { initializeApp } from 'firebase/app';
import {
	GoogleAuthProvider,
	getAuth,
	signInWithPopup,
	signInWithEmailAndPassword,
	createUserWithEmailAndPassword,
	sendPasswordResetEmail,
	signOut,
	browserSessionPersistence,
} from 'firebase/auth';

import {
	getFirestore,
	query,
	getDocs,
	collection,
	where,
	addDoc,
} from 'firebase/firestore';

const config = {
	apiKey: 'AIzaSyCOYWtOD1IdphGrQdr561aZlKT3njL6JsY',
	authDomain: 'autogpt-6f35e.firebaseapp.com',
	projectId: 'autogpt-6f35e',
	storageBucket: 'autogpt-6f35e.appspot.com',
	messagingSenderId: '765100482272',
	appId: '1:765100482272:web:12afe569be1f4d69acfa85',
	measurementId: 'G-TGELH6F5KY',
};

const firebaseApp = initializeApp(config);

const auth = getAuth(firebaseApp);
const DB = getFirestore(firebaseApp);

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
	prompt: 'select_account',
});

const signInWithGoogle = async () => {
	try {
		const userColection = collection(DB, 'users');
		const res = await signInWithPopup(auth, googleProvider);
		const user = res.user;
		const q = query(userColection, where('uid', '==', user.uid));
		const docs = await getDocs(q);
		if (docs.docs.length === 0) {
			await addDoc(userColection, {
				uid: user.uid,
				name: user.displayName,
				authProvider: 'google',
				email: user.email,
			});
		}
	} catch (err) {
		console.error(err);
		alert(err.message);
	}
};

const logInWithEmailAndPassword = async (email, password, rememberMe) => {
	try {
		if (!rememberMe) {
			await auth.setPersistence(browserSessionPersistence);
		}
		await signInWithEmailAndPassword(auth, email, password);
	} catch (err) {
		console.error(err);
		alert(err.message);
	}
};

const registerWithEmailAndPassword = async (name, email, password) => {
	try {
		const res = await createUserWithEmailAndPassword(auth, email, password);
		const { user } = res;

		await addDoc(collection(DB, 'users'), {
			uid: user.uid,
			name: name,
			authProvider: 'local',
			email: user.email,
		});
		alert('Register Successfully !');
	} catch (err) {
		console.error(err);
		alert(err.message);
	}
};

const sendPasswordReset = async (email) => {
	try {
		await sendPasswordResetEmail(auth, email);
		alert('Password reset link sent!');
	} catch (err) {
		console.error(err);
		alert(err.message);
	}
};

const logout = async () => {
	await signOut(auth);
	localStorage.removeItem('user');
	window.location.replace('/');
};

export {
	auth,
	DB,
	signInWithGoogle,
	logInWithEmailAndPassword,
	registerWithEmailAndPassword,
	sendPasswordReset,
	logout,
};
export default firebaseApp;
