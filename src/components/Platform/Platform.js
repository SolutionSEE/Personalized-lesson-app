import React, { useState } from 'react';
import oct from '../../Assets/svg/artificium.svg';
import arrow2 from '../../Assets/svg/arrow.svg';
import send from '../../Assets/svg/send.svg';
import loadingimg from '../../Assets/Images/loading.gif';
import mic from '../../Assets/svg/mic.svg';
import menu from '../../Assets/Images/menu.png';
import deleteSvg from '../../Assets/svg/delete.svg';
import Sidebar from '../Sidebar/Sidebar';
import QuestionIcon from '../../Assets/svg/question_icon.svg';
import DepthIcon from '../../Assets/svg/depth_icon.svg'
import { useLocation, useNavigate, useParams, useSearchParams } from 'react-router-dom';
import { Communication, Depth, LearningLevelBasic, Learning, RECENT_LESSON, Reasoning, Tone } from './mock';

import { PiChatTeardropBold } from 'react-icons/pi';
import { FiEdit3 } from 'react-icons/fi';
import { RiDonutChartLine } from 'react-icons/ri';
import { HiCheck } from 'react-icons/hi';
import { LiaLightbulbSolid } from 'react-icons/lia';

import IconButton from '../IconButton';

import Notification from '../Notification';
import { axiosClient } from '../../config/axios';
import { DB, auth } from '../../firebase/Firebase';
import {
	Timestamp,
	addDoc,
	collection,
	deleteDoc,
	doc,
	orderBy,
	query,
	serverTimestamp,
} from 'firebase/firestore';
import { useCollection, useCollectionData } from 'react-firebase-hooks/firestore';
import moment from 'moment';
import { isEmpty } from 'lodash';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-hot-toast';
import ToolTipsModal from './ToolTipsModal';

const Platform = () => {
	const navigate = useNavigate();

	const location = useLocation();
	const isEditStyle = location.search.includes('edit=true');

	const [active, setActive] = useState(false);
	const [user] = useAuthState(auth);
	const userStr = JSON.parse(localStorage.getItem('user'));
	const userData = userStr || user;
  const [open, setOpen] = useState(false);

	const {
		email: userEmail,
		displayName: userDisplayName,
		photoURL: userAvatar,
	} = userData;

	const [state, setState] = React.useReducer(
		(prevState, newState) => ({
			...prevState,
			...newState,
		}),
		{
			loading: false,

			depth: '',
      learningLevel: '',
			learningStyle: '',
			communicationStyle: '',
			toneStyle: '',
			reasoningFramework: '',

			valueInput: '',
			dataFromAI: '',

			messages: [],
		}
	);

	const {
    learningLevel,
		depth,
		learningStyle,
		communicationStyle,
		toneStyle,
		reasoningFramework,
		valueInput,
		loading,
	} = state;

	const [data, _, error] = useCollection(
		userEmail &&
			query(
				collection(DB, 'lesson', userEmail, 'listLesson'),
				orderBy('createdAt', 'desc')
			)
	);

	const [listLessonData] = useCollectionData(
		userEmail &&
			query(
				collection(DB, 'lesson', userEmail, 'listLesson'),
				orderBy('createdAt', 'desc')
			)
	);

	const listLessonId = data?.docs.map((item) => item.id);

	const listLesson = listLessonData?.map((item, index) => ({
		...item,
		id: listLessonId[index],
	}));

	React.useEffect(() => {
		if (!isEmpty(listLesson) && isEmpty(depth)) setState(listLesson[0].topic);
	}, [listLesson]);

	const handleDeleteLesson = async (e, id) => {
		e.stopPropagation();
		await deleteDoc(doc(DB, 'lesson', userEmail, 'listLesson', id));
	};

	const handleClickLesson = (id) => {
		navigate(`/lesson-app/${id}`);
	};

	const renderRecentLesson = () => {
		return (
			<div>
				<p className='font-bold text-[20px] leading-9 text-white mb-[20px] md:mb-[34px]'>
					Recent Lessons
				</p>

				<div className='grid grid-cols-3'>
					{['Type of Lesson', 'Status', 'Date'].map((headerName, idx) => (
						<p
							key={headerName + idx}
							className='text-[16px] font-bold leading-9 text-[#A8A8A8] capitalize'
						>
							{headerName}
						</p>
					))}
				</div>

				{listLesson &&
					listLesson.length > 0 &&
					listLesson.map((item, idx) => {
						return (
							<div
								key={'viewRow' + idx}
								onClick={() => handleClickLesson(item.id)}
								className='cursor-pointer grid grid-cols-3 mt-5 items-center bg-glass-fill border-t border-t-glass-stroke px-1 py-4 md:p-[18px_20px] rounded-3'
							>
								<p className='text-nobel font-medium text-[18px] -stacked-fractions-[1px] pl-0 xl:pl-12'>
									{item.typeOfLesson}
								</p>

								<div className='bg-stem-green-500 hover:text-white rounded-3 px-1 md:px-6 py-2 font-semibold capitalize text-[16px] leading-8 w-fit'>
									{item.status}
								</div>

								<div className='flex justify-between items-center'>
									<p className='text-nobel text-[18px] font-medium -stacked-fractions-[1px]'>
										{moment.unix(item?.createdAt?.seconds).format('DD.MM.YYYY')}
									</p>
									<div className='flex gap-2 md:gap-3 xl:gap-10 items-center'>
										<IconButton
											text={'delete'}
											positionText={'bottom'}
											onClick={(e) => {
												handleDeleteLesson(e, item.id);
											}}
											icon={
												<img
													src={deleteSvg}
													alt='delete-icon'
													className='h-6 w-6'
												/>
											}
										/>
									</div>
								</div>
							</div>
						);
					})}
			</div>
		);
	};

	const handleKeyPress = async (event) => {
		if (event.keyCode === 13) {
			handleSubmitStartLesson();
		}
	};

	const handleSubmitStartLesson = async () => {
		if (isEmpty(valueInput)) {
			toast.error('Please input plan such as "learn c++", "learn python ..."');
			return;
		}

		const plan = valueInput;
		setState({ loading: true, valueInput: '' });
		const loadingToastId = toast.loading('Loading...');
		const topic = {
      learningLevel,
			depth,
			learningStyle,
			toneStyle,
			communicationStyle,
			reasoningFramework,
		};

		let lessonId;

		// CALL TO OPEN AI
		const commandToConfig = `Learning Level:${learningLevel} Depth:${depth} Learning Style: ${learningStyle} Communication Style: ${communicationStyle} Tone Style: ${toneStyle} Reasoning Framework: ${reasoningFramework}`;

		try {
			const commandToEditStyle = `/config ${learningLevel} ${depth} ${learningStyle} ${communicationStyle} ${toneStyle} ${reasoningFramework}`;
			const command = isEditStyle ? commandToEditStyle : commandToConfig;

			const endpoind = isEditStyle ? '/lesson-app/chat' : '/lesson-app/start';

			const res = await axiosClient.post(endpoind, { data: command });
			const formatResponse = res.data.data.content.split('\n') || [];

			const messageBOT = {
				text: formatResponse,
				createdAt: Timestamp.now(),
				user: {
					_id: 'ChatGPT',
					name: 'ChatGPT',
					isBot: true,
				},
				topic: topic,
			};

			// CREATE A LESSON
			const doc = await addDoc(collection(DB, 'lesson', userEmail, 'listLesson'), {
				userId: userEmail,
				createdAt: serverTimestamp(),
				topic: topic,
				typeOfLesson: plan,
				status: 'not complete',
			});

			lessonId = doc.id;

			// ADD MESSAGE USER TO LESSON
			const messageUser = {
				user: {
					_id: userEmail,
					name: userDisplayName || ' ',
					avatar: userAvatar,
				},
				text: [plan],
				createdAt: Timestamp.now(),
				topic: topic,
			};

			await addDoc(
				collection(DB, 'lesson', userEmail, 'listLesson', lessonId, 'messages'),
				messageUser
			);

			await addDoc(
				collection(DB, 'lesson', userEmail, 'listLesson', lessonId, 'messages'),
				messageBOT
			);
		} catch (error) {
			toast.error('Error when call to AI', { id: loadingToastId });
			console.error(error);
			setState({ loading: false });
			return;
		}

		try {
			const command = `/plan ${plan}`;
			const res = await axiosClient.post(`/lesson-app/chat`, { data: command });
			const arrMessageResponse = res.data.data.content.split('\n') || [];

			const message = {
				text: arrMessageResponse,
				createdAt: Timestamp.now(),
				user: {
					_id: 'ChatGPT',
					name: 'ChatGPT',
					isBot: true,
				},
				topic: topic,
			};
			await addDoc(
				collection(DB, 'lesson', user.email, 'listLesson', lessonId, 'messages'),
				message
			);
		} catch (error) {
			console.error(error);
			toast.error('Error when call to AI', { id: loadingToastId });
			setState({ loading: false });
			return;
		}

		toast.success('Success', { id: loadingToastId });
		setState({ loading: false });

		navigate('/lesson-app/' + lessonId, {
			state: {
				data: {
          learningStyle,
					depth,
					learningStyle,
					toneStyle,
					communicationStyle,
					reasoningFramework,
				},
			},
		});
	};

	return (
		<>
			<Sidebar active={active} setActive={setActive} />
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
									A lesson app that will blow your mind
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

				<div className='sm:mt-[46px] mt-[26px] xl:pl-[60px] xl:pr-[30px] no-scrollbar'>
					<h1 className='sm:text-[28px] text-[20px] font-bold text-white'>
						Personalized Lessons
					</h1>
          <div className='flex flex-row justify-between'>
            <p className='text-[#9B9C9E] font-medium sm:text-[16px] text-[14px] mt-4 w-[90%]'>
              Kickstart your learning with our comprehensive selection with Ed Tech.
              You can use the predefined prompts below. and type in what you want to
              learn in that style.
            </p>
            <div className='flex flex-col w-[10%] items-center'>
              <button 
                className='w-[40px] h-[40px] rounded-[50%] p-1 flex items-center justify-center'
                style={{ background: 'var(--glass-modal, rgba(26, 29, 33, 0.96))'}}
                onClick={() => setOpen(true)}
              >
                <img src={QuestionIcon} alt='question' />
              </button>
              <p className='text-[#A8A8A8] text-[14px] font-[600] mt-2'>Tool Tips</p>
            </div>
          </div>
				</div>
        <div>
          <div className='sm:mt-[70px] mt-[30px] justify-between grid lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-3 grid-cols-2  mx-auto gap-5 lg:gap-0'>

          <div>
							<div className='mb-[14px] bg-glass-fill px-2 py-4 rounded-3 w-[184px] mx-auto'>
								<PiChatTeardropBold className='mx-auto text-stem-green-500 max-w-[50px] max-h-[50px] w-[50px] h-[50px] mb-4 p-3 rounded-full bg-circle-icon flex items-center' />
								<p className='2xl:text-[18px] xl:text-[16px] text-[14px] font-semibold text-white text-center'>
									Learning Level
								</p>
							</div>
							{(isEmpty(listLesson) || loading || isEditStyle) && (
								<div className='pt-[9px]'>
									{LearningLevelBasic.map((data, key) => {
										const isSelectedKey = data.btn === learningLevel;
										return (
											<button
												key={key}
												onClick={() => setState({ learningLevel: data.btn })}
												className={`${
													isSelectedKey
														? 'bg-tabActive text-nobel-black-600'
														: 'bg-glass-fill text-nobel-light'
												} font-semibold border-t border-[#FFFFFF14] rounded-xl xl:p-4 p-[10px] flex gap-3 justify-between items-center text-start mx-auto xl:w-[175px] leading-[24px] w-[120px] mt-2 2xl:text-[16px] text-[13px]`}
											>
												{data.btn} <img src={data.img} alt='arrow' />
											</button>
										);
									})}
								</div>
							)}
						</div>

            <div>
							<div className='mb-[14px] bg-glass-fill px-2 py-4 rounded-3 w-[184px] mx-auto'>
								{/* <PiChatTeardropBold className='mx-auto text-stem-green-500 max-w-[50px] max-h-[50px] w-[50px] h-[50px] mb-4 p-3 rounded-full bg-circle-icon flex items-center' /> */}
								<div className='flex items-center justify-center'><img src={DepthIcon} alt='depth' className='max-w-[50px] max-h-[50px] w-[50px] h-[50px] mb-4' /></div>
                <p className='2xl:text-[18px] xl:text-[16px] text-[14px] font-semibold text-white text-center'>
									Depth
								</p>
							</div>
							{(isEmpty(listLesson) || loading || isEditStyle) && (
								<div className='pt-[9px]'>
									{Depth.map((data, key) => {
										const isSelectedKey = data.btn === depth;
										return (
											<button
												key={key}
												onClick={() => setState({ depth: data.btn })}
												className={`${
													isSelectedKey
														? 'bg-tabActive text-nobel-black-600'
														: 'bg-glass-fill text-nobel-light'
												} font-semibold border-t border-[#FFFFFF14] rounded-xl xl:p-4 p-[10px] flex gap-3 justify-between items-center text-start mx-auto xl:w-[175px] leading-[24px] w-[120px] mt-2 2xl:text-[16px] text-[13px]`}
											>
												{data.btn} <img src={data.img} alt='arrow' />
											</button>
										);
									})}
								</div>
							)}
						</div>
						<div>
							<div className='mb-[14px] bg-glass-fill px-2 py-4 rounded-3 w-[184px] mx-auto'>
								<FiEdit3 className='mx-auto text-[#82DBF7] max-w-[50px] max-h-[50px] w-[50px] h-[50px] mb-4 p-3 rounded-full bg-circle-icon flex items-center' />
								<p className='2xl:text-[18px] xl:text-[16px] text-[14px] font-semibold text-white text-center'>
									Learning Style
								</p>
							</div>
							{(isEmpty(listLesson) || loading || isEditStyle) && (
								<div className='pt-[9px]'>
									{Learning.map((data, key) => (
										<button
											key={key}
											onClick={() => setState({ learningStyle: data.btn })}
											className={`${
												data.btn === learningStyle
													? 'bg-tabActive text-nobel-black-600'
													: 'bg-glass-fill text-nobel-light'
											} font-semibold border-t border-[#FFFFFF14] rounded-xl xl:p-4 p-[10px] flex gap-3 justify-between items-center text-start mx-auto xl:w-[175px] leading-[24px] w-[120px] mt-2 2xl:text-[16px] text-[13px]`}
										>
											{data.btn} <img src={data.img} alt='arrow' />
										</button>
									))}
								</div>
							)}
						</div>
						<div>
							<div className='mb-[14px] bg-glass-fill px-2 py-4 rounded-3 w-[184px] mx-auto'>
								<RiDonutChartLine className='mx-auto text-[#BD9AF8] max-w-[50px] max-h-[50px] w-[50px] h-[50px] mb-4 p-3 rounded-full bg-circle-icon flex items-center' />
								<p className='2xl:text-[18px] xl:text-[16px] text-[14px] font-semibold text-white text-center whitespace-nowrap'>
									Communication
								</p>
							</div>
							{(isEmpty(listLesson) || loading || isEditStyle) && (
								<div className='pt-[9px]'>
									{Communication.map((data, key) => (
										<button
											key={key}
											onClick={() =>
												setState({ communicationStyle: data.btn })
											}
											className={`${
												data.btn === communicationStyle
													? 'bg-tabActive text-nobel-black-600'
													: 'bg-glass-fill text-nobel-light'
											} font-semibold border-t border-[#FFFFFF14] rounded-xl xl:p-4 p-[10px] flex gap-3 justify-between items-center text-start mx-auto xl:w-[175px] leading-[24px] mt-2 2xl:text-[16px] text-[13px]`}
										>
											{data.btn} <img src={data.img} alt='arrow' />
										</button>
									))}
								</div>
							)}
						</div>
						<div>
							<div className='mb-[14px] bg-glass-fill px-2 py-4 rounded-3 w-[184px] mx-auto'>
								<HiCheck className='mx-auto text-[#FFD147] max-w-[50px] max-h-[50px] w-[50px] h-[50px] mb-4 p-3 rounded-full bg-circle-icon flex items-center' />
								<p className='2xl:text-[18px] xl:text-[16px] text-[14px] font-semibold text-white text-center'>
									Tone Style
								</p>
							</div>
							{(isEmpty(listLesson) || loading || isEditStyle) && (
								<div className='pt-[9px]'>
									{Tone.map((data, key) => (
										<button
											key={key}
											onClick={() => setState({ toneStyle: data.btn })}
											className={`${
												data.btn === toneStyle
													? 'bg-tabActive text-nobel-black-600'
													: 'bg-glass-fill text-nobel-light'
											} font-semibold border-t border-[#FFFFFF14] rounded-xl xl:p-4 p-[10px] flex gap-3 justify-between items-center text-start mx-auto xl:w-[175px] leading-[24px] w-[120px] mt-2 2xl:text-[16px] text-[13px]`}
										>
											{data.btn} <img src={data.img} alt='arrow' />
										</button>
									))}
								</div>
							)}
						</div>
						<div>
							<div className='mb-[14px] bg-glass-fill px-2 py-4 rounded-3 w-[184px] mx-auto'>
								<LiaLightbulbSolid className='mx-auto text-[#FFD147] max-w-[50px] max-h-[50px] w-[50px] h-[50px] mb-4 p-3 rounded-full bg-circle-icon flex items-center' />
								<p className='2xl:text-[18px] xl:text-[16px] text-[14px] font-semibold text-white text-center whitespace-nowrap'>
									Reasoning
								</p>
							</div>
							{(isEmpty(listLesson) || loading || isEditStyle) && (
								<div className='pt-[9px]'>
									{Reasoning.map((data, key) => (
										<button
											key={key}
											onClick={() =>
												setState({ reasoningFramework: data.btn })
											}
											className={`${
												data.btn === reasoningFramework
													? 'bg-tabActive text-nobel-black-600'
													: 'bg-glass-fill text-nobel-light'
											} font-semibold border-t border-[#FFFFFF14] rounded-xl xl:p-4 p-[10px] flex gap-3 justify-between items-center text-start mx-auto xl:w-[175px] leading-[24px] w-[120px] mt-2 2xl:text-[16px] text-[13px]`}
										>
											{data.btn} <img src={data.img} alt='arrow' />
										</button>
									))}
								</div>
							)}
						</div>
					</div>
        </div>

        {isEmpty(listLesson) && (
          <div className='flex fex-row justify-center items-center'>
            <button
              onClick={() => handleSubmitStartLesson()}
              className=' bg-[#B6F09C]  h-12 py-2 px-10 max-w-[220px] w-[220px] justify-center rounded-lg text-[#0C1132] text-[16px] font-[600] flex items-center'
            >
              Submit
              {/* <img src={arrow2} alt='arrow' /> */}
            </button>
          </div>
        )}
        <div className='h-[20px] mt-[40px]'
          style={{background: 'linear-gradient(180deg, #282B2D 0%, rgba(54, 58, 61, 0.00) 100%)'}}
        ></div>

				<div className='xl:px-[48px]'>
					{!isEmpty(listLesson) && !loading && (
						<div className='mt-14'>{renderRecentLesson()}</div>
					)}
					<div>
						<div className='bg-[#131619] rounded-[20px] py-[10px mt-[49px] flex items-center justify-between px-6 py-3'>
							<img src={mic} alt='mic' className='' />
							<input
								placeholder=''
								className='text-[#9B9C9E] bg-transparent w-full outline-none sm:p-[12p_40px] p-[12px_29px]'
								value={valueInput}
								onChange={(e) => setState({ valueInput: e.target.value })}
								onKeyUp={handleKeyPress}
								disabled={loading}
							/>
							{loading ? (
								<img src={loadingimg} alt='loading' className='' />
							) : (
								<img
									onClick={() => handleSubmitStartLesson()}
									src={send}
									alt='send'
									className=''
								/>
							)}
						</div>

					</div>
				</div>
			</div>
      {open && <ToolTipsModal isOpen={open} setIsOpen={setOpen}/>}
		</>
	);
};

export default Platform;
