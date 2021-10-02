// App.js - WEB
import React from "react";
import './App.css';
import { Route, Switch,useLocation} from 'react-router-dom';
import UserInput from "./components/UserInput"
import Employee from "./components/Employee";
import UploadRecord from "./components/UploadRecord";
import Report from "./components/Report";
import HomeScreen from "./components/HomeScreen";


const  App= ()=> {
  const location = useLocation();
  
  return (
    <div>
      <HomeScreen location={location}/>

    <Switch>
    <Route exact path="/">
    <UserInput />
    </Route>
    <Route path="/Employee">
      <Employee/>
    </Route>
    <Route path="/UploadRecord">
      <UploadRecord />
    </Route>
    <Route path="/Report">
      <Report />
    </Route>
    </Switch>
    </div>
  )
}

export default App


// class App extends Component {  
//   render() {
//     return <HomeScreen />
//   }
// }

// export default App;
