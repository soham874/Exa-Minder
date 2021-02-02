import './App.css';
import { Route, BrowserRouter as Router, Switch, Redirect } from "react-router-dom";

import Login from './Pages/Login/login'
import Registration from './Pages/Registration/registration'
import Forgot from './Pages/Forgot-password/forgot'
import Reset from './Pages/Reset-Password/ResetPassword'

function App() {
  return (
    <div className={"App"}>
      <Router>
        <Switch>
          <Redirect path="/" exact to="/login"/>
          <Route path="/Exa-Minder/login" exact component={Login} />
          <Route path="/registration" component={Registration} />
          <Route path="/forgot-password" component={Forgot} />
          <Route path="/resetpassword" component={Reset} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
