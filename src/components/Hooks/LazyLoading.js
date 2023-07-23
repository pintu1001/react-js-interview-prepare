import React, { lazy, Suspense } from 'react';
// import Title from './Title';
// import Home from './Home';
const Home = lazy(() => import('./Home'));
const Title = lazy(() => import('./Title'));

export default function LazyLoading() {

    return (
        <>
            <h2>Lazy Loading</h2>
            <Suspense fallback={<div>Please wait.....</div>}>
                <Home />
            </Suspense>
            <Suspense fallback={<div>Please wait.....</div>}>
                <Title />
            </Suspense>
            
        </>
    )
}