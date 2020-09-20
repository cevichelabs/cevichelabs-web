import React from "react"
import renderer from "react-test-renderer"

import Header from "../header"

describe("Header", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(<Header siteTitle='CevicheLabs Web' menuLinks={
        [
          {
            name: "METODOLOGÍA",
            description: "Cómo lo que hacemos",
            link: '/metodologia',
          },
          {
            name: "SOLUCIONES",
            description: "Qué es lo que hacemos",
            link: '/soluciones',
          },
          {
            name: "PLANES",
            description: "En qué te ayudamos",
            link: '/planes',
          },
          {
            name: "EXPERIENCIA",
            description: "Cómo te ayudamos",
            link: '/experiencia',
          }
        ]
      } />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
