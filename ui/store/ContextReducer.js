import Actions from './Actions';

export default (state, payload) => {
    let stepState = Object.assign(state);
    try {
        if (payload instanceof Array) {
            payload.map((payloadObj) => {
                const nextState = setStateInContext(stepState, payloadObj);
                stepState = Object.assign(nextState);
            });
        } else {
            stepState = setStateInContext(stepState, payload);
        }
    } catch (error) {
        console.log(error);
    }
    return stepState;
};

const setStateInContext = (state, payload) => {
    if (payload.hasOwnProperty('type')) {
        switch (payload.type) {
            case Actions.triggerSigning:
                let signing = payload.hasOwnProperty('signing')
                        ? payload['signing']
                        : state['APP']['beforeLogged']['signing'],
                    signState = payload.hasOwnProperty('signState')
                        ? payload['signState']
                        : state['APP']['beforeLogged']['signState'];
                if (
                    typeof signing !== undefined &&
                    typeof signState !== undefined
                ) {
                    return {
                        ...state,
                        APP: {
                            ...state.APP,
                            beforeLogged: {
                                signing,
                                signState
                            }
                        }
                    };
                }
                return state;
            default:
                return state;
        }
    }
};
