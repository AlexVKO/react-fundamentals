import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor() {
    super();
    this.state = { val: 0 }
    this.update = this.update.bind(this);
  }

  update(){
    this.setState({val: this.state.val + 1})
  }

  componentWillMount(){
    this.setState({m:2})
  }

  componentDidMount(){
    console.log(ReactDOM.findDOMNode(this))
  }

  componentWillUnmount(){
    console.log('bye')
  }

  render() {
    console.log('rendering')
    return <button onClick={this.update}>{this.state.val * this.state.m}</button>
  }
}

class Wrapper extends React.Component {
  constructor(){
     super();
  }

  mount(){
    console.log('mounting')
    ReactDOM.render(<App />, document.getElementById('a'))
  }

  unmount(){
    ReactDOM.unmountComponentAtNode(document.getElementById('a'))
  }

  // componentDidMount(){
  //   console.log('123')
  //   this.mount()
  // }

  render(){

    return (
            <div>
              <button onClick={this.unmount.bind(this)}>unmount</button>
              <button onClick={this.mount.bind(this)}>mount</button>
              <div id="a"></div>
            </div>
            )
  }

}

export default Wrapper

