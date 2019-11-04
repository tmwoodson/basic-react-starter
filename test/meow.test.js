import '@testing-library/jest-dom/extend-expect' // ideally this should be in a test setup file

import React from 'react'
import { render } from '@testing-library/react'

import { Meow } from '../src/meow'

describe('<Meow/>', () => {

    let container

    beforeEach(() => {
        container = render(<Meow/>).container
    })

    it('meows', () => {
        expect(container).toHaveTextContent('Meow')
    })
})