"use client"
 
import * as React from "react"
 
import { Progress } from "@/components/ui/progress"
import { IoIosArrowDown } from "react-icons/io";
import MainTab from "../Tabs/page";

const Batches = () => {

    const [progress, setProgress] = React.useState(13)
 
    React.useEffect(() => {
      const timer = setTimeout(() => setProgress(66), 500)
      return () => clearTimeout(timer)
    }, [])

    return (
        <div className='h-[89vh]'>
            <div className='px-5'>
                <div className='flex justify-between items-center'>
                    <div className='flex gap-5 my-2'>

                        <div className='flex gap-2 items-center bg-white text-black px-3 py-2 rounded-lg'>
                            <h4>Course for Chemistry</h4>
                            <span><IoIosArrowDown /></span>
                        </div>

                        <div className='border border-t border-black'></div>

                        <div className='flex gap-2 items-center bg-white text-black px-3 py-2 rounded-lg'>
                            <h4>All Batches</h4>
                            <span><IoIosArrowDown /></span>
                        </div>

                    </div>

                    <div className='flex gap-5 my-2'>

                        <div className='flex gap-2 items-center bg-black text-white px-3 py-2 text-xs rounded-lg'>
                            <span><IoIosArrowDown /></span>
                            <h4>Take Class</h4>
                        </div>

                        <div className='flex gap-2 items-center bg-white text-black px-3 py-2 text-xs rounded-xl'>
                            <h4>Add TA</h4>
                        </div>

                    </div>
                </div>

                <div className="my-1"><Progress value={progress} className="w-[100%]" /></div>

                <div>
                    <MainTab />
                </div>
            </div>
        </div>
    );
};

export default Batches;