import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import Home from './Home';
import SignIn from './SignIn';
import { useAuthContext } from "../hooks/useAuthContext";
import ResetPasswordForm from "./ResetPasswordForm";
import { useEffect, useState } from "react";
import { io } from "socket.io-client";

export default function App() {

  const { user } = useAuthContext();

  const [socketInstance, setSocketInstance] = useState("");
  
  useEffect(() => {
    const socket = io("https://autopoint-model.onrender.com");
    //{
      //transports: ["websocket"],
      // cors: {
      //   origin: "http://localhost:3000/",
      // },
    //});

    setSocketInstance(socket);

    console.log(socket);
    
  }, []);

  return (
        <div className="App">
          <Router>
            <Routes>
              <Route path="/" element={user ? <Home socket={socketInstance}/> : <Navigate to="/login" />} />
              <Route path="/login" element={!user ? <SignIn /> : <Navigate to="/" />} />
              <Route path="/reset/:token" element={<ResetPasswordForm />} />
            </Routes>
          </Router>
        </div>
  );
}
