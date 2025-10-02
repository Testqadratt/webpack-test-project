import React from 'react';
import classes from './App.module.scss';
import { Link, Outlet } from 'react-router-dom';
import { LazyAbout } from '@/pages/about/About.lazy';
import googlePng from '@/assets/google.png';
import googleJpg from '@/assets/google.jpg';
import GoogleSvg from '@/assets/google.svg';

// TREE SHAKING
function TODO() {
    TODO2();
}

function TODO2() {
    throw new Error();
}

export function App() {
    const [counter, setCounter] = React.useState<number>(0);
    const increment = () => {
        setCounter(prev => prev + 1);
        TODO();
    };

    // TODO(123);

    // if (__PLATFORM__ == 'desktop') {
    //     return <div>ISDESKTOPPLATFORM</div>
    // }

    // if (__PLATFORM__ == 'mobile') {
    //     return <div>ISMOBILEPLATFORM</div>
    // }

    // if (__ENV__ == 'development') {
    //     // addDevTools()
    // }

    return (
        <div data-testid={'App.DataTestId'}>
            <h1 data-testid={'Platform'}>PLATFORM={__PLATFORM__}</h1>
            <div>
                <img width={100} height={100} src={googlePng} alt={'Google.png'}/>
                <img width={100} height={100} src={googleJpg} alt={'Google.jpg'}/>
            </div>
            <div>
                <GoogleSvg className={classes.icon} width={100} height={100} />
            </div>
            <Link to={'/about'}>about</Link>
            <br/>
            <Link to={'/shop'}>shop</Link>
            <h1 className={classes.value}>{counter}</h1>
            <button className={classes.button} onClick={increment}>
                <span>INCREMENT</span>
            </button>
            <LazyAbout/>
            <Outlet/>
        </div>
    )
}
