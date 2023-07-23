import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import ParentComponent from './components/ParentComponent';
import CallApplyBind from './components/CallApplyBind';
import Closure from './components/Closure';


const hist = createBrowserHistory();
export default function AppRoutes() {

    return (
        <Router history={hist}>
            <Routes>
                <Route path="/home" exact element={<Closure />} />
            </Routes>
        </Router>
    )
}