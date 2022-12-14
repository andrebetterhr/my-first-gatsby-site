// Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'
import { StaticImage } from 'gatsby-plugin-image'

const pageTitle = 'Home Page'


// Step 2: Define your component
const IndexPage = () => {
  return (
    <Layout pageTitle={pageTitle}>
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <StaticImage
        alt="kermit having a good time at sea"
        src="../images/kermit.jpg"
      />
    </Layout>
  )
}

// You'll learn about this in the next task, just copy it for now
export const Head = () => <Seo title={pageTitle} />

// Step 3: Export your component
export default IndexPage