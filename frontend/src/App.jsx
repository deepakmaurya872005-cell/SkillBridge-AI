import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Auth from "./pages/Auth";
import Dashboard from "./pages/Dashboard";
import VideoInterview from "./pages/VideoInterview";
import MockInterview from "./pages/MockInterview";

import Resume from "./pages/Resume";
import NotFound from "./pages/NotFound";
import ProtectedRoute from "./components/ProtectedRoute";
import Analysis from "./pages/Analysis";

import Profile from "./pages/Profile";

import History from "./pages/History";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

    <Route
  path="/login"
  element={<Auth initialMode="login" />}
/>

<Route
  path="/register"
  element={<Auth initialMode="register" />}
/>
      
      <Route
    path="/dashboard"
    element={
        <ProtectedRoute>
            <Dashboard />
        </ProtectedRoute>
    }
/>
  <Route path="/video-interview" element={<VideoInterview />} />
  <Route path="/mock-interview" element={<MockInterview />} />

<Route
    path="/resume"
    element={
        <ProtectedRoute>
            <Resume />
        </ProtectedRoute>
    }
/>

<Route
  path="/analysis"
  element={
    <ProtectedRoute>
      <Analysis />
    </ProtectedRoute>
  }
/>

<Route
  path="/profile"
  element={
    <ProtectedRoute>
      <Profile />
    </ProtectedRoute>
  }
/>

<Route
  path="/history"
  element={
    <ProtectedRoute>
      <History />
    </ProtectedRoute>
  }
/>
    
      <Route path="*" element={<NotFound />} />

   
    </Routes>
  );
}

export default App;