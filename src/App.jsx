import React from "react";
import {HashRouter as Router, Switch, Route} from "react-router-dom";
import home from "./pages/home/home";
import bookRoom from "./pages/reservations/bookRoom";

function App() {
   return (
      <>
         <Router>
            <Switch>
               <Route exact path ="/" component={home} />
               <Route exact path="/bookroom" component={bookRoom} />             
            </Switch>
         </Router>
      </>
   )
}

export default App;