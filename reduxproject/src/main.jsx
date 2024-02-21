import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { legacy_createStore as createStore} from 'redux'
import { Provider } from 'react-redux';
import Reducer from './component/Reducer.jsx';
const store = createStore(Reducer);
ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
    </Provider>
)
