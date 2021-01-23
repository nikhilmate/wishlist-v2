import React, { useContext } from 'react';
import AppContext from '../store/AppContext';
import { GiftIcon, WishMainIco } from './Icons';

export default (props) => {
    const _global = useContext(AppContext);

    // let isLogged = !!_global.AppData.USER.email ? true : false;

    const getStartedTrigger = () => {
        typeof _global.contextReducer == 'function' &&
            _global.contextReducer({
                type: 'triggerSigning',
                signing: true,
                signState: 'sign-up'
            });
    };

    return (
        <div className="section__intro-body">
            <div className="block__intro-action">
                <div className="in__intro-action">
                    <h1 className="h1__intro-action">
                        Create a wishlist and share with others!
                    </h1>
                    <h2 className="h2__intro-action">
                        Add items to your wishlist from online stores or simply
                        request anything.
                    </h2>
                    <button
                        onClick={() => getStartedTrigger()}
                        className="btn__get-started btn__common"
                    >
                        Get Started
                    </button>
                    <div className="in__intro-steps">
                        <div className="block__step">
                            <div className="icon__wishlist-main">
                                <GiftIcon />
                            </div>
                            <h1 className="h1__step-desc">
                                Create bucket full of wishes!
                            </h1>
                        </div>
                        <div className="block__step">
                            <div className="icon__wishlist-main">
                                <WishMainIco />
                            </div>
                            <h1 className="h1__step-desc">
                                Add anything in your list and share.
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
