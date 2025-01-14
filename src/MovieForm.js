import React, { Component } from "react"

export default class MovieForm extends Component {
  state = {
    text: ""
  }

  // submitForm = text => {}

  render() {
    const { submitForm } = this.props
    const { text } = this.state
    return (
      <div>
        <form
          data-testid="movie-form"
          onSubmit={() => {
            submitForm({ text })
          }}
        >
          <label htmlFor="text">Text</label>
          <input
            type="text"
            id="text"
            onChange={e => this.setState({ text: e.target.value })}
          />
          <button>Submit</button>
        </form>
      </div>
    )
  }
}
