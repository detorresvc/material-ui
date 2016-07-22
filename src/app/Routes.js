import React, { Component } from 'react';
import Route from 'react-router/lib/Route';
import Router from 'react-router/lib/Router';
import IndexRoute from 'react-router/lib/IndexRoute';

import App from './home/components/main';

//modules
import Login from './login/containers/Login';

const NoMatch = (props) => 
    <div className="login-wrapper-img">  
        <div className="login-wrapper">
            <div className="container">
                <div className="valign-middle-center">
                    <div className="row">
                        <div className="col-md-4 col-sm-6 col-xs-12 col-md-offset-4 col-sm-offset-3">
                            <div className="login-box">
                                <div className="form-inner text-center">
                                    SORRY THIS PAGE IS NOT AVAILABLE
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

export const routes = (history) => {
    return (
        <Router history={ history }>
            <Route path="/" component={ App }/>
            <Route path="/login" component={ Login }/>
            <Route path="*" component={NoMatch}/>
        </Router>
    )
}