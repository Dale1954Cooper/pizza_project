import {Component, FC, ReactNode} from "react";

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Menu from '../pages/Menu';
import UserPage from '../pages/UserPage';
import ManagerPage from '../pages/ManagerPage';
import OrderPage from '../pages/OrderPage'


export interface RouteModel {
    path: string;
    pages: Component | FC | ReactNode;
    exact?: boolean,
}

export enum RoutesNames {
    SIGN_IN = '/sign-in',
    SIGN_UP = '/sign-up',
    MENU = '/menu',
    USER_PAGE = '/user_page',
    MANAGER_PAGE = '/manager_page',
    ORDER = '/order',
}

export const publicRoutes: RouteModel[] = [
    {path: RoutesNames.SIGN_IN, pages: SignIn, exact: true},
    {path: RoutesNames.SIGN_UP, pages: SignUp, exact: true},
    {path: RoutesNames.MENU, pages: Menu, exact: true},
];

export const userRoutes: RouteModel[] = [
    {path: RoutesNames.MENU, pages: Menu, exact: true},
    {path: RoutesNames.USER_PAGE, pages: UserPage, exact: true},
    {path: RoutesNames.ORDER, pages: OrderPage, exact: true},
]

export const managerRoutes: RouteModel[] = [
    {path: RoutesNames.MENU, pages: Menu, exact: true},
    {path: RoutesNames.USER_PAGE, pages: UserPage, exact: true},
    {path: RoutesNames.MANAGER_PAGE, pages: ManagerPage, exact: true},
]