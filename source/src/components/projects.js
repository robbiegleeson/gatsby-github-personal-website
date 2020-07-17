import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import RepoCard from "./repoCard"
import ProjectCard from "./projectCard"
import useThemeContext from "../hooks/themeContext"

function Projects() {
  const { style } = useThemeContext()
  const { github: { viewer: { repositories } } } = useStaticQuery(
    graphql`
      query {
        github {
          viewer {
            repositories(privacy: PUBLIC, affiliations: OWNER, first: 50, orderBy: {field: CREATED_AT, direction: DESC}) {
              nodes {
                owner {
                  login
                }
                name
                url
                description
                stargazers {
                  totalCount
                }
                forkCount
              }
            }
          }
        }
      }
    `
  );

  const projectsToDisplay = [
    'eircode', 'repo', 'getme', 'gistHub', 'twitter-assistant', 'react-native-expo-face-recognition'
  ];

  const professionalProjects = [
    { name: 'Aangine', company:'Continuous Software Ltd', description: 'Automated Portfolio Planning. Aangine is a new solution that enables you to plan multiple portfolios of your projects automatically. It becomes an important member of your annual planning process, and assists you continuously during the year to compare the plan against the progress, deciding on the next changes to make in your portfolio', url: 'http://www.aangine.com', img: 'https://www.continuoussoftware.ie/wp-content/uploads/2018/01/angine_white.png' },
    { name: 'IPH', company:'Continuous Software Ltd', description: 'International Performance Hub. IPH is an interactive platform designed to track over 500 Key Performance Indicators (KPIs) under 12 main pillars, ranging from education and energy to social and industry.', url: 'http://www.iph.sa', img: 'https://www.iph.sa/assets/images/logo/logo-en.png' },
    { name: 'Digxcel', company:'Software Design Ltd', description: 'GDPR Compliance. DigXcel is a GDPR compliance platform that Software Design offer as a SAAS product. The product automates all the steps involved in GDPR compliance, allowing users to manage their personal data, consents and cookie preferences.', url: 'http://www.digxcel.ie', img: 'https://robbiegleeson.github.io/images/digxcel.png' },
  ]

  return (
    <>
      <h2 className={style === 'dark' ? "text-orange" : ""}>My Professional Projects</h2>
      <p className={`f4 mb-4 ${style === 'dark' ? 'text-white' : 'text-gray'}`}></p>
      <div className="d-sm-flex flex-wrap gutter-condensed mb-4">
        {professionalProjects.map((repository, i) => (
          <div key={i} className="col-sm-6 col-md-12 col-lg-6 col-xl-4 mb-3">
            <ProjectCard repository={repository} />
          </div>
        ))}
      </div>
      <hr />
      <h2 className={style === 'dark' ? "text-orange" : ""}>My Open Source Projects</h2>
      <p className={`f4 mb-4 ${style === 'dark' ? 'text-white' : 'text-gray'}`}></p>
      <div className="d-sm-flex flex-wrap gutter-condensed mb-4">
        {repositories.nodes.filter(repo => projectsToDisplay.find(p => p === repo.name)).map((repository, i) => (
          <div key={i} className="col-sm-6 col-md-12 col-lg-6 col-xl-4 mb-3">
            <RepoCard repository={repository} />
          </div>
        ))}
      </div>
    </>
  )
}

export default Projects
