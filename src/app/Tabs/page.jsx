import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { PiDotsThreeOutlineFill } from "react-icons/pi";
import { GoTrash } from "react-icons/go";
import { FiDownload } from "react-icons/fi";
import Materials from '../Route/Materials/page';

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

const MainTab = () => {
    const [value, setValue] = React.useState(2);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }} className="flex justify-between">
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" className='items-center text-center'>
                    <Tab label="Students" {...a11yProps(0)} sx={{ fontSize: '0.75rem' }} />
                    <Tab label="Announcements" {...a11yProps(1)} sx={{ fontSize: '0.75rem' }} />
                    <Tab label="Materials" {...a11yProps(2)} sx={{ fontSize: '0.75rem' }} />
                    <Tab label="Homework" {...a11yProps(3)} sx={{ fontSize: '0.75rem' }} />
                    <Tab label="Attendants" {...a11yProps(4)} sx={{ fontSize: '0.75rem' }} />
                    <Tab label="Discussion" {...a11yProps(5)} sx={{ fontSize: '0.75rem' }} />
                    <div className='flex items-center text-center'>
                        <button className='border border-black rounded-full'><PiDotsThreeOutlineFill /></button>
                    </div>

                    
                </Tabs>
                <div className="flex gap-3 justify-between">
                        <button className='opacity-80 text-lg'><GoTrash /></button>
                        <button className='opacity-80 text-lg'><FiDownload /></button>
                    </div>
            </Box>

            <CustomTabPanel value={value} index={0}>
                Students
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
                Announcements
            </CustomTabPanel>
            <CustomTabPanel value={value} index={2}>
                <Materials />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={3}>
                Homework
            </CustomTabPanel>
            <CustomTabPanel value={value} index={4}>
                Attendants
            </CustomTabPanel>
            <CustomTabPanel value={value} index={5}>
                Discussion
            </CustomTabPanel>
        </Box>
    );
};

export default MainTab;