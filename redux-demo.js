const redux = require('redux')



const counterReduce = (state = {counter: 0}, action) => {
    if(action.type === 'increment'){
        return {
            counter: state.counter+1,
        }
    }
    if(action.type === 'decrement'){
        return {
            counter: state.counter-1,
        }
    }
    return state;
}

// store wants a reduce function

const store = redux.createStore(counterReduce);

console.log(store.getState())

const counterSubscriber = () => {
    const latestState = store.getState();
    console.log(latestState);
};

// subscribe wants a subscribe function

store.subscribe(counterSubscriber);

store.dispatch({type: 'increment'})
store.dispatch({type: 'decrement'})