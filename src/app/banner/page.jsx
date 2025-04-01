import React from 'react';
import Drawer from '../bannerDrawer/page';
import Batches from '../mainSection/page';

const BannerPage = () => {
  return (
    <div className="bg-gray-200 ">
      <div className='flex-1 w-56 border'>
        <Drawer />
      </div>

      {/* main content */}
      <div className="flex-1 ml-56 border">
        <Batches />
      </div>
    </div>
  );
};

export default BannerPage;
