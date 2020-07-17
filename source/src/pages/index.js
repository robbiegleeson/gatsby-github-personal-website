import React from "react"
import "../components/Toggle.css"

import Layout from "../components/layout"
import useThemeContext from "../hooks/themeContext"
import MastHead from '../components/mastHead'
import Projects from '../components/projects'
import Interests from '../components/interests'
import ExpericenceTimeline from '../components/experienceTimeline'
import Thoughts from '../components/thoughts'
import SEO from '../components/seo'
import useSiteMetadata from '../hooks/siteMetaData'

import './index.css';

function IndexPage() {
  const { style } = useThemeContext()
  const { layout } = useSiteMetadata()

  const { innerWidth: width } = typeof window !== 'undefined' && window;
  const isMobile = width >= 768 ? 'leftLayout' : '';

  const isDark = style === 'dark' ? 'dark' : 'light';

  return <Layout>
    {/* <SEO /> */}
    {layout === 'stacked' ?
      <div className="container-lg py-5 p-responsive text-center">
        <MastHead metaData={true} />
        <div className="my-6">
          <Projects />
        </div>
        <div className="my-6">
          <Interests />
        </div>
        <div className="my-6">
          <Thoughts />
        </div>
      </div> :
      <div className={`d-md-flex ${style !== 'dark' && 'border-md-bottom'}`}>
        <div className={`flex-self-stretch ${style === 'dark' ? 'bg-gray-dark' : 'border-md-right border-gray-light bg-white'} col-md-5 col-lg-4 col-xl-3 px-0 px-md-6 px-lg-7 py-0 ${isMobile}`}>
          <MastHead metaData={true} />
        </div>
        <div className={`col-md-7 col-lg-8 col-xl-9 px-lg-7 py-0 px-0 border-top border-md-top-0 ${isDark}`}>
          <div className="mx-auto" style={{ maxWidth: '1200px', paddingTop: 60, paddingRight: 20, paddingLeft: 20 }}>
            <Projects />
            <ExpericenceTimeline />
            <Interests />
            {/* <Thoughts /> */}
          </div>
        </div>
      </div>
    }
  </Layout>
}
export default IndexPage
