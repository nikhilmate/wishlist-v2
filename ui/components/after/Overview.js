import React from 'react';

export default (props) => {
    return (
        <section className="section__app-body">
            <div className="sectionIn__box">
                <h1 className="h1__app-body">Make a wishlist</h1>
                <div className="sectionIn__wishlist">
                    <div className="col__wish-bucket">
                        <h1 className="h1__wish-bucket h1__common-heading">
                            Wish Buckets
                        </h1>
                        <button className="btn__create-wish-bucket btn__comn-wish-block comn__btn">
                            Create a wish bucket
                        </button>
                        <div className="block__wish-bucket-list">
                            {/* <div className="h1__no-wish-bucket h1__comn-no-content">
                                No wish buckets found.
                            </div> */}

                            <div className="li__wish-bucket">Bucket 1</div>
                            <div className="li__wish-bucket">Bucket 2</div>
                            <div className="li__wish-bucket">Bucket 3</div>
                        </div>
                    </div>
                    <div className="col__wish-list">
                        <h1 className="h1__wish-list h1__common-heading">
                            Wishes
                        </h1>
                        <div className="block__wishlist-header">
                            <button className="btn__create-wish btn__comn-wish-block comn__btn">
                                Create a wish
                            </button>
                            <div className="block__filter-search">
                                <input
                                    className="input__search-wishes"
                                    type="text"
                                    name="filter-wishes"
                                    placeholder="Search"
                                />
                                <a className="btn__reset-filter">Reset</a>
                            </div>
                        </div>

                        <div className="block__wishes-container">
                            {/* <div className="h1__no-wishes h1__comn-no-content">
                                No wishes found.
                            </div> */}
                            <div className="li__wish-bucket">Wish 1</div>
                            <div className="li__wish-bucket">Wish 2</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
