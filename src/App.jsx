import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import LandingPage from './pages/LandingPage';
import FileUploader from './pages/FileUploader';
import LoginPage from './pages/Login';
// import NotFound from './pages/NotFound';
// import { Navbar } from '@nextui-org/react';

const App = () => (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          {/* <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} /> */}
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/fileupload" element={<FileUploader />} />
          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </BrowserRouter>
);

export default App;