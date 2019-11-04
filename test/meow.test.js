
import React from 'react'
import { render, cleanup } from '@testing-library/react'

import { Meow } from '../src/meow'

describe('<Meow/>', () => {

    let container

    beforeEach(() => {
        container = render(<Meow/>).container
    })

    afterEach(cleanup)

    it('meows', () => {
        expect(container).toHaveTextContent('Meow')
    })
})