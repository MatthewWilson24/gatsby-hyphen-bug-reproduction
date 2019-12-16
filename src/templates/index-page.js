import React from 'react'
import { graphql } from 'gatsby'

export const IndexPageTemplate = ({image1, text1, image2, text2}) => (
  <div>
    <img src={image1} />
    <p>{text1}</p>
    <img src={image2} />
    <p>{text2}</p>
  </div>
)


const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <div>
      <IndexPageTemplate
        image1={frontmatter.image_with_text.image}
        text1={frontmatter.image_with_text.text}
        image2={frontmatter.imageWithText.image}
        text2={frontmatter.imageWithText.text}
      />
    </div>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        image_with_text {
          image {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
          text
        }
        imageWithText {
          image {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
          text
        }
      }
    }
  }
`
