import storage from 'redux-persist/lib/storage'
import { persistStore, persistReducer } from 'redux-persist'
// import rootReducer from './fireReducer'
import { createStore } from 'redux'
import { rootReducer } from './fireReducer'

const persistConfig = {
    key: 'root',
    storage,
}
const dev = (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__()
const initialState = {}
const persistedReducer = persistReducer(persistConfig, rootReducer)

export default () => {
  let store = createStore(persistedReducer, dev)
  let persistor = persistStore(store)
  return { store, persistor }
}