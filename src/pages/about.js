// Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'

const pageTitle = 'About Me'


// Step 2: Define your component
const AboutPage = () => {
    return (
        <Layout pageTitle={pageTitle}>
            <p>Hi there! I'm the proud creator of this site, which I built with Gatsby.</p>
        </Layout>
    )
}

export const Head = () => <Seo title={pageTitle} />

// Step 3: Export your component
export default AboutPage