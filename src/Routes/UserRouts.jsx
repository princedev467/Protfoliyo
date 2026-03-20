import React, { useContext, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ThemeContext } from '../context/theme.context';
import Header from '../Header/Header';
import Home from '../Component/Home/Home';



function UserRouts(props) {
    const themeData = useContext(ThemeContext);
      console.log(themeData);

    return (
        <div className={`${themeData.theme} bg-primary dark:bg-black font-Lato`}>
            <Header />
            <Routes>
                <Route path='/' element={<Home />} ></Route>
                 
            </Routes>
           


        </div>
    );
}

export default UserRouts;