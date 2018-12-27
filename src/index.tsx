 import * as React from 'react';
 import * as ReactDOM from 'react-dom';
 import { AppRouter } from './routers';
import { Provider } from 'react-redux';
import { store }from './store';




 const render = ReactDOM.render(
 	<Provider store={store}>
   <AppRouter/>
   </Provider>,document.getElementById('root')
 );
