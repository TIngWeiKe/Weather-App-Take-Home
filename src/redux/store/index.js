import reducer from '../reducers'
import { createStore, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'

export const store = createStore(
	reducer,
	window.__REDUX_DEVTOOLS_EXTENSION__
		? compose(
				applyMiddleware(thunkMiddleware),
				window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
			)
		: compose(applyMiddleware(thunkMiddleware))
)
