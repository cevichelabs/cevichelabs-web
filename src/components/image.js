import React from "react"
// import { useStaticQuery, graphql } from "gatsby"
import Img from "next/image"

const Image = (props) => {
  console.log(`Image: ${props}`);

  return <Img
    loading='lazy'
    src={props.src}
    width={150}
    height={150}
    alt='placeholder'
  />
}

export default Image
