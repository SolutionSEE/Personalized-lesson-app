import React, { useEffect, useState } from 'react';
import avtEdTech from '../Assets/svg/logo-edtech.png';
import defaultAvt from '../Assets/svg/avatar.png';
import copySvg from '../Assets/svg/copy.svg';
import chevronDownTiny from '../Assets/svg/chevron-down-tiny.svg';
import likeSvg from '../Assets/svg/like.svg';
import dislikeSvg from '../Assets/svg/un-like.svg';
import { BsCheckLg } from 'react-icons/bs';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { toast } from 'react-hot-toast';
import BoxPagination from './BoxPagination';

const NAME_BOT = 'Ed Tech';

const BoxMessage = ({
	isBot,
	time,
	text,
	author = '',
	onCopyText,
	fullWidth = false,
	onRegenerateResponse,
	avatar,
  addPrompt,
  valuePrompt,
  incrementPrompt,
  lessonNumber,
  indexData,
  data,
  message,
  setLessonNumber
}) => {
	const [isCopied, setIsCopied] = React.useState(false);
  const [counter, setCounter] = useState(0)

  useEffect(() => {
    const lessonNew = message?.lesson ?  message?.lesson : indexData === 0 ? 0 : data[indexData-1]?.lesson ? data[indexData-1]?.lesson : 0
    setLessonNumber(lessonNew);
    setCounter(lessonNew);

  }, [message, data, indexData]);

	const renderAuthorAndTime = () => (
		<div className='flex justify-between flex-1 items-center'>
			<div className='flex items-center gap-[16px]'>
				<p className='font-semibold text-[16px] leading-[24px] tracking-tighter-[0.15px] text-white'>
					{isBot ? NAME_BOT : author}
				</p>

				<p className='text-[12px] leading-[18px] font-[500] tracking-tighter-[0.15px] text-[#686B6E]'>
					{time}
				</p>
			</div>

			<div>
				<CopyToClipboard
					text={text}
					onCopy={() => {
						toast.success('Copied to clipboard');
						setIsCopied(true);
					}}
				>
					{isCopied ? (
						<BsCheckLg className='text-nobel' />
					) : (
						<img
							src={copySvg}
							alt='copy-icon'
							className='cursor-pointer'
							onClick={onCopyText}
						/>
					)}
				</CopyToClipboard>
			</div>
		</div>
	);

	React.useEffect(() => {
		const timeoutId = setTimeout(() => {
			if (isCopied) setIsCopied(false);
		}, 3000);

		return () => clearTimeout(timeoutId);
	}, [isCopied]);

  const handlePromptIncrement = (item, index) => {
    if(index === 0) {
      incrementPrompt(true)
    } else {
      incrementPrompt(false)
    }
    addPrompt(item);
  } 

	return (
		<div className='border border-nobel-dark rounded-[16px] p-2 md:p-4'>
			<div
				className={`w-full flex flex-col md:flex-row items-start gap-1 md:gap-3 flex-1 `}
			>
				<div className='flex w-full md:w-fit gap-2'>
					<div className='min-w-[62px]'>
						<img
							src={isBot ? avtEdTech : avatar || defaultAvt}
							alt='avatar'
							className='w-12 h-12 rounded-[20px]'
						/>
					</div>
					<div className='flex md:hidden w-full'>{renderAuthorAndTime()}</div>
				</div>

				<div className='py-2 flex-1'>
					<div className='hidden md:inline-flex w-full'>{renderAuthorAndTime()}</div>

					<div className='mt-3 flex flex-col gap-6 md:gap-9 max-w-full min-[1400px]:max-w-[90%]'>
						{text.map((content, index) => (
							<p
								key={'line' + index}
								className='text-[16px] font-[500] leading-[24px] text-nobel tracking-tighter-[0.15px]'
							>
								{content}
							</p>
						))}
					</div>

					{isBot && (
						<div className='bg-[#D9D9D9] rounded-3 bg-opacity-50 flex items-center flex-wrap md:flex-nowrap w-full gap-3 md:gap-0 md:justify-between px-1 py-3  md:px-2 xl:py-6 xl:px-8 mt-14'>
							<p className='text-[#131619] font-medium text-[16px] leading-6 stacked-fractions-[0.15px]'>
								Is this what you want to learn?
							</p>
							<div className='flex items-center gap-1 xl:gap-3 cursor-pointer'>
								<img src={likeSvg} alt='likesvg' />
								<p>Yes</p>
							</div>
							<div className='flex items-center gap-1 xl:gap-3 cursor-pointer'>
								<img src={dislikeSvg} alt='dislike' />
								<p>No</p>
							</div>
              <BoxPagination 
                counter={counter} 
                setCounter={setCounter} 
                addPrompt={addPrompt}
                incrementPrompt={incrementPrompt}
                setLessonNumber={setLessonNumber}
              />
							<p className='px-3 py-2 bg-[#1A1D21CC] text-nobel rounded-lg font-semibold text-xs stacked-fractions-[0.15px] cursor-pointer'>
								Upload Example
							</p>
							<p
								onClick={onRegenerateResponse}
								className='px-3 py-2 bg-[#1A1D21CC] text-nobel rounded-lg font-semibold text-xs stacked-fractions-[0.15px] cursor-pointer'
							>
								Regenerate Response
							</p>
						</div>
					)}

					{/* {isBot && (
						<div>
							<p className='font-semibold text-[14px] leading-6 text-white mt-[30px] md:mt-[60px]'>
								Below are suggested prompts to help you get started.
							</p>

							<div className='flex items-center max-w-[830px] justify-between mt-6 md:mt-9'>
								{[
									`start lesson ${counter + 1 }`,
									'Writing Recursive Functions',
									'Using Loops For Iteration',
									'Test Examples',
								].map((item, index) => (
									<p
										key={index}
                    onClick={() => handlePromptIncrement(item, index)}
										className={`${valuePrompt === item ? 'border-white border-[1px]' : ''} bg-glass-fill p-3 md:p-6 rounded-3 text-white cursor-pointer font-semibold text-[14px] leading-6 capitalize`}
									>
										{item}
									</p>
								))}
							</div>
						</div>
					)} */}
				</div>
			</div>
		</div>
	);
};

export default BoxMessage;
