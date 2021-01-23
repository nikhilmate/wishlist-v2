import React from 'react';
import ActionOverlay from './ActionOverlay';
import AppBody from './AppBody';
import Footer from './Footer';
import Header from './Header';
import UserAction from './UserAction';

export default (props) => {
    return (
        <main className="main__wrapper">
            <Header />
            <AppBody />
            <Footer />
            <ActionOverlay />
            <UserAction />
        </main>
    );
};
