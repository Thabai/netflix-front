import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import styled from 'styled-components';
import { Landing } from './pages/landing';
import { Home } from './pages/home';

const App = () => {
  const [user, setUser] = useState();




  return (
    <Router>
      <AppContainer>
        {user ? <Redirect to='/home'/> : <Redirect to='/'/>}
        <Route exact path='/'>
           <Landing user={user} setUser={setUser}/>
        </Route>
        <Route path='/home'>
         <Home/>
        </Route>
      </AppContainer>
    </Router>
  );
};

export default App;

const AppContainer = styled(Router)`
width: 100vw;
height 100vw;
`