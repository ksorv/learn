import React from 'react'
import Layout from '../components/layout'
import { useStaticQuery, graphql } from "gatsby"
import PostData from '../examples/static'

function Products() {
    const { site: { siteMetadata: { author, title } } } = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          author
          title
        }
      }
    }
  `)
    return (
        <Layout>
            <h1>{title}</h1>
            <p>{author}</p>
            <PostData />
        </Layout>
    )
}

export default Products
