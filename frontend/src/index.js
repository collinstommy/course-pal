import React from 'react'
import ReactDOM from 'react-dom'

import Main from './components/Main';

import LocalizationContext, { localization } from './utils/context';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers/index';
import { BrowserRouter, Route } from 'react-router-dom';
import FeaturedCourses from './components/FeaturedCourses';

const store = createStore(rootReducer,  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <LocalizationContext.Provider value={localization}>
        <Route path="/" component={Main}/>
        <Route path="/featured" component={FeaturedCourses}/>
      </LocalizationContext.Provider>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
