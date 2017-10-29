import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom'
import './index.css';
import App from './App';
import NotFound from './NotFound';
import registerServiceWorker from './registerServiceWorker';

const Root = () => {
  return (
    <BrowserRouter>
      <div>
        <Route exact path="/" component={App}/>
        <Route path="/neighborhood/:nhid" component={App}/>
      </div>
    </BrowserRouter>
  )
}

ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();
