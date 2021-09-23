// App.js - WEB
import React from "react";
import './App.css';
import { Route, Switch} from 'react-router-dom';
import HomeScreen from "./components/HomeScreen";
import UserInput from "./components/UserInput"
import Employee from "./components/Employee";


const  App= ()=> {
  return (
    <div>
      <HomeScreen/>
    <Switch>
    <Route exact path="/">
    <UserInput/>
    </Route>
    <Route path="/Employee">
      <Employee />
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
