import { useNavigate, useParams } from 'react-router-dom';
import BoxMessage from '../../components/BoxMessage';
import Button from '../../components/Button';
import Sidebar from '../../components/Sidebar/Sidebar';
import oct from '../../Assets/svg/artificium.svg';
import menu from '../../Assets/Images/menu.png';
import Notification from '../../components/Notification';
import mic from '../../Assets/svg/mic.svg';
import React, { useEffect } from 'react';
import loadingimg from '../../Assets/Images/loading.gif';
import send from '../../Assets/svg/send.svg';
import ExitLessonIcon from '../../Assets/svg/exit_lession_icon.svg'
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { useAuthState } from 'react-firebase-hooks/auth';
import { DB, auth } from '../../firebase/Firebase';
import {
	Timestamp,
	addDoc,
	collection,
	deleteDoc,
	doc,
	orderBy,
	query,
} from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { formatTime } from '../../utils/formatTime';
import { axiosClient } from '../../config/axios';
import { FiEdit } from 'react-icons/fi';
import IconButton from '../../components/IconButton';
import { isEmpty } from 'lodash';
import { toast } from 'react-hot-toast';
import moment from 'moment';

import { MdOutlineKeyboardBackspace } from 'react-icons/md';

const LessonDetail = (props) => {
	const navigate = useNavigate();
	const now = moment();
	const { id: lessonId } = useParams();
	const [active, setActive] = React.useState(false);

	const [state, setState] = React.useReducer(
		(prevState, newState) => ({
			...prevState,
			...newState,
		}),
		{
			loading: false,

			valueInput: '',

			valuePrompt: '',

			lessonNumber: 1,
			incrementPrompt: false,

			dataFromAI: '',

			messages: [],

			learningLevel: '',
			depth: '',
			communicationStyle: '',
			learningStyle: '',
			toneStyle: '',
			reasoningFramework: '',
		}
	);

	const {
		valueInput,
		valuePrompt,
		incrementPrompt,
		lessonNumber,
		loading,
		learningLevel,
		depth,
		communicationStyle,
		learningStyle,
		toneStyle,
		reasoningFramework,
	} = state;

	const [userState] = useAuthState(auth);
	const userStr = JSON.parse(localStorage.getItem('user'));
	const user = userStr || userState;

	const [data] = useCollectionData(
		user &&
			user.email &&
			query(
				collection(DB, 'lesson', user.email, 'listLesson', lessonId, 'messages'),
				orderBy('createdAt', 'asc')
			)
	);

	React.useEffect(() => {
		if (data && data.length > 0) {
			setState({ ...data[0].topic });
		}
	}, [data]);

	const handleKeyPress = async (event) => {
		if (event.keyCode === 13) {
			handleSubmitChat();
		}
	};

	const handleDeleteLesson = async (id) => {
		await deleteDoc(doc(DB, 'lesson', user.email, 'listLesson', id));
		navigate('/lesson-app');
	};

	const handleSubmitChat = async () => {
		const command = valueInput;
		const prompt = valuePrompt;
		let lNumber = lessonNumber;
        const send_message= prompt+" "+ command;
		if (isEmpty(command)) {
			toast.error('Enter command');
			return;
		}
		if(incrementPrompt) {
			lNumber = lNumber + 1
		}


		setState({ loading: true, valueInput: '', valuePrompt: '', lessonNumber:  lNumber});

		// ADD MESSAGE TO LESSON
		const message = {
			user: {
				_id: user.email,
				name: user.displayName,
				avatar: user.photoURL,
			},
			text: [command],
			lesson: lNumber,
			createdAt: Timestamp.now(),
		};

		await addDoc(
			collection(DB, 'lesson', user.email, 'listLesson', lessonId, 'messages'),
			message
		);
		try {
			const res = await axiosClient.post(`/lesson-app/chat`, { data:send_message });
			const arrMessageResponse = res.data.data.content.split('\n') || [];

			const message = {
				text: arrMessageResponse,
				createdAt: Timestamp.now(),
				user: {
					_id: 'ChatGPT',
					name: 'ChatGPT',
					isBot: true,
				},
			};
			await addDoc(
				collection(DB, 'lesson', user.email, 'listLesson', lessonId, 'messages'),
				message
			);
			console.log({ res });
		} catch (error) {
			console.error(error);
		}

		setState({ loading: false });
	};
  console.log('valuePrompt =>', valuePrompt, incrementPrompt, lessonNumber)
	
	return (
		<div className='bg-[#363A3D] p-[12px] flex'>
			<Sidebar />
			<div className='lg:w-[calc(100%-312px)] w-full lg:ml-[12px] h-[calc(100vh-24px)] overflow-y-auto no-scrollbar'>
				<div className='bg-[#1A1D21CC] sm:p-[24px] p-[12px_14px] rounded-[20px] md:sticky top-0'>
					<div className='sm:flex justify-between items-center pb-[24px]'>
						<div className='flex items-start gap-3'>
							<button
								className='lg:hidden mt-[8px]'
								onClick={() => setActive(!active)}
							>
								<img src={menu} alt='menu' className='w-[16px]' />
							</button>
							<div>
								<h1 className='text-[20px] font-bold mb-1 text-white'>
									Edu-Tech Platform
								</h1>
								<p className='text-[#9B9C9E] text-[14px] font-medium'>
									AI Generated Learning
								</p>
							</div>
						</div>
						<Notification />
					</div>
					<div className='flex items-start pt-[24px] sm:ml-0 ml-[-12px]'>
						<img src={oct} alt='oct' />
						<p className='text-[#B6F09C] text-[14px] contents'>
							<span className='sm:pr-[20px] pr-[4px] block text-[#E8E9E9]'>:</span>
							{learningLevel && learningLevel + '/'}
							{depth && depth + '/'}
							{learningStyle && learningStyle + '/'}{' '}
							{communicationStyle && communicationStyle + '/'}
							{toneStyle && toneStyle + '/'}
							{reasoningFramework}
						</p>
					</div>
				</div>

				<div className='sm:mt-[46px] my-[30px] flex items-center justify-between'>
					<div className='flex items-center gap-5'>
						<MdOutlineKeyboardBackspace
							className='text-white h-10 w-10 cursor-pointer'
							onClick={() => navigate('/lesson-app')}
						/>
						<h1 className='sm:text-[28px] text-[20px] font-bold text-white'>
							Personalized Lessons
						</h1>
					</div>
					<div className='flex flex-row justify-between items-center'>
						<IconButton
							onClick={() => navigate('/lesson-app?edit=true')}
							text={'Edit Lesson Style'}
							positionText={'bottom'}
							icon={<FiEdit className='text-[#B6F09C] w-6 h-6' />}
						></IconButton>
            <div className='flex flex-col items-center ml-6 pl-[32px] pr-[10px] border-l-[1px] border-[#D9D9D9] border-dashed'>
              <button 
                onClick={() => handleDeleteLesson(lessonId)}
                className='w-[30px] h-[30px]'>
                <img src={ExitLessonIcon} alt='close' className='mb-[5px]' />
              </button>
              <p className='text-primary-light text-[14px] font-[600]'>Exit Leason</p>
            </div>
					</div>
				</div>

				<div className='flex flex-col gap-[26px]'>
					{data &&
						data.length > 0 &&
						data.map((message, index) => {
							return (
								<div key={'codeMessage' + index}>
									<BoxMessage
										fullWidth
										isBot={message.user.isBot}
										avatar={message.user.avatar}
										time={formatTime(message.createdAt.seconds, now)}
										text={message.text}
										author={message.user.name}
										addPrompt={(val) => setState({ valuePrompt: val})}
										incrementPrompt={(stats => setState({ incrementPrompt: stats}))}
										setLessonNumber={(num) => setState({ lessonNumber: num})}
										valuePrompt={valuePrompt}
										lessonNumber={lessonNumber}
										indexData={index}
										data={data}
										message={message}
									/>
								</div>
							);
						})}
				</div>

				<div className='xl:px-[48px] mt-[49px]'>
					<div className='bg-[#131619] rounded-[20px] py-[10px] px-6 flex justify-between items-center'>
						<img src={mic} alt='mic' className='' />
						<input
							placeholder=''
							className='text-[#9B9C9E] bg-transparent w-full outline-none sm:p-[12px_48px] md:p-[12px]'
							value={valueInput}
							onChange={(e) => setState({ valueInput: e.target.value })}
							onKeyUp={handleKeyPress}
							disabled={loading}
						/>
						{loading ? (
							<img src={loadingimg} alt='loading' className='' />
						) : (
							<img
								onClick={() => handleSubmitChat()}
								src={send}
								alt='send'
								className=''
							/>
						)}
					</div>
				</div>

				<div className='flex gap-4 md:gap-9 mt-8 justify-end'>
					{/* <Button
						color={'#EAEBF8'}
						bgColor='bg-[#1A1D21]'
						onClick={() => handleDeleteLesson(lessonId)}
					>
						Exit Lesson
					</Button> */}
					<Button 
            onClick={() => navigate('/lesson-app')}
            className="hover:text-white"
          >Save Lesson</Button>
				</div>
			</div>
		</div>
	);
};

export default LessonDetail;
