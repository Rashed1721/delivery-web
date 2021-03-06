import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home/Home';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Modal1 from './components/Modal/Modal1';
import NotFound from './components/NotFound/NotFound';
import SignUp from './components/SignUp/SignUp/SignUp';
import LogInFrom from './components/LogIn/LogInFrom/LogInFrom';
import PasswordReset from './components/LogIn/PasswordReset/PasswordReset';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/home">
            <Home></Home>
          </Route>
          <Route path="/modal1">
            <Modal1></Modal1>
          </Route>
          <Route exact path="/login">
            <LogInFrom></LogInFrom>
          </Route>
          <Route exact path="/passwordreset">
            <PasswordReset></PasswordReset>
          </Route>
          <Route exact path="/notfound">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </BrowserRouter>

    </div>
  );
}

export default App;
