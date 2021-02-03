import React from 'react'
import { render, fireEvent, cleanup } from 'react-testing-library'
import axios from 'axios'
import { Home } from '../components/Home'
import Pagination from '@material-ui/lab/Pagination'

afterEach(cleanup)

// const inputContainer = render(<Input startingText="write"></Input>)
// const input = inputContainer.getByLabelText('user-input')

it('calls "onChange" prop on button click', () => {
  // Render new instance in every test to prevent leaking state
  const onChange = jest.fn()
  // const { getByText } = render(<Pagination onChange={onChange} />)

  // const { input } = setup()

  fireEvent.change(input, { target: { value: '3' } })
  expect(input.value).toBe('3')
})

// mockedAxios.get = jest.fn()
// jest.mock('mockedAxios')

// test('mocking <Home /> axios request', async () => {
//   const data = {
//     data: [
//       {
//         appearance: [],
//         better_call_saul_appearance: [],
//         birthday: '09-07-1958',
//         category: 'Breaking Bad',
//         char_id: 2,
//         img: 'https://images.something.jpg',
//         name: 'Walt W',
//         nickname: 'Heisen',
//         occupation: [],
//         portrayed: 'Famous Actor',
//         status: 'Alive',
//       },
//     ],
//   }

//   mockedAxios.get.mockResolvedValueOnce(data)
//   const { getByText } = render(<Home />)
//   await waitFor(() => {
//     expect(getByText).toBe('')
//     // expect(getByText('mocked name'))
//   })
// })
