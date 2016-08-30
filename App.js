import React from 'react';
import ReactDOM from 'react-dom';
class App extends React.Component {
  constructor(){
    super();
    this.state = {
      red: 0,
      green: 0,
      blue: 0
    }

    // this.update = this.update.bind(this)
  }

  update(e){
    this.setState({
      red: ReactDOM.findDOMNode(this.refs.red).value,
      green: ReactDOM.findDOMNode(this.refs.green).value,
      blue: ReactDOM.findDOMNode(this.refs.blue).value
    })
  }

  render() {
    let text = this.state.text
    return (
        <div>
          <Slider ref="red" update={this.update.bind(this)} />
          <h1>{this.state.red}</h1>
          <Slider ref="green" update={this.update.bind(this)} />
          <h1>{this.state.green}</h1>
          <Slider ref="blue" update={this.update.bind(this)} />
          <h1>{this.state.blue}</h1>
        </div>
    )
  }

}

class Slider extends React.Component {
  render() {
    return (
      <input type="range" min="0" max="255" onChange={this.props.update} />
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

