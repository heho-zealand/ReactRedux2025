import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import App from './components/App';
import reducers from './reducers';



createRoot(document.getElementById('root')).render(
  <StrictMode>
   <Provider store={createStore(reducers)}>
        <App />
    </Provider>,
  </StrictMode>,
)







