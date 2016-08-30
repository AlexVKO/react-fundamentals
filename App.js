import React from 'react';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      text: "this is the state text"
    }
  }

  update(e){
    this.setState({text: e.target.value})
  }

  render() {
    let text = this.props.text
    return (
            <div>
              <input type="text" onChange={this.update.bind(this)} />
              <h1>{this.state.text}</h1>
            </div>
    )
  }

}

App.propTypes = {
  text: React.PropTypes.string,
  cat: React.PropTypes.number.isRequired
}

App.defaultProps = {
  text: "this is the default value of props"
}

export default App

