import React from 'react'
import { Route } from 'react-router-dom';

import MainPage from 'main-page';
import SearchPage from 'search-page';
import 'css/app.css'

const App = () => (
  <div className="app">
    <Route exact path='/' component={MainPage}/>
    <Route path='/search' component={SearchPage}/>
  </div>
)

export default App
