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

App.defaultProps = {
  text: "this is the default value of props"
}

ReactDOM.render(
    <App cat={5}/>,
    document.getElementById('app')
  )
// Stateless function
// const App = () =>  <h1> Its the same </h1>

// export default App

