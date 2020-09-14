import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"

const BlogPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <h1>Latest Post{console.log("data----", data)}</h1>
    {data &&
      data.allMarkdownRemark.edges.map(post => (
        <div key={post.node.id}>
          <h1>{post.node.frontmatter.title}</h1>
          <small>
            Posted by {post.node.frontmatter.author} on{" "}
            {post.node.frontmatter.date}
          </small>
          <br />
          <br />
          <Link to={post.node.frontmatter.path}> Read More </Link>
          <br />
          <br />
          <hr />
        </div>
      ))}
  </Layout>
)

export default BlogPage

export const pageQuery = graphql`
  query BlogIndexQuery {
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            path
            title
            date
            author
          }
          excerpt
        }
      }
    }
  }
`
