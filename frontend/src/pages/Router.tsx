import React from 'react';
import Path from '../util/path'
import Login from './Login';
import MovieList from './Movie/List';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Auth from '../auth/Auth';
import ProtectedRoute from '../auth/ProtectedRoute';
import LoginForm from '../components/LoginForm';
import TestC from '../components/Test';

const Router: React.FC = () => (
    <BrowserRouter>
        <Switch>
            {/* <Route exact path={Path.Movie + Path.List} component={MovieList} />
            <Route exact path={Path.Login} component={Login} /> */}
            
            {/* <Route exact path={Path.Movie + Path.List} component={MovieList} /> */}
            <Route exact path={Path.Login} render={() => (<LoginForm />)}
             />
            <ProtectedRoute
                Component={MovieList}
            />
        </Switch>
    </BrowserRouter>
)

export default Router;
