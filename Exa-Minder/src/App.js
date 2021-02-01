import './App.css';
import Login from './Pages/Login/login'
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

function App() {
  return (
    <div className={"App"}>
      <Router>
        <Switch>
          <Route path="/" component={Login} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
