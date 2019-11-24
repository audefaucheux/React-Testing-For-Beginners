import React from "react"
import { render, cleanup } from "react-testing-library"
import { MemoryRouter } from "react-router-dom"
import Movie from "./Movie"

afterEach(() => {
  cleanup()
  console.error.mockClear()
})

console.error = jest.fn()

test("<Movie/>", () => {
  render(<Movie />)
  expect(console.error).toHaveBeenCalled()
})

const movie = {
  id: "1",
  title: "Poop Movie",
  poster_path: "blabla.jpg"
}

test("<Movie /> with movie", () => {
  render(
    <MemoryRouter>
      <Movie movie={movie} />
    </MemoryRouter>
  )
  expect(console.error).not.toHaveBeenCalled()
})
