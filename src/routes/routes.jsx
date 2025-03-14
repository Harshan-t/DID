import { Component } from "react"
import Dashboard from "../pages/Dashboard"
import LoginPage from "../pages/Login"
import FileUploader from "../pages/FileUploader"
import LandingPage from "../pages/LandingPage"
import SignupPage from "../pages/signup"
import VerifiedCredential from "../pages/vc"
const routes = [
    {
        path: "/",
        element : <Dashboard />
    },
    {
        path: "/login",
        element: <LoginPage />
    },
    {
        path: "/register",
        element: <SignupPage />
    },
    {
        path: "/fileupload",
        element: <FileUploader />
    },
    {
        path: "/home",
        element: <LandingPage />
    },
    {
        path: "/vc",
        element: <VerifiedCredential/>
    }
]

export default routes;