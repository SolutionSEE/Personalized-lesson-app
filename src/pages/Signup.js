import React from 'react';
import FormInput from '../components/FormInput';
import Button from '../components/Button';
import Checkbox from '../components/Checkbox';
import { NavLink, useNavigate } from 'react-router-dom';
import { isEmpty } from 'lodash';
import { registerWithEmailAndPassword } from '../firebase/Firebase';
import loginImage from '../Assets/Images/login.png';
import { toast } from 'react-hot-toast';

const Signup = () => {
	const navigate = useNavigate();
	const [state, setState] = React.useReducer(
		(prevState, newState) => ({
			...prevState,
			...newState,
		}),
		{
			firstName: '',
			lastName: '',
			password: '',
			email: '',
			passwordConfirm: '',

			agreeTheTerm: false,
		}
	);

	const { firstName, lastName, password, passwordConfirm, email, agreeTheTerm } = state;

	const handleChangeInput = (e) => {
		if (e.target.name === 'agreeTheTerm') setState({ agreeTheTerm: e.target.checked });
		else setState({ [e.target.name]: e.target.value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (
			!agreeTheTerm ||
			isEmpty(firstName) ||
			isEmpty(lastName) ||
			isEmpty(password) ||
			isEmpty(passwordConfirm)
		) {
			toast.error('Please Fill All Information');
			return;
		}
		const idLoading = toast.loading('Loading...');
		const name = firstName + ' ' + lastName;
		registerWithEmailAndPassword(name, email, password).then(() => {
			toast.success('Success', { id: idLoading });
			navigate('/');
		});
	};

	return (
		<>
			<div className='h-screen w-screen'>
				<div className='flex bg-primary w-full h-full items-center'>
					{/* left content */}
					<div className='w-full md:w-2/3 h-full py-12'>
						<div className='max-w-[90%] md:max-w-[80%] mx-auto 3xl:max-w-[50%] flex flex-col h-full'>
							<NavLink to={'/'}>
								<p className='text-center bg-gradient-to-r bg-clip-text text-transparent from-[#82DBF7] to-[#B6F09C] mb-24'>
									Log In
								</p>
							</NavLink>
							<div className='flex-1'>
								<h1 className='text-4xl mb-11'>
									<span className='text-white'>ED </span>
									<span className='font-bold bg-gradient-to-t bg-clip-text text-transparent from-[#4D62E5] to-[#B6F09C]'>
										TECH
									</span>
								</h1>
								<h2 className='text-4xl text-white mb-16'>Signup Now</h2>
								<div className='grid grid-cols-2 gap-8'>
									<FormInput
										type='text'
										label='First name'
										placeholder='First name'
										name='firstName'
										value={firstName}
										onChange={handleChangeInput}
									/>
									<FormInput
										type='text'
										label='Last name'
										placeholder='Last name'
										name='lastName'
										value={lastName}
										onChange={handleChangeInput}
									/>
									<FormInput
										type='password'
										label='Password'
										placeholder='Password'
										name='password'
										value={password}
										onChange={handleChangeInput}
									/>
									<FormInput
										type='password'
										label='Repeat password'
										placeholder='Repeat Password'
										name='passwordConfirm'
										value={passwordConfirm}
										onChange={handleChangeInput}
									/>
									<FormInput
										type='email'
										label='Email'
										placeholder='abc@gmail.com'
										name='email'
										value={email}
										onChange={handleChangeInput}
									/>
								</div>
								<Checkbox
									name='agreeTheTerm'
									value={agreeTheTerm}
									onChange={handleChangeInput}
								/>
								<div className='mt-12'>
									<Button
										className={'w-full'}
										text='Create free account'
										onClick={handleSubmit}
									/>
								</div>
							</div>
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
		</>
	);
};

export default Signup;
