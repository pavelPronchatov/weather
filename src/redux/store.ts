import {applyMiddleware, combineReducers, createStore} from 'redux';
import {weekReducer} from 'redux/reducers/weekReducer';
import thunkMiddleware from 'redux-thunk';
import { pastDateReducer } from './reducers/pastDateReducer';

const reducers = combineReducers({
  week: weekReducer,
  past: pastDateReducer
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

// @ts-ignore
// eslint-disable-next-line no-undef
const composeEnhancers: any = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(reducers,
  composeEnhancers(
    applyMiddleware(thunkMiddleware)
  ));