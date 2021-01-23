import React, { useContext } from 'react';
import AppContext from '../store/AppContext';
import Overview from './after/Overview';
import IntroBody from './IntroBody';

export default (props) => {
    const AppData = useContext(AppContext);

    let isLogged = !!AppData.AppData.USER.email ? true : false;

    return (
        <>
            {isLogged ? (
                <>
                    <Overview />
                </>
            ) : (
                <>
                    <IntroBody />
                </>
            )}
        </>
    );
};
