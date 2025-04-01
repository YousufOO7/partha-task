import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

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
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" className='items-center text-center'>
                    <Tab label="Students" {...a11yProps(0)} sx={{ fontSize: '0.75rem' }} />
                    <Tab label="Announcements" {...a11yProps(1)} sx={{ fontSize: '0.75rem' }} />
                    <Tab label="Materials" {...a11yProps(2)} sx={{ fontSize: '0.75rem' }} />
                    <Tab label="Homework" {...a11yProps(3)} sx={{ fontSize: '0.75rem' }} />
                    <Tab label="Attendants" {...a11yProps(4)} sx={{ fontSize: '0.75rem' }} />
                    <Tab label="Discussion" {...a11yProps(5)} sx={{ fontSize: '0.75rem' }} />
                    <div className='flex items-center text-center'>
                        <button>X</button>
                    </div>
                </Tabs>
            </Box>
            <CustomTabPanel value={value} index={0}>
                Students
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
               Announcements
            </CustomTabPanel>
            <CustomTabPanel value={value} index={2}>
                Materials
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