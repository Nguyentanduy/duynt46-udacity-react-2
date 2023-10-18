import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import './App.css';
import Login from './Login/Login';
import Home from './Home/Home';
import LeaderBoard from './LeaderBoard/LeaderBoard';
import New from './New/New';
import Error from './Error';
import QuestionDetail from './QuestionDetail/QuestionDetail';
import { createBrowserHistory } from "history";
import { useDispatch } from 'react-redux';
import { saveUrl } from './Slices/UserSlices';

function App() {
  const history = createBrowserHistory({})
  const navigate = useNavigate();
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(saveUrl(history.location.pathname))
    navigate('/login')
  }, []);

  return (
    <div className="App">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/leaderboard" element={<LeaderBoard />} />
          <Route path="/new" element={<New />} />
          <Route path="/question/:id" element={<QuestionDetail />} />
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Error />} />
        </Routes>
    </div>
  );
}

export default App;
