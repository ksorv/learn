import React from "react"
import { StaticQuery, graphql } from "gatsby"

const PostData = () => (
    <StaticQuery
        query={graphql`
      {
        site {
          siteMetadata {
            description
          }
        }
      }
    `}
        render={data => <pre>{data.site.siteMetadata.description}</pre>}
    ></StaticQuery>
)

export default PostData
