import './App.css';
import { Route } from "react-router-dom";

import Login from './Pages/Login/login'
import Registration from './Pages/Registration/registration'
import Forgot from './Pages/Forgot-password/forgot'
import Reset from './Pages/Reset-Password/ResetPassword'

function App() {
  return (
    <div className={"App"}>
      
        <Route exact path="/" component={Login} />
        <Route path="/login" component={Login} />
        <Route path="/registration" component={Registration} />
        <Route path="/forgot-password" component={Forgot} />
        <Route path="/resetpassword" component={Reset} />
      
    </div>
  );
}

export default App;
