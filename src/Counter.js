import React, { Component } from "react"

export default class extends Component {
  state = {
    count: 0
  }

  count = () => {
    this.setState(prevState => ({ count: prevState.count + 1 }))
  }

  render() {
    const { count } = this.state
    return (
      <div>
        <button data-testid="counter-button" onClick={this.count}>
          {count}
        </button>
      </div>
    )
  }
}
