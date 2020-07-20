import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './TodoList';
import Detail from './detail';
import { Provider } from 'react-redux'
import store from './store'
import { HashRouter, Route, Switch } from 'react-router-dom'

const App = props => 
  <Provider store={store}>
      <HashRouter>
        <Switch>
            <Route exact path="/" component={TodoList}/>
            <Route exact path="/detail" component={Detail}/>
        </Switch>
    </HashRouter>
      
  </Provider>


ReactDOM.render(
    <App />,document.getElementById('root')
);

