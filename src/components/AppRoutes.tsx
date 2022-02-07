import React, {FC} from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';

import {useTypedSelector} from "../hooks/useTypedSelector";
import {managerRoutes, publicRoutes, RoutesNames, userRoutes} from "../routes/routes";

import {isAdmin} from "../store/reducers/auth/authReducer";

const AppRoutes: FC = () => {
    const {isAuth} = useTypedSelector(state => state.authReducer);



    return (
        !isAuth ?
            <Switch>
                {publicRoutes.map(route =>
                    <Route key={route.path}
                           path={route.path}
                           exact={route.exact}
                           children={route.pages}
                    />
                )}
                <Redirect to={RoutesNames.LOGIN}/>
            </Switch>
            :
            !isAdmin ?
                <Switch>
                    {userRoutes.map(route =>
                        <Route key={route.path}
                               path={route.path}
                               exact={route.exact}
                               children={route.pages}
                        />
                    )}
                    <Redirect to={RoutesNames.MENU}/>
                </Switch>
                :
                <Switch>
                    {managerRoutes.map(route =>
                        <Route key={route.path}
                               path={route.path}
                               exact={route.exact}
                               children={route.pages}
                        />
                    )}
                    <Redirect to={RoutesNames.MANAGER_PAGE}/>
                </Switch>
    );
};

export default AppRoutes;