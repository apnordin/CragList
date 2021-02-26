import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Wrapper from "./components/Wrapper";
import LoginPage from "./pages/LoginPage";
// import Dashboard from "./pages/Dashboard"
import './App.css';
import useToken from './hooks/useToken';
import SearchMap from "./components/SearchMap"
import CoursePage from "./components/CoursePage";

function App() {

  const { token, setToken } = useToken();
 

  if (!token) {
    return <LoginPage setToken={setToken} />
  }

  return (
    
    <Router>
      <div>
        <Wrapper>
          <Route exact path ="/" component={SearchMap} />
          <Route exact path="/login" component={LoginPage} />
          {/* <Route path='/searchmap' component={SearchMap} /> */}
          <Route path="/course" component={CoursePage} /> 
        </Wrapper>
      </div>
    </Router>
  );
}

export default App;
