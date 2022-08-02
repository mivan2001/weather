import React from 'react'
import { render } from '@testing-library/react'
import City from './City'

test("City render", async () => {
        // STANDAR DE LA AAA
        //  Arrange
        //  Ejecutar (Actuar)
        const city = "Nuevo León"
        const cityresp = "Monterrey"
        const country = "México"
        
        const { findAllByRole } = render(<City City city={city} country={country} />)
        //  Assert
        // findAllByRole nos va a buscar todos los componentes por heading
        // Ejemplo h1, h2, hn
        const cityComponent = await findAllByRole("heading")

        // Cuando el test va a ser correcto
        // Cuendo el el Heading 1 encuentre el texto "X" 
        // y en el segundo entcuentre el texto "Y"
        expect(cityComponent[0]).toHaveTextContent(city)
        expect(cityComponent[1]).toHaveTextContent(country)

    }
)