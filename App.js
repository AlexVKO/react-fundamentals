import React  from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  render() {
    let text = this.props.text
    return <h1>{text}</h1>
  }
}

App.propTypes = {
  txt: React.PropTypes.string,
  cat: React.PropTypes.number.isRequired
}

// Stateless function
// const App = () =>  <h1> Its the same </h1>

// export default App

ReactDOM.render(
    <App text="this is the props" cat={5}/>,
    document.getElementById('app')
  )
