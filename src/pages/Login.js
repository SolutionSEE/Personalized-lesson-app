import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { FaApple } from 'react-icons/fa';
import { BsEnvelope } from 'react-icons/bs';
import { TfiLock } from 'react-icons/tfi';
import GradientInput from '../components/GradientInput';
import firebaseApp, {
	DB,
	auth,
	logInWithEmailAndPassword,
	signInWithGoogle,
} from '../firebase/Firebase';
import isEmail from 'validator/lib/isEmail';
import { NavLink, useNavigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { collection, query, where } from 'firebase/firestore';

import loginImage from '../Assets/Images/login.png';

const Login = () => {
	const navigate = useNavigate();
	const [state, setState] = React.useReducer(
		(prevState, newState) => ({
			...prevState,
			...newState,
		}),
		{
			loading: false,

			email: '',
			password: '',
			rememberMe: false,
		}
	);
	const [user, _, error] = useAuthState(auth);

	const [userFromStore, loading_, error_] = useCollectionData(
		user && query(collection(DB, 'users'), where('uid', '==', user.uid))
	);

	const { email, password, rememberMe, loading } = state;

	const handleChangeInput = (e) => {
		setState({ [e.target.name]: e.target.value });
	};

	React.useEffect(() => {
		if (loading) {
			// maybe trigger a loading screen
			return;
		}
		if (user && userFromStore) {
			let userData = { ...user };
			if (!user.displayName) {
				userData = {
					...user,
					displayName: userFromStore[0]?.name,
				};
			}
			localStorage.setItem('user', JSON.stringify(userData));
			navigate('/lesson-app');
		}
	}, [user, loading, userFromStore]);

	const handleSubmit = async (e) => {
		e.preventDefault();
		setState({ loading: true });
		const email = state.email.trim();
		const password = state.password.trim();

		if (isEmail(email)) {
			await logInWithEmailAndPassword(email, password, rememberMe);
			setState({ loading: false });
		} else {
			setState({ loading: false });
			alert('Email Address in not valid');
		}
	};

	const handleGoogle = async (e) => {
		e.preventDefault();
		setState({ loading: true });
		await signInWithGoogle()
			.then(() => setState({ loading: false }))
			.catch((err) => console.error(err));
	};

	return (
		<div className='h-screen w-screen'>
			<div className='flex bg-primary w-full h-full items-center'>
				{/* left content */}
				<div className='w-full md:w-1/2 3xl:w-2/3'>
					<div className='max-w-[90%] md:max-w-[80%] mx-auto 3xl:max-w-[50%]'>
						<h1 className='text-4xl text-white uppercase'>
							ED{' '}
							<span className='font-bold text-transparent bg-gradient-tech bg-clip-text'>
								TECH
							</span>
						</h1>
						<p className='mt-6 text-lg text-nobel'>
							Log in to Ed-Tech to start creating magic.
						</p>
						<form className='mt-16'>
							<div className='space-y-6'>
								<GradientInput
									icon={<BsEnvelope className='w-4 h-4 text-nobel' />}
									type='email'
									placeholder='Email'
									name='email'
									onChange={handleChangeInput}
									value={email}
								/>
								<GradientInput
									icon={<TfiLock className='w-4 h-4 text-nobel' />}
									type='password'
									placeholder='Password'
									name='password'
									onChange={handleChangeInput}
									value={password}
								/>
							</div>

							<div className='flex justify-between my-12'>
								<div className='flex items-center space-x-2'>
									<input
										type='checkbox'
										name='remember'
										id='remember'
										className='w-4 h-4 rounded-sm'
										value={rememberMe}
										onChange={(e) => setState({ rememberMe: e.target.checked })}
									/>
									<label
										htmlFor='remember'
										className='text-[#CDCECF] cursor-pointer'
									>
										Remember me
									</label>
								</div>
								<a
									href='/forgot-password'
									className='font-semibold text-transparent cursor-pointer bg-gradient-links bg-clip-text'
								>
									Forgot password?
								</a>
							</div>
							<button
								className={`disabled:opacity-25 w-full h-12 font-semibold rounded-lg bg-secondary text-nobelblue hover:bg-gradient-links`}
								onClick={handleSubmit}
								disabled={loading}
							>
								Log in
							</button>
							<div className='flex items-center my-12 space-x-4'>
								<div className='flex-1 h-[1px] bg-primary-dark'></div>
								<p className='text-xs font-medium text-primary-light'>
									or continue with
								</p>
								<div className='flex-1 h-[1px] bg-primary-dark'></div>
							</div>
							<div className='flex items-center justify-between space-x-4'>
								<button
									className='flex items-center justify-center w-full h-12 transition duration-200 rounded-lg cursor-pointer text-primary-light bg-nobel-dark hover:bg-nobel-light hover:text-nobel-dark group'
									onClick={handleGoogle}
								>
									<FcGoogle className='w-6 h-6 mr-3 text-white transition-all duration-75 group-hover:text-nobel-dark' />
									Google Account
								</button>
								<button className='flex items-center justify-center w-full h-12 transition duration-200 rounded-lg text-primary-light bg-nobel-dark hover:bg-nobel-light hover:text-nobel-dark group'>
									<FaApple className='w-6 h-6 mr-3 text-white transition-all duration-75 group-hover:text-nobel-dark' />
									Apple Account
								</button>
							</div>
							<div className='absolute bottom-8 3xl:bottom-12 3xl:left-12'>
								<p className='inline-block font-semibold text-primary-light'>
									Don't have an account?{' '}
									<NavLink
										to='/signup'
										className='text-transparent cursor-pointer bg-gradient-links bg-clip-text'
									>
										Sign Up
									</NavLink>
								</p>
							</div>
						</form>
					</div>
				</div>
				{/* right illustration */}
				<div className='hidden md:flex md:w-1/2 3xl:w-1/3 overflow-hidden max-h-[100vh] max-w-[100vw]'>
					<img
						src={loginImage}
						alt='illustration'
						className='object-cover w-full h-screen'
					/>
				</div>
			</div>
		</div>
	);
};

export default Login;
