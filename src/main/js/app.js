const React = require('react');
const ReactDOM = require('react-dom');

import { BrowserRouter } from 'react-router-dom'

import Header from './header'
import Main from './main'

// this component will be rendered by our <___Router>
class App extends React.Component {

  render() {
      return (
          <div>
              <Header />
              <Main />
          </div>
    )
  }
}

ReactDOM.render((
    <BrowserRouter>
        <App />
    </BrowserRouter>),
	document.getElementById('app')
)


