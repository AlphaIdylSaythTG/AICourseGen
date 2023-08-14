import logo from './logo.svg';
import Home from './Home';
import Course from './Course';
import SignIn from './SignIn';
import SignUp from './SignUp';
import Account from './Account';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';

import {NextUIProvider} from "@nextui-org/react";

function App() {
  return (
    <NextUIProvider>
      <Router>
          <Routes>
                <Route path='/' element={< Home />}></Route>
                <Route path = '/course' element = {<Course/>}></Route>
                <Route path = '/signin' element = {<SignIn/>}></Route>
                <Route path = '/signup' element = {<SignUp/>}></Route>
                <Route path = '/account' element = {<Account/>}></Route>
          </Routes>
      </Router>
    </NextUIProvider>
  );
}

export default App;
