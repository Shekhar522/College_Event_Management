// import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Dashboard from "./pages/Dashboard";
import Events from "./pages/Events";
import Login from "./pages/Login";
import { events as eventsData } from "./data/event";
import ProtectedRoute from "./components/ProtectedRoute";
import USerEvents from "./pages/USerEvents";
import MyRegistrations from "./pages/MyRegistrations";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import Usernotifications from "./components/Usernotification";

import { Toaster } from "sonner";

function App() {
  const [events, setEvents] = useState(() => {
    const saved = localStorage.getItem("events");
    return saved ? JSON.parse(saved) : eventsData;
  });

  useEffect(() => {
    localStorage.setItem("events", JSON.stringify(events));
  }, [events]);

  return (
    <BrowserRouter>
      <Toaster />
      <Routes>
        
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Dashboard events={events} setEvents={setEvents} />
            </ProtectedRoute>
          }
        />

        <Route
          path="/events"
          element={
            <ProtectedRoute>
              <Events events={events} setEvents={setEvents} />
            </ProtectedRoute>
          }
        />

        <Route path="/login" element={<Login />} />
        <Route path="/aboutus" element={<AboutUs/>}/>
        <Route path="/contactus" element={<ContactUs/>}/>
        <Route path="/user/notifications" element={<Usernotifications/>}/>
        <Route path="/user/events" element={<USerEvents events={events}/>}/>
        <Route path="/user/myregistrations" element={<MyRegistrations/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
