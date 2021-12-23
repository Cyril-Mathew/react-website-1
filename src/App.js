import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import cards from './components/Cards';
import ToS from './components/pages/TOS';
import Footer from './components/Footer';
import PrivacyPolicy from './components/pages/PrivacyPolicy';
import WhoWeAre from './components/pages/WhoWeAre';
import Subscribe from './components/pages/Subscribe';
import ScrollToTop from './components/ScrollToTop';
import blogs from "./components/pages/blogs";
import reviews from "./components/pages/reviews";

function App() {
    return (
        <>
            <Router>
                <ScrollToTop />
                <Navbar />
                <Switch>
                    <Route path='/' exact component={Home} />

                    <Route path='/cards' component={cards} />
                    <Route path='/blogs' component={blogs} />
                    <Route path='/reviews' component={reviews} />
                    <Route path='/subscribe' component={Subscribe} />
                    <Route path='/whoweare' component={WhoWeAre} />
                    <Route path='/tos' component={ToS} />
                    <Route path='/privacypolicy' component={PrivacyPolicy} />
                </Switch>
                <Footer />
            </Router>
        </>
    );
}

export default App;