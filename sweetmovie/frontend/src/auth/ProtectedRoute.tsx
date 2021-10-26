import React from "react";
import { Redirect, Route } from 'react-router-dom';
import Path from "../util/path";
import Auth from './Auth';

export interface IProtectedRoute {
    Component: React.FC
}


const ProtectedRoute: React.FC<IProtectedRoute> = ({ Component, ...rest }) => {

    return (
        <Route
            { ...rest }

            render={ (props) => {
                if (Auth.isAuthenticated()) {
                    return <Component/>
                } else {
                    return <Redirect
                        to={ {
                            pathname: Path.Login,
                            state: {
                                from: props.location
                            }
                        }
                        }
                    />
                }
            }
            }/>
    );
};

export default ProtectedRoute;