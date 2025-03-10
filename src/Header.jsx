import React, { useContext } from 'react';
import { ThemeContext } from './ThemeProvider.jsx';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
const Header = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);
    return (
        <div className='flex justify-between p-4 justify-items-center '>
            <div className='text-xl font-bold text-black dark:text-white'>Character counter</div>
            <div className='bg-gray-500 w-10 h-10 flex justify-center items-center rounded-lg cursor-pointer'>
                {theme === "dark" ?
                    <button onClick={toggleTheme} className='cursor-pointer'>
                        <LightModeIcon className='h-8 w-8 text-white' />
                    </button> :
                    <button onClick={toggleTheme} className='cursor-pointer'>
                        <DarkModeIcon className='text-white' />
                    </button>}
            </div>
        </div>
    )
}
export default Header