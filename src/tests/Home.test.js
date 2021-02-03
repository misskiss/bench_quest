import * as React from 'react'
import * as ReactDOM from 'react-dom'

import { Home } from '../components/index'

test('renders the correct content', () => {
  // Render a React component to the DOM
  const root = document.createElement('div')
  ReactDOM.render(<Home />, root)

  expect(
    root
      .querySelector('footer')
      .textContent.toBe('Something here to give the footer a purpose!')
  )
})
