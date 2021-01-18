import React from "react"
import {About} from "./About"
import {render} from "@testing-library/react"

describe ("About", () => {
    it('renders correctly', () => {
        const {container} = render(<About/>)
        expect (container.innerHTML).toMatch("About")
    });
})
