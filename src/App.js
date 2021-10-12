import './App.css';
import Main from './main';
import Login from './sign/login';
import { Route, Link } from "react-router-dom";
import { BrowserRouter} from "react-router-dom";
import SignUp from './sign/signup';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Main />
        <Route exact={true} path={"/sign/login"}  component={Login}/>
        <Route exact={true} path={"/sign/signup"}  component={SignUp}/>
      </BrowserRouter>
    </div>
  );
};

export default App;
