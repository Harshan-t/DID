import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import LandingPage from './pages/LandingPage';
import FileUploader from './pages/FileUploader';
import LoginPage from './pages/Login';

function App ()  {
  return (
    <>
    
      <LoginPage />
    </>
  )
};

export default App;