import { useEffect, useState } from 'react';
import './App.css';
import Login from './pages/Login';
import Test from './pages/Test';
import {
    BrowserRouter as Router, Route, Link, Routes
} from "react-router-dom";

function App() {
    return (
        <>
                <Router>
                    <Routes>
                        <Route
                            exact
                            path="/"
                            element={<Login />} ></Route>
                        <Route
                            path="/test"
                            element={<Test />} ></Route>
                    </Routes>
                </Router> 
        </> 
    );
    
}

export default App;