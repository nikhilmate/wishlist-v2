import React from 'react';
import { AmazonLogo } from './Icons';

export default (props) => {
    return (
        <header className="main__header">
            <div className="main__logo">
                <span className="span__amazonIco">
                    <AmazonLogo />
                </span>
                <span className="span__wishlistIco">Wishlist</span>
            </div>
        </header>
    );
};
