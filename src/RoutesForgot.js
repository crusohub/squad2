import React from 'react';
import { Link, Switch, Route, Link } from 'react-router-dom';
import ForgotPassword from './ForgotPassword';



function RoutesForgot(){
    return (
    <Link>
       <Switch>
           <Route path= "/" exact={true} component={ForgotPassword}>
              <ForgotPassword/>
           </Route>
       </Switch>
    </Link>
    );
};

export default RoutesForgot;