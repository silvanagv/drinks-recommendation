 import React from 'react'
import {render} from 'react-dom'
import DrinkSuggestion from './TrendSuggestion.jsx'

class App extends React.Component {
  render () {
    return (
    <div>
    <DrinkSuggestion />
    </div>
  )
  }
}

render(<App/>, document.getElementById('app'));
