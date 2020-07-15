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
    { name: 'Aangine', description: 'Automated Portfolio Planning', url: 'http://www.aangine.com', img: 'https://via.placeholder.com/728x200.png?text=aangine' },
    { name: 'IPH', description: 'International Performance Hub', url: 'http://www.iph.sa', img: 'https://via.placeholder.com/728x200.png?text=IPH' },
    { name: 'Digxcel', description: 'GDPR Compliance', url: 'http://www.digxcel.ie', img: 'https://via.placeholder.com/728x200.png?text=digxcel' },
  ]

  return (
    <>
      <h2 className={style === 'dark' ? "text-white" : ""}>My Professional Projects</h2>
      <p className={`f4 mb-4 ${style === 'dark' ? 'text-white' : 'text-gray'}`}>Some Projects I've worked on professionally</p>
      <div className="d-sm-flex flex-wrap gutter-condensed mb-4">
        {professionalProjects.map((repository, i) => (
          <div key={i} className="col-sm-6 col-md-12 col-lg-6 col-xl-4 mb-3">
            <ProjectCard repository={repository} />
          </div>
        ))}
      </div>
      <hr />
      <h2 className={style === 'dark' ? "text-white" : ""}>My Git Projects</h2>
      <p className={`f4 mb-4 ${style === 'dark' ? 'text-white' : 'text-gray'}`}>Some mini GitHub projects I created</p>
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
