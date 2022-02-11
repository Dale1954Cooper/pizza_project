import {Component, FC, ReactNode} from "react";

import Login from '../pages/Login';
import Registration from '../pages/Registration';
import Menu from '../pages/Menu';
import UserPage from '../pages/UserPage';
import ManagerPage from "../pages/ManagerPage";


export interface RouteModel {
    path: string;
    pages: Component | FC | ReactNode;
    exact?: boolean,
}

export enum RoutesNames {
    LOGIN = '/login',
    REGISTRATION = '/registration',
    MENU = '/menu',
    USER_PAGE = '/user_page',
    MANAGER_PAGE = '/manager_page',
}

export const publicRoutes: RouteModel[] = [
    {path: RoutesNames.LOGIN, pages: Login, exact: true},
    {path: RoutesNames.REGISTRATION, pages: Registration, exact: true},
    {path: RoutesNames.MENU, pages: Menu, exact: true},
];

export const userRoutes: RouteModel[] = [
    {path: RoutesNames.MENU, pages: Menu, exact: true},
    {path: RoutesNames.USER_PAGE, pages: UserPage, exact: true},
]

export const managerRoutes: RouteModel[] = [
    {path: RoutesNames.MENU, pages: Menu, exact: true},
    {path: RoutesNames.USER_PAGE, pages: UserPage, exact: true},
    {path: RoutesNames.MANAGER_PAGE, pages: ManagerPage, exact: true},
]