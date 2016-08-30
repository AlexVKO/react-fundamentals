import React from 'react';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      text: "this is the state text"
    }

    this.update = this.update.bind(this)
  }

  update(e){
    this.setState({text: e.target.value})
  }

  render() {
    let text = this.props.text
    return (
        <div class="">
          <Widget text={this.state.text} update={this.update}></Widget>
          <Widget text={this.state.text} update={this.update}></Widget>
          <Widget text={this.state.text} update={this.update}></Widget>
          <Widget text={this.state.text} update={this.update}></Widget>
          <Widget text={this.state.text} update={this.update}></Widget>
          <Widget text={this.state.text} update={this.update}></Widget>
        </div>
    )
  }

}

const Widget = (props) => {
  return (
            <div>
              <input type="text" onChange={props.update} />
              <h1>{props.text}</h1>
            </div>
          )
}

App.propTypes = {
  text: React.PropTypes.string,
  cat: React.PropTypes.number.isRequired
}

App.defaultProps = {
  text: "this is the default value of props"
}

export default App

