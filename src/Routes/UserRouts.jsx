import React, { useContext, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ThemeContext } from '../context/theme.context';
import Header from '../Header/Header';
import Home from '../Component/Home/Home';
import Home_2 from '../Component/Home/Home_2';
import Home_3 from '../Component/Home/Home_3';



function UserRouts(props) {
    const themeData = useContext(ThemeContext);
      console.log(themeData);

    return (
        <div className={`${themeData.theme} dark:bg-black  bg-primary  text-black  dark:text-primary  font-Lato`}>
            <Header />
            <Routes>
                <Route path='/' element={<Home_3/>} ></Route>
                 
            </Routes>
           


        </div>
    );
}

export default UserRouts;