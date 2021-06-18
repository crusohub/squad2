import React from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import ForgotPassword from './ForgotPassword';



function RoutesForgot(){
    return (
    
       <Switch>
           <Route path= "/" exact={true} component={ForgotPassword}>
              <ForgotPassword/>
           </Route>
       </Switch>
    
    );
};

export default RoutesForgot;