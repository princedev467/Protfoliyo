import React, { useContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ThemeContext } from '../context/theme.context';
import Header  from '../Header/Header';
import Home_3  from '../Component/Home/Home_3';
import About   from '../Component/About/About';
import Skills  from '../Component/Skills/Skills';
import Contact from '../Component/Contact/Contact';
import Blog    from '../Component/Blog/Blog';
import Footer  from '../Footer/Footer';

function UserRouts() {
    const themeData = useContext(ThemeContext);

    return (
        <div className={`${themeData.theme} min-h-screen font-Poppins bg-gray-50 dark:bg-[#0b1215] transition-colors duration-300`}>
            <Header />
            <Routes>
                <Route path='/'        element={<Home_3  />} />
                <Route path='/about'   element={<About   />} />
                <Route path='/skills'  element={<Skills  />} />
                <Route path='/contact' element={<Contact />} />
                {/* <Route path='/blog'    element={<Blog    />} /> */}
            </Routes>
            <Footer />
        </div>
    );
}

export default UserRouts;