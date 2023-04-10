import { legacy_createStore as createStore } from 'redux'; 
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers';

// creating store
export const store = createStore(
	rootReducer,
	composeWithDevTools()
);
