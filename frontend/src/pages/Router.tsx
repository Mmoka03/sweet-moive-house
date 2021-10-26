import React from 'react';
import Path from '../util/path'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ProtectedRoute from '../auth/ProtectedRoute';
import MovieDetail from './Movie/Detail';
import { Home, MovieAdd, MovieUpdate, MovieList, Login, TicketingList, TicketingDetail } from '.';

const Router: React.FC = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path={Path.Movie + Path.List} render={props => 
                <ProtectedRoute
                    Component={MovieList}
                    {...props}
                />
            } />
            <Route exact path={Path.Movie + Path.Detail} render={props => 
                <ProtectedRoute
                    Component={MovieDetail}
                    {...props}
                />
            } />
            <Route exact path={Path.Movie + Path.Add} render={props => 
                <ProtectedRoute
                    Component={MovieAdd}
                    {...props}
                />
            } />
            <Route exact path={Path.Movie + Path.Update} render={props => 
                <ProtectedRoute
                    Component={MovieUpdate}
                    {...props}
                />
            } />
            <Route exact path={Path.Ticketing + Path.List} render={props => 
                <ProtectedRoute
                    Component={TicketingList}
                    {...props}
                />
            } />
            <Route exact path={Path.Ticketing + Path.Detail} render={props => 
                <ProtectedRoute
                    Component={TicketingDetail}
                    {...props}
                />
            } />
            <Route exact path={Path.Login} component={Login} />
            <Route exact path={Path.Home} component={Home} />
        </Switch>
    </BrowserRouter>
)

export default Router;
