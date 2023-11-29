import { lazy } from "react";

const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const CatalogPage = lazy(() => import('../pages/CatalogPage/CatalogPage'));
const FavoritePage = lazy(() => import('../pages/FavoritePage/FavoritePage'));

export const HOME_ROUTE = '/';
export const CATALOG_ROUTE = '/catalog';
export const FAVORITE_ROUTE = '/favorites';

export const appRoutes = [
    {
        path: HOME_ROUTE,
        element: <HomePage/>,
    },
    {
        path: CATALOG_ROUTE,
        element: <CatalogPage /> 
    },
    {
        path: FAVORITE_ROUTE,
        element: <FavoritePage /> 
    },
    {
        path: "*",
        element: <HomePage/>
    }
]