import React, { useContext, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ThemeContext } from '../context/theme.context';
import Header from '../Header/Header';
import Home from '../Component/Home/Home';
import Home_2 from '../Component/Home/Home_2';
import Home_3 from '../Component/Home/Home_3';
import Portfolio from '../Component/Protfoliyo/Portfolio';
import Blog from '../Component/Blog/Blog';
import Footer from '../Footer/Footer';



function UserRouts(props) {
    const themeData = useContext(ThemeContext);
      console.log(themeData);

    return (
        <div className={`${themeData.theme} dark:bg-black  bg-primary  text-black  dark:text-primary  font-Lato`}>
            <Header />
            <Routes>
                <Route path='/' element={<Home_3/>} ></Route>
                
                <Route path='/blog' element={<Blog/>} ></Route>
                 {/* <Route path='/' element={ <Portfolio/>} ></Route> */}
               
                 
            </Routes>
           <Footer />


        </div>
    );
}

export default UserRouts;