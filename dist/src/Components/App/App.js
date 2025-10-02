import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
import classes from './App.module.scss';
import { Link, Outlet } from 'react-router-dom';
import { LazyAbout } from '@/pages/about/About.lazy';
import googlePng from '@/assets/google.png';
import googleJpg from '@/assets/google.jpg';
import GoogleSvg from '@/assets/google.svg';
// TREE SHAKING
function TODO(a) {
    console.log('TODOFUNCTION');
}
export function App() {
    var _a = React.useState(0), counter = _a[0], setCounter = _a[1];
    var increment = function () { return setCounter(function (prev) { return prev + 1; }); };
    TODO('123');
    if (__PLATFORM__ == 'desktop') {
        return _jsx("div", { children: "ISDESKTOPPLATFORM" });
    }
    if (__PLATFORM__ == 'mobile') {
        return _jsx("div", { children: "ISMOBILEPLATFORM" });
    }
    if (__ENV__ == 'development') {
        // addDevTools()
    }
    return (_jsxs("div", { children: [_jsxs("h1", { children: ["PLATFORM=", __PLATFORM__] }), _jsxs("div", { children: [_jsx("img", { width: 100, height: 100, src: googlePng, alt: 'Google.png' }), _jsx("img", { width: 100, height: 100, src: googleJpg, alt: 'Google.jpg' })] }), _jsx("div", { children: _jsx(GoogleSvg, { className: classes.icon, width: 100, height: 100 }) }), _jsx(Link, { to: '/about', children: "about" }), _jsx("br", {}), _jsx(Link, { to: '/shop', children: "shop" }), _jsx("h1", { className: classes.value, children: counter }), _jsx("button", { className: classes.button, onClick: increment, children: _jsx("span", { children: "INCREMENT" }) }), _jsx(LazyAbout, {}), _jsx(Outlet, {})] }));
}
