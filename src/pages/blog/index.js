import * as React from 'react'
import Layout from '../../components/layout'
import Seo from '../../components/seo'
import { Link, graphql } from 'gatsby'

const pageTitle = 'My Blog Posts'

const BlogPage = ({ data }) => {
    return (
        < Layout pageTitle={pageTitle} >
            {
                data.allMdx.nodes.map(node => (
                    <article key={node.id}>
                        <h2>
                            <Link to={`/blog/${node.frontmatter.slug}`}>
                                {node.frontmatter.title}
                            </Link>
                        </h2>
                        <p>Posted: {node.frontmatter.date}</p>
                    </article>
                ))
            }
        </Layout >
    )
}

export const query = graphql`
    query {
        allMdx(sort: {order: DESC, fields: frontmatter___date}) {
            nodes {
              frontmatter {
                date(formatString: "MMMM DD, YYYY")
                slug
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