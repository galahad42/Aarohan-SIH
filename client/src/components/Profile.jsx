import React from 'react';
import profilelogo from "../assests/profilelogo.svg";
import coin from "../assests/coin.svg";
import hourglass from "../assests/hourglass.svg";
import yellowcrown from "../assests/yellowcrown.svg";

const Profile = () => {
    return (
        <div className="bg-gray-100 h-[100%] flex">

            <div className="w-1/4 bg-[#7350FD] p-8">
                <div className=" bg-white rounded-full w-[311px] h-[315px]">
                    <img
                        src={profilelogo}
                        alt="Profile"
                        className="w-[100%] rounded-full mx-auto"
                    />
                </div>
                <ul className='flex flex-col items-center mt-11 gap-7 text-white font-bold text-lg'>
                    <li className="mb-2">
                        <a href="#">My Profile</a>
                    </li>
                    <li className="mb-2">
                        <a href="#">Settings</a>
                    </li>
                    <li className="mb-2">
                        <a href="#">Help</a>
                    </li>
                    <li className="mb-2 text-black">
                        <a href="#">App Intro</a>
                    </li>
                </ul>
            </div>

            <div className="w-3/4 bg-gray-200 p-6 text-white flex flex-col justify-between">
                <div >
                    <div className="flex justify-evenly mb-4">
                        <div className="w-1/4 h-1/4 p-4 rounded-lg shadow-md bg-[#FF4F77]">
                            <h2 className="text-lg font-semibold mb-2">Coins Collected:</h2>
                            <p className='font-bold text-lg'>0</p>
                            <div className='flex justify-center'>
                                <img
                                    src={coin}
                                    alt="Card 1"
                                    className="w-[130px] h-[124px] object-cover rounded"
                                />
                            </div>
                        </div>

                        {/* Card 2 */}
                        <div className="w-1/4 h-1/4 p-4 rounded-lg shadow-md bg-[#4269EF]">
                            <h2 className="text-lg font-semibold mb-2">Modules Completed:</h2>
                            <p className='font-bold text-lg'>0</p>
                            <div className='flex justify-center'>
                                <img
                                    src={yellowcrown}
                                    alt="Card 2"
                                    className="w-[108px] h-[127px] object-cover rounded"
                                /></div>
                        </div>

                        {/* Card 3 */}
                        <div className="w-1/4 h-1/4 p-4 rounded-lg shadow-md bg-[#43BFAA]">
                            <h2 className="text-lg font-semibold mb-2">Time Spent learning:</h2>
                            <p className='font-bold text-lg'>0</p>
                            <div className='flex justify-center'>
                                <img
                                    src={hourglass}
                                    alt="Card 3"
                                    className="w-[81px] h-[127px] object-cover rounded"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Logout Button */}
                <div className='flex justify-center'>
                    <div className="text-center w-[88%]">
                        <button className="bg-[#00BB88] hover:bg-[#1a2f29] text-white font-semibold py-2 px-4 rounded-full w-full">
                            Logout
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;