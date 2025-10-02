import { jsx as _jsx } from "react/jsx-runtime";
import { createRoot } from 'react-dom/client';
import { Suspense } from 'react';
import { App } from './Components/App/App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { LazyAbout } from '@/pages/about/About.lazy';
import { Shop } from '@/pages/shop';
var root = document.getElementById('root');
if (!root) {
    throw new Error('root not found');
}
var router = createBrowserRouter([
    {
        path: "/",
        element: _jsx(App, {}),
        children: [
            {
                path: '/about',
                element: _jsx(Suspense, { fallback: 'Loading...', children: _jsx(LazyAbout, {}) })
            },
            {
                path: '/shop',
                element: _jsx(Suspense, { fallback: 'Loading...', children: _jsx(Shop, {}) })
            },
        ]
    },
]);
var container = createRoot(root);
container.render(_jsx(RouterProvider, { router: router }));
