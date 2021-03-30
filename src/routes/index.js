import React from 'react';

import Home from "../pages/Home";
import Shop from "../pages/Shop";

const authProtectedRoutes = [];

const publicRoutes = [
    { path: "/shop", component: Shop },
    { path: "/", exact: true, component: Home },
];

export { authProtectedRoutes, publicRoutes }