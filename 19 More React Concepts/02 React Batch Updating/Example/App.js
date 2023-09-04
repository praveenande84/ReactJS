import { Component } from "react"

class App extends Component {
  state = { count: 0 }

  onIncrement = () => {
    this.setState((prevState) => ({ count: prevState.count + 1 }))
    this.setState((prevState) => ({ count: prevState.count + 1 }))
    this.setState((prevState) => ({ count: prevState.count + 1 }))
  }

// when you click on the Increase button only one time render will be triggered.

  render() {
    const { count } = this.state
    console.log("render() called")
    return (
      <>
        <p className="count">Count {count}</p>
        <button onClick={this.onIncrement}>Increase</button>
      </>
    )
  }
}

export default App