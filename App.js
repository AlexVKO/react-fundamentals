import React  from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  render() {
    return <h1>{this.props.text}</h1>
  }
}

// Stateless function
// const App = () =>  <h1> Its the same </h1>

// export default App

ReactDOM.render(
    <App text="this is the props" />,
    document.getElementById('app')
  )
