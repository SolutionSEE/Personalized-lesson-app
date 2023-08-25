import Login from './pages/Login';
import Signup from './pages/Signup'
import Profile from './pages/Profile'
import { Route, Routes, BrowserRouter as Router, Navigate } from "react-router-dom";
import './App.css';
import GPTHub from './pages/GPTHub';
import GPTHubDetail from './pages/GPTHubDetail';
import PersonalGPT from './pages/PersonalGPT';
import ExamBookingApp from './pages/ExamBookingApp';
import LessonApp from './pages/LessonApp';
import AnalyticsPerformance from './pages/Analytics';
import LessonDetail from './pages/LessonDetail';
import React from 'react';
import { isEmpty } from 'lodash';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from './firebase/Firebase';
import { Toaster } from 'react-hot-toast';

const Protected = ({component}) => {
  const [user] = useAuthState(auth)
  const userStr = user || localStorage.getItem('user');
  
  if(isEmpty(userStr)) return <Navigate to = '/'/>
  return component
}


function App() {
    return (
        <>

            <Toaster position='top-right'/>
            <Router>
                <Routes>
                    <Route exact path="/" element={<Login />} />
                    <Route 
                      path="/lesson-app" 
                      element={<Protected component={<LessonApp />} />} 
                    />
                    <Route 
                      path="/lesson-app/:id" 
                      element={<Protected component={<LessonDetail />} />} 
                    />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/signup" element={<Signup />} />                  
                    <Route path="/gpt-hub" element={<GPTHub />} />
                    <Route path="/gpt-hub/:id" element={<GPTHubDetail />} />
                    <Route path="/personal-gpt" element={<PersonalGPT />} />
                    <Route path="/exam-booking-app" element={<ExamBookingApp />} />
                    <Route path="/analytics" element={<AnalyticsPerformance />} />
                </Routes>
            </Router>
        </>
    );
}

export default App;
