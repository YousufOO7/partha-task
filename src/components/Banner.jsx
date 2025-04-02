'use client'
import React, { useState } from 'react';
import SideBar from './SideBar';
import Batches from './Batches';

const BannerPage = () => {
  const [showSidebar,setShowSidebar] = useState(true)
  return (
    <div className=" flex bg-gray-200">
      <div className=' border '>
        <SideBar />
      </div>

      {/* main content */}
      <div className="flex-1  border">
        <Batches />
      </div>
    </div>
  );
};

export default BannerPage;