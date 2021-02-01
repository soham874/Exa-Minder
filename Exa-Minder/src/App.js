import './App.css';
import Login from './Pages/Login/login'
import Registration from './Pages/Registration/registration'
import { Route, BrowserRouter as Router, Switch, Redirect } from "react-router-dom";

function App() {
  return (
    <div className={"App"}>
      <Router>
        <Switch>
          <Redirect path="/" exact to="/login"/>
          <Route path="/login" exact component={Login} />
          <Route path="/registration" component={Registration} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
