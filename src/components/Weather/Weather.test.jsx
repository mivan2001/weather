import React from 'react'
import { render } from '@testing-library/react'
import Weather from './Weather'

test("Weather render", async () => {
        ///AAA
        const temperatura = "10"

        const { findByRole } = render(<Weather temperature={temperatura} />)

        const temp = await findByRole("heading")

        expect(temp).toHaveTextContent("10")
    }
)
