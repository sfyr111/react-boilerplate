import React, { Component } from 'react'
import Loadable from 'react-loadable'
import { Switch, Route } from 'react-router-dom'

import Loading from './component/loading/loading'

import routes from './routes'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      hasError: false,
    }
  }

  componentDidCatch(err, info) {
    console.error(err, info) // eslint-disable-line
    this.setState({
      hasError: true,
    })
  }

  render() {
    return this.state.hasError
      ? <h2>页面出错了</h2>
      : (
        <Switch>
          {
            routes.map(route => {
              const LoadableComponent = Loadable({
                loader: route.loader,
                loading: Loading,
              })
              return <Route key={route.state} path={route.path} exact component={LoadableComponent} />
            })
          }
        </Switch>
      )
  }
}

export default App
