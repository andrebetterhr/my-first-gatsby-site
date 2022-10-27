import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'
import { graphql } from 'gatsby'

const pageTitle = 'My Blog Posts'

const BlogPage = ({ data }) => {
    return (
        <Layout pageTitle={pageTitle}>
            <ul>
                {
                    data.allFile.nodes.map(node => (
                        <li key={node.name}>
                            {node.name}
                        </li>
                    ))
                }
            </ul>
        </Layout>
    )
}

export const query = graphql`
    query {
        allFile {
            nodes {
                name
            }
        }
    }
`

export const Head = () => <Seo title={pageTitle} />

export default BlogPage