import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'
import { graphql } from 'gatsby'

const pageTitle = 'My Blog Posts'

const BlogPage = ({ data }) => {
    return (
        <Layout pageTitle={pageTitle}>
            {
                data.allMdx.nodes.map(node => (
                    <article key={node.id}>
                        <h2>{node.frontmatter.title}</h2>
                        <p>Posted: {node.frontmatter.date}</p>
                        <p>{node.excerpt}</p>
                    </article>
                ))
            }
        </Layout>
    )
}

export const query = graphql`
    query {
        allMdx(sort: {order: DESC, fields: frontmatter___date}) {
            nodes {
              frontmatter {
                date(formatString: "MMMM DD, YYYY")
                title
              }
              id
              excerpt
            }
        }
    }
`

export const Head = () => <Seo title={pageTitle} />

export default BlogPage