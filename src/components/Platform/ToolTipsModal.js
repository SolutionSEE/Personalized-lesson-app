import { Dialog, Transition } from '@headlessui/react'
import React, { Fragment, useState } from 'react'
import ExitTooltip from '../../Assets/svg/exit_tooltip.svg'
import LearningLevelIcon from '../../Assets/svg/learning_level_icon.svg'
import DepthIcon from '../../Assets/svg/depth_icon.svg'
import LearningStyleIcon from '../../Assets/svg/learning_style_icon.svg'
import CommunicationIcon from '../../Assets/svg/communication_icon.svg'
import ToneStyleIcon from '../../Assets/svg/tone_style_icon.svg'
import ReasoningIcon from '../../Assets/svg/reasoning_icon.svg'


const TipDataShadow = [
  {
    img: LearningLevelIcon,
    title: 'Learning Level',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '
  },
  {
    img: DepthIcon,
    title: 'Depth',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, qu'
  }
]

const TipData = [
  {
    img: LearningStyleIcon,
    title: 'Learning Style',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '
  },
  {
    img: CommunicationIcon,
    title: 'Communication',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut .'
  },
  {
    img: ToneStyleIcon,
    title: 'Tone Style',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '
  },
  {
    img: ReasoningIcon,
    title: 'Reasoning',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut .'
  }
]


const ToolTipsModal = (props) => {
  const { isOpen, setIsOpen } = props;

  return (
    <>
      <Transition appear show={isOpen} as={Fragment} className="z-[100]">
        <Dialog 
          as="div" 
          className="relative" 
          onClose={() => setIsOpen(false)}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>
          <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-end text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel 
                  className=" transform overflow-hidden rounded-0 mr-[12px] bg-[#292A2C]  p-[12px] sm:px-[20px] sm:py-[40px] pt-12 pb-12 text-left align-right transition-all w-[578px] h-[calc(100vh-0px)]"
                  // style={{ background: 'var(--glass-modal, rgba(26, 29, 33, 0.96))'}}
                >
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900 flex flex-row justify-between"
                  >
                    <div className='flex flex-row items-center justify-center w-[80%]'>
                      <span className='text-white leading-[32px] text-[36px] font-[400]'>TOOL</span>
                      <span 
                        className='text-[#afeae1] leading-[32px] text-[36px] font-[700] ml-2'
                      >TIPS</span>
                    </div>
                    <div className='flex flex-col items-center w-[20%]'>
                      <button 
                        onClick={() => setIsOpen(false)} 
                        className='w-[26px] h-[40px]'>
                        <img src={ExitTooltip} alt='close' />
                      </button>
                      <p className='text-[#A8A8A8] text-[14px] font-[600]'>Exit Tip</p>
                    </div>
                  </Dialog.Title>

                  <div className="w-full py-1 sm:px-0 h-[calc(100vh-105px)] overflow-y-auto">
                    <div className='text-[#9B9C9E] text-[14px] font-[700] leading-[20px] px-[60px] mt-[20px]'>
                      Below is a cheat sheet to help you better understand a pre defined learning style to meet your needs.
                    </div>
                    <div class="grid grid-cols-2 gap-4 mt-[4rem]">
                      {TipDataShadow.map((item, index) => (
                        <div className='flex flex-col justify-center items-center'>
                          <div><img src={item.img} alt='' /></div>
                          <div className='m-[18px_0px]'><p className='text-white text-[18px] font-[600]'>{item.title}</p></div>
                          <div><p className='flex text-center justify-center text-[#9B9C9E] text-[14px] font-[600] leading-[20px]'>{item.desc}</p></div>
                        </div>
                      ))}
                      {TipData.map((item, index) => (
                        <div className='flex flex-col justify-center items-center'>
                          <div><img src={item.img} alt='' /></div>
                          <div className='-mt-[36px] mb-[18px]'><p className='text-white text-[18px] font-[600]'>{item.title}</p></div>
                          <div><p className='flex text-center justify-center text-[#9B9C9E] text-[14px] font-[600] leading-[20px]'>{item.desc}</p></div>
                        </div>
                      ))}
                    </div>
                  </div>



                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}

export default ToolTipsModal;
