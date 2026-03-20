import React from 'react';
import Demo from './Demo/Demo';
import Nevbar from './Demo/Nevbar';
import Styletai from './Styletai/Styletai';
import Header from './Header/Header';
import GridDemo from './Demo/GridDemo';
import { ThemeProvider } from './context/theme.context';
import { Route, Routes } from 'react-router-dom';
import UserRouts from './Routes/UserRouts';
import PrivateRouts from './Routes/PrivateRouts';
import AdminRouts from './Routes/AdminRouts';
import Animation from './Demo/animation';

function App(props) {
  return (
    <div>

      <ThemeProvider>
    
        <Routes>
          <Route path='/*' element={<UserRouts />}></Route>

          <Route element={<PrivateRouts />}>
            <Route path='admin/*' element={<AdminRouts />}></Route>
          </Route>


        </Routes>

      </ThemeProvider>
      {/* <Animation/> */}
      {/* <Header /> */}
      {/* <GridDemo /> */}
    </div>
  );
}

export default App;