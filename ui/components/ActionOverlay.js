import React from 'react';
import { CloseBtnIco } from './Icons';

export default (props) => {
    return (
        <div className="overlay__create-bucket" creating-a-wish="true">
            <div className="in__relative">
                <div className="section__create-bucket">
                    <div className="block__cb-header">
                        <h1 className="h1__cb-header">Create a wish bucket</h1>
                        <span className="btn__overlay-close">
                            <CloseBtnIco />
                        </span>
                    </div>
                    <div className="block__cb-body">
                        <div className="form__input-wrap">
                            <div className="form__input-hidden-wrap">
                                <input
                                    className="input__create-bucket"
                                    type="text"
                                    name="create-bucket"
                                    placeholder="Enter here."
                                />
                            </div>
                            <p className="p__error-bucket para__error-comn">
                                Already present.
                            </p>
                        </div>
                        <div className="form__bucket-select-wrap">
                            <select className="select__bucket-list">
                                <option key="1" value="">
                                    Select the bucket
                                </option>
                                <option key="2" value="Bucket 1">
                                    Bucket 1
                                </option>
                                <option key="3" value="Bucket 2">
                                    Bucket 2
                                </option>
                                <option key="4" value="Bucket 3">
                                    Bucket 3
                                </option>
                            </select>
                            <p className="p__error-bucket p__error-select-bucket  para__error-comn">
                                Already present.
                            </p>
                        </div>
                        <div className="form__btn-wrap">
                            <button className="btn__cancel-create-bucket btn__comn-form btn__comn-cancel">
                                Cancel
                            </button>
                            <button className="btn__submit-create-bucket btn__comn-form btn__comn-submit">
                                Submit
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
