import React from "react";
import { NavLink } from "react-router-dom";
import defaultAvt from "../../Assets/Images/Avatar.png";
import setting from "../../Assets/Images/setting.png";
import search from "../../Assets/svg/search.svg";
import dashboard from "../../Assets/svg/dashboard.svg";
import bulb from "../../Assets/svg/bulb.svg";
import square from "../../Assets/svg/square.svg";
import square2 from "../../Assets/svg/square2.svg";
import triangle from "../../Assets/svg/triangle.svg";
import octagon from "../../Assets/svg/octagon.svg";
import close from "../../Assets/Images/close.png";
import Modal from "../Modal";
import Profile from "../../pages/Profile";

const Sidebar = ({ active, setActive }) => {
  console.log("active", active);
  const user = JSON.parse(localStorage.getItem('user'));
  const [showProfileModal, setShowProfileModal] = React.useState(false)
	const { displayName, photoURL, email } = user;

  const avtUrl = photoURL || defaultAvt

  return (
    <>
      <Modal 
        open={showProfileModal} 
        onClose={()=>setShowProfileModal(false)} 
        content={<Profile displayName={displayName} photoURL={avtUrl} email={email} />} 
      />
      <div
        className={
          active
            ? "bg-[#1A1D21] rounded-[20px] w-[300px] h-[calc(100vh-24px)] overflow-y-auto absolute left-0 z-10"
            : "bg-[#1A1D21CC] rounded-[20px] lg:w-[312px] w-0 h-[calc(100vh-24px)] overflow-y-auto"
        }
      >
        {/*<div className='bg-[#1A1D21CC] rounded-[20px] max-w-[312px] h-[calc(100vh-24px)] overflow-y-auto'>*/}
        <div className="p-2 flex items-start gap-3">
          <div
           onClick={()=>setShowProfileModal(true)}
           className="flex cursor-pointer justify-between items-center p-[16px] bg-grad100 rounded-[16px] border-[1px] border-[#FFFFFF14] w-full">
            <div className="flex gap-1">
              <img src={avtUrl} alt="Avatar" className="max-w-12 max-h-12 rounded-3" />
              <div>
                <h1 className="font-semibold text-[16px] text-white">
                  {displayName || 'No Name'}
                </h1>
                <p className="text-[#B6F09C] text-[12px] font-medium mt-1">
                  Premium Member
                </p>
              </div>
            </div>
            <img src={setting} alt="setting" />
          </div>
          <button className="mt-2 lg:hidden" onClick={() => setActive(false)}>
            <img src={close} alt="close" className="w-[16px]" />
          </button>
        </div>
        <div className="p-2 border-b-[#131619] border-b-[1px] pb-[38px]">
          <div className="mt-[68px] px-[16px]">
            <label className="text-[#686B6E] text-[12px] font-semibold">
              GENERAL
            </label>
            <div className="mt-[22px] flex justify-between">
              <div className="relative">
                <img
                  src={search}
                  alt="search"
                  className="absolute top-[3px] left-[-12px]"
                />
                <input
                  type="text"
                  placeholder="Search"
                  className="w-full pl-[34px] text-[14px] border-0 outline-none bg-transparent placeholder:opacity-100 text-[#fff] placeholder:text-[#fff]"
                />
              </div>
              <button className="bg-grad100 border-[1px] border-[#FFFFFF14] text-[#9B9C9E] font-semibold rounded w-[38px] h-[26px] text-[12px]">
                ⌘ S
              </button>
            </div>
          </div>
        </div>
        <div className="p-2 mt-[30px]">
          <div>
            <label className="text-[#686B6E] text-[12px] font-semibold px-[16px]">
              ACHIEVEMENT SPACES
            </label>
            <NavLink
              to="/analytics"
              className={({ isActive }) => {
                let classNames =
                  "flex cursor-pointer items-center gap-[16px] p-[13.5px_16px] mt-[28px] bg-grad100 rounded-lg border-[1px] hover:border-[#FFFFFF14] ";
                classNames += isActive
                  ? "border-[#FFFFFF14]"
                  : "border-transparent";
                return classNames;
              }}
            >
              <img
                src={dashboard}
                alt="analytics"
                className="shadow-[0px_10px_15px_-3px_#B6F09C29]"
              />
              <p className="text-[#E8E9E9] text-[14px] font-semibold">
                Analytics & Performance
              </p>
            </NavLink>
            <div className="flex cursor-pointer items-center gap-[16px] px-[16px] mt-[29px]">
              <img
                src={bulb}
                alt="bulb"
                className="shadow-[0px_10px_15px_-3px_#B6F09C29]"
              />
              <p className="text-[#E8E9E9] text-[14px] font-semibold">
                Test Lab
              </p>
            </div>
          </div>
        </div>
        <div className="p-2 my-[30px]">
          <div>
            <label className="text-[#686B6E] text-[12px] font-semibold px-[16px]">
              LEARNING SPACES
            </label>
            <NavLink
              to="/lesson-app"
              className={({ isActive }) => {
                let classNames =
                  "flex cursor-pointer items-center gap-[16px] p-[13.5px_16px] mt-[28px] bg-grad100 rounded-lg border-[1px] hover:border-[#FFFFFF14] ";
                classNames += isActive
                  ? "border-[#FFFFFF14]"
                  : "border-transparent";
                return classNames;
              }}
            >
              <img
                src={square}
                alt="square"
                className="shadow-[0px_10px_15px_-3px_#B6F09C29]"
              />
              <p className="text-[#E8E9E9] text-[14px] font-semibold">
                Personalized Lessons
              </p>
            </NavLink>
            <NavLink
              to="/gpt-hub"
              className={({ isActive }) => {
                let classNames =
                  "flex cursor-pointer items-center gap-[16px] p-[13.5px_16px] mt-[4px] bg-grad100 rounded-lg border-[1px] hover:border-[#FFFFFF14] ";
                classNames += isActive
                  ? "border-[#FFFFFF14]"
                  : "border-transparent";
                return classNames;
              }}
              end
            >
              <img
                src={triangle}
                alt="triangle"
                className="shadow-[0px_10px_15px_-3px_#B6F09C29]"
              />
              <p className="text-[#E8E9E9] text-[14px] font-semibold">
                GPT-Hub
              </p>
            </NavLink>
            <NavLink
              to="/personal-gpt"
              className={({ isActive }) => {
                let classNames =
                  "flex cursor-pointer items-center gap-[16px] p-[13.5px_16px] mt-[4px] bg-grad100 rounded-lg border-[1px] hover:border-[#FFFFFF14] ";
                classNames += isActive
                  ? "border-[#FFFFFF14]"
                  : "border-transparent";
                return classNames;
              }}
            >
              <img
                src={square2}
                alt="square"
                className="shadow-[0px_10px_15px_-3px_#B6F09C29]"
              />
              <p className="text-[#E8E9E9] text-[14px] font-semibold">
                Personal AI-GPT
              </p>
            </NavLink>

            <NavLink
              to="/exam-booking-app"
              className={({ isActive }) => {
                let classNames =
                  "flex cursor-pointer items-center gap-[16px] p-[13.5px_16px] mt-[4px] bg-grad100 rounded-lg border-[1px] hover:border-[#FFFFFF14] ";
                classNames += isActive
                  ? "border-[#FFFFFF14]"
                  : "border-transparent";
                return classNames;
              }}
            >
              <img
                src={octagon}
                alt="octagon"
                className="shadow-[0px_10px_15px_-3px_#B6F09C29]"
              />
              <p className="text-[#E8E9E9] text-[14px] font-semibold">
                Exam Booking App
              </p>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
