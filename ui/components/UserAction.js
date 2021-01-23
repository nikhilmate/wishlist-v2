import React, { useContext } from 'react';
import UserSigning from './UserSigning';
import AppContext from '../store/AppContext';

const static__actionType = {
    SIGN_UP: 'sign-up',
    SIGN_IN: 'sign-in'
};

export default (props) => {
    const _global = useContext(AppContext);

    let isLogged = !!_global.AppData.USER.email ? true : false,
        signing = _global.AppData.APP.beforeLogged.signing,
        signState = _global.AppData.APP.beforeLogged.signState;

    const changeSignStateProps = (_signState) => {
        typeof _global.contextReducer == 'function' &&
            _global.contextReducer({
                type: 'triggerSigning',
                signState:
                    _signState == static__actionType.SIGN_UP
                        ? static__actionType.SIGN_IN
                        : static__actionType.SIGN_UP
            });
    };

    const hideSignForm = () => {
        typeof _global.contextReducer == 'function' &&
            _global.contextReducer({
                type: 'triggerSigning',
                signing: false
            });
    };

    return (
        <>
            {isLogged ? (
                <></>
            ) : (
                <UserSigning
                    signing={signing}
                    signState={signState}
                    changeSignStateProps={changeSignStateProps}
                    hideSignForm={hideSignForm}
                />
            )}{' '}
        </>
    );
};
