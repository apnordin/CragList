import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Wrapper from "./components/Wrapper";
import Login from "./pages/Login";
import './App.css';
import useToken from './hooks/useToken';
import Dashboard from "./pages/Dashboard"
import CragPage from "./pages/CragPage";
import AllRoutesPage from "./pages/AllRoutesPage"

function App() {

  const { token, setToken } = useToken();
 
  console.log(process.env.REACT_APP_API_KEY)

  if (!token) {
    return <Login setToken={setToken} />
  }

  return (
    
    <Router>
      <div>
        <Wrapper>
          <Route exact path ="/" component={Dashboard} />
          <Route exact path="/login" component={Login} />
          <Route path="/crag" component={CragPage} />
          <Route path="/allroutes" component={AllRoutesPage} />
        </Wrapper>
      </div>
    </Router>
  );
}

export default App;
