import React from 'react';
import { GoArrowLeft } from "react-icons/go";
import { MdDriveFolderUpload, MdOutlineArrowForwardIos } from "react-icons/md";
import { FaEye, FaInfo } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { GoFileDirectoryFill } from "react-icons/go";
import { FiFileText } from "react-icons/fi";
import { LuFilePlus } from "react-icons/lu";
import { MdCloudUpload } from "react-icons/md";
import { CgFormatText } from "react-icons/cg";
import { ImPaste } from "react-icons/im";

const ChapterPage = () => {
    return (
        <div>
            <div className='flex justify-between -mt-3'>
                <div className='flex items-center gap-2 text-sm'>
                    <button className='bg-black text-white p-1 rounded-full'><GoArrowLeft /></button>

                    <a href='#' className='underline'>Chapter 1</a>
                    <button><MdOutlineArrowForwardIos /></button>
                    <a href='#' className='underline'>Chapter 1.1</a>
                    <button><MdOutlineArrowForwardIos /></button>

                    <div className='flex items-center gap-1 bg-gray-200 p-2 rounded-md'>
                        <input type="checkbox" className="checkbox" />
                        <p className='font-semibold'>Chapter 1</p>
                    </div>
                </div>

                <div className='flex items-center gap-2 text-sm'>
                    <div className='flex items-center'>
                        <button className='border border-black rounded-full'><FaInfo /></button>
                    </div>

                    <div className='flex items-center gap-2 bg-gray-100 rounded-md p-1'>
                        <span><FaEye /></span>
                        <p className='flex items-center gap-2'>
                            <span>Access to</span>
                            <span><IoIosArrowDown /></span>
                        </p>
                    </div>

                    <div className='flex items-center bg-gray-100 rounded-md p-1'>
                        <p className='flex items-center gap-2'>
                            <span>Actions</span>
                            <span><IoIosArrowDown /></span>
                        </p>
                    </div>
                </div>
            </div>

            <div className='border border-t border-r-0 border-l mt-1'>
                <div className='grid grid-cols-5 border-b'>
                    <div className='col-span-4 border-r border-black '>
                        <div className='flex justify-between mt-3 px-2'>
                            {/* left chapter */}
                            <div className='flex items-center gap-1'>
                                <input type="checkbox" className="checkbox" />
                                <button><GoFileDirectoryFill className='text-3xl' /></button>
                                <div className='flex items-center gap-2'>
                                    <a href='#' className='underline font-semibold'>Chapter 1.1</a>
                                    <button><MdOutlineArrowForwardIos /></button>
                                </div>
                            </div>

                            {/* right icons */}
                            <div className='flex items-center gap-2 text-sm'>
                                <div className='flex items-center'>
                                    <button className='border border-black rounded-full bg-black text-white'><FaInfo /></button>
                                </div>

                                <div className='flex items-center gap-2 bg-gray-100 rounded-md p-1'>
                                    <span><FaEye /></span>
                                    <p className='flex items-center gap-2'>
                                        <span>Access to</span>
                                        <span><IoIosArrowDown /></span>
                                    </p>
                                </div>

                                <div className='flex items-center bg-gray-100 rounded-md p-1'>
                                    <p className='flex items-center gap-2'>
                                        <span>Actions</span>
                                        <span><IoIosArrowDown /></span>
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className='flex justify-between mt-20'>
                            <div className='flex-1'></div>

                            <div className='flex-1 text-xs'>
                                <p className='flex items-center'>
                                    <span className='font-semibold mr-1'>Visible to:</span>
                                    <span className='text-gray-400'>Batch 1, Batch 2, Batch 3, For both online & physical students</span>
                                </p>
                            </div>
                        </div>

                    </div>


                    <div className='col-span-1 pl-2 py-1'>
                        <p className='text-sm'>
                            <span className='font-semibold mr-1'>Created on :</span>
                            <span>25/02/2025 10:35 pm</span>
                        </p>
                        <p className=' text-sm'>
                            <span className='font-semibold mr-1'>Created by :</span>
                            Sir</p>
                        <p className=' text-sm'>
                            <span className='font-semibold mr-1'>Last Modified :</span>
                            <span>Friday, 25/02/2025 10:35 pm</span>
                        </p>
                        <p className=' text-sm'>
                            <span className='font-semibold mr-1'>Last Modified by :</span>
                            Sir</p>
                        <p className=' text-sm'>
                            <span className='font-semibold mr-1'>Kind :</span>
                            PDF Docoment</p>
                        <p className=' text-sm'>
                            <span className='font-semibold mr-1'>Size :</span>
                            23 MB</p>
                    </div>
                </div>
            </div>

            {/* chapter 2 */}
            <div className='border border-b border-t-0 border-r-0'>
                <div className='flex justify-between py-3 px-2'>
                    {/* left chapter */}
                    <div className='flex items-center gap-1'>
                        <input type="checkbox" className="checkbox" />
                        <button><FiFileText className='text-3xl' /></button>
                        <div className='flex items-center gap-2'>
                            <a href='#' className='font-semibold'>Chapter 2 revision notes.pdf</a>
                            <button><MdOutlineArrowForwardIos /></button>
                        </div>
                    </div>

                    {/* right icons */}
                    <div className='flex items-center gap-2 text-sm'>
                        <div className='flex items-center'>
                            <button className='border border-black rounded-full bg-black text-white'><FaInfo /></button>
                        </div>

                        <div className='flex items-center gap-2 bg-gray-100 rounded-md p-1'>
                            <span><FaEye /></span>
                            <p className='flex items-center gap-2'>
                                <span>Access to</span>
                                <span><IoIosArrowDown /></span>
                            </p>
                        </div>

                        <div className='flex items-center bg-gray-100 rounded-md p-1'>
                            <p className='flex items-center gap-2'>
                                <span>Actions</span>
                                <span><IoIosArrowDown /></span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* upload data folder file */}
            <div className='border border-b border-t-0 border-r-0 py-2'>
                <div className='flex justify-evenly gap-4'>
                    <div className='flex items-center gap-2 border rounded-lg border-black border-dashed p-3'>
                        <span className='bg-black text-white'><LuFilePlus /></span>
                        <span>Add Folder</span>
                    </div>
                    <div className='flex items-center gap-2 border rounded-lg border-black border-dashed p-3'>
                        <span className='bg-black text-white'><MdCloudUpload /></span>
                        <span>Upload File</span>
                    </div>
                    <div className='flex items-center gap-2 border rounded-lg border-black border-dashed p-3'>
                        <span className='bg-black text-white'><MdDriveFolderUpload /></span>
                        <span>Upload Folder</span>
                    </div>
                    <div className='flex items-center gap-2 border rounded-lg border-black border-dashed p-3'>
                        <span className='bg-black text-white'><CgFormatText /></span>
                        <span>Add Text</span>
                    </div>
                    <div className='flex items-center gap-2 border rounded-lg border-black border-dashed p-3'>
                        <span className=''><ImPaste /></span>
                        <span>Paste</span>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ChapterPage;