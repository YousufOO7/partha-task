import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { PiDotsThreeOutlineFill } from "react-icons/pi";
import { GoTrash, GoPlus } from "react-icons/go";
import { FiDownload } from "react-icons/fi";
import { PiNotePencil } from "react-icons/pi";
import { LuArrowDownUp } from "react-icons/lu";
import { GiSettingsKnobs } from "react-icons/gi";
import { AiOutlineSearch } from "react-icons/ai";


function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
        </div>
    );
}

CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const ContentPage = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }} className="flex justify-between">
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" className='items-center text-center'>
                    <Tab label="Content" {...a11yProps(0)} sx={{ fontSize: '0.75rem' }} />
                    <Tab label="Course Details" {...a11yProps(1)} sx={{ fontSize: '0.75rem' }} />
                    <Tab label="Revision" {...a11yProps(2)} sx={{ fontSize: '0.75rem' }} />
                    <div className='flex items-center text-center gap-2'>
                        <button
                            className='border border-black rounded-full bg-black text-white'>
                            <GoPlus />
                        </button>
                        <span className='text-gray-400'>Add main folder</span>
                    </div>


                </Tabs>
                <div className="flex gap-3 justify-between">
                    <div className="relative mr-10 mt-2">
                            <input
                                type="text"
                                className="px-5 w-2/3  border border-gray-300 rounded-full focus:outline-none focus:ring-1 focus:ring-gray-400"
                            />
                            <span className="absolute left-2 top-1/4 transform -translate-y-1/4 text-gray-500">
                                <AiOutlineSearch />
                            </span>
                    </div>


                    <div className='flex items-center'>
                        <button className='border border-black rounded-full'><PiDotsThreeOutlineFill /></button>
                    </div>

                    <button><PiNotePencil /></button>
                    <button><GoTrash /></button>
                    <button className='opacity-80 text-lg'><FiDownload /></button>
                    <button><LuArrowDownUp /></button>
                    <button><GiSettingsKnobs /></button>
                </div>
            </Box>

            <CustomTabPanel value={value} index={0}>
                Content
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
                Course Details
            </CustomTabPanel>
            <CustomTabPanel value={value} index={2}>
                Revision
            </CustomTabPanel>
        </Box>
    );
};

export default ContentPage;