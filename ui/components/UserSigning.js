import React, { useState, useEffect, useReducer } from 'react';
import { CloseBtnIco } from './Icons';

const static__actionType = {
    SIGN_UP: 'sign-up',
    SIGN_IN: 'sign-in'
};
const static__h1 = {
    SIGN_UP: 'Sign Up',
    SIGN_IN: 'Sign In'
};
const initActionState = {
    email: '',
    password: '',
    error: {
        email: null,
        password: null
    }
};

function reducer(state, action) {
    switch (action.type) {
        case 'email':
            let { email } = action;
            return { ...state, email };
        case 'password':
            let { password } = action;
            return { ...state, password };
        case 'error':
            let { error } = action,
                _email = error.hasOwnProperty('email')
                    ? error['email']
                    : state['error']['email'],
                _password = error.hasOwnProperty('password')
                    ? error['password']
                    : state['error']['password'];
            return { ...state, error: { email: _email, password: _password } };
        case 'resetForm':
            return initActionState;
        default:
            return state;
    }
}

const getAlternateH1 = (signState) => {
    return signState == static__actionType.SIGN_UP
        ? static__h1.SIGN_IN
        : static__h1.SIGN_UP;
};
const getH1 = (signState) => {
    return signState == static__actionType.SIGN_UP
        ? static__h1.SIGN_UP
        : static__h1.SIGN_IN;
};

export default ({ signing, signState, changeSignStateProps, hideSignForm }) => {
    const [state, dispatch] = useReducer(reducer, initActionState);
    const [wrapClass, setWrapClass] = useState(!!signing ? 'showCommon' : '');
    const [formH1, setFormH1] = useState(signState);
    const [alternateH1, setAlternateH1] = useState();

    useEffect(() => {
        setWrapClass(!!signing ? 'showCommon' : '');
        setFormH1(getH1(signState));
        setAlternateH1(getAlternateH1(signState));
    }, [signing, signState]);

    const changeSignState = () => {
        changeSignStateProps(signState);
    };

    const closeForm = () => {
        hideSignForm();
    };

    return (
        <section className="main__user-action-wrap">
            <div
                className={
                    'block__user-action block__common-overlay ' + wrapClass
                }
            >
                <div className="section__user-action">
                    <div className="in__user-action">
                        <div className="header__ua">
                            <h1 className="h1__ua-header">{formH1}</h1>
                            <span
                                onClick={() => closeForm()}
                                className="btn__overlay-close"
                            >
                                <CloseBtnIco />
                            </span>
                        </div>
                        <div className="body__ua">
                            <form className="form__ua">
                                <div className="block__form-action-wrap">
                                    <input
                                        type="text"
                                        name="ua-email"
                                        className="input__ua input__common"
                                        placeholder="Email"
                                        value={state.email}
                                        onChange={(e) =>
                                            dispatch({
                                                type: 'email',
                                                email: e.target.value
                                            })
                                        }
                                    />
                                    <p className="p__common-error">
                                        {state.error.email}
                                    </p>
                                </div>
                                <div className="block__form-action-wrap">
                                    <input
                                        type="password"
                                        name="ua-password"
                                        className="input__ua input__common"
                                        placeholder="Password"
                                        value={state.password}
                                        onChange={(e) =>
                                            dispatch({
                                                type: 'email',
                                                password: e.target.value
                                            })
                                        }
                                    />
                                    <p className="p__common-error">
                                        {state.error.password}
                                    </p>
                                </div>
                                <div className="block__form-action-wrap">
                                    <button className="btn__ua btn__common">
                                        {formH1}
                                    </button>
                                </div>
                            </form>
                            <div className="block__social-login-wrap">
                                <span className="p__social-login">Or:</span>
                                <button className="btn__social-login">
                                    Sign up via Google
                                </button>
                            </div>
                            <div className="block__next-action-wrap">
                                <span className="p__next-action">
                                    Have account?
                                </span>
                                <button
                                    onClick={() => changeSignState()}
                                    className="btn__next-action"
                                >
                                    {alternateH1}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
