import React, { Component } from 'react';
import AppContext from './AppContext';
import ContextReducer from './ContextReducer';
import InitialState from './InitialState';

const initState = InitialState;

class AppProvider extends Component {
    constructor(props) {
        super(props);
        this.state = Object.assign({}, initState);
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (this.state !== nextState) {
            return true;
        }
        return false;
    }

    // componentDidMount() {

    // }

    contextReducer = (params) => {
        // reducer
        this.setState(ContextReducer(this.state, params));
    };

    render() {
        let contextValue = {
            AppData: this.state,
            contextReducer: (params) => this.contextReducer(params)
        };
        return (
            <AppContext.Provider value={contextValue}>
                {this.props.children}
            </AppContext.Provider>
        );
    }
}

export default AppProvider;
