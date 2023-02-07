import React from 'react';
import InterFace from './InterFace';
import LogIn from './LogIn';
import HomePage from './HomePage';
import { Routes as Routess, Route } from 'react-router-dom';
import Nav from './Nav';
import { Box } from '@chakra-ui/react';
import Footer from './Footer';
import SignUp from './SignUp';

function Routes() {
  return (
    <Box>
      <Routess>
        <Route path="/" element={<InterFace />}></Route>
      </Routess>
      <Nav/>
      <Routess>
        <Route path="/logIn" element={<LogIn />}></Route>
        <Route path="/saudiday" element={<HomePage />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
      </Routess>
      <Footer />
    </Box>
  );
}

export default Routes;
