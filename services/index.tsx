import { request, gql } from "graphql-request"

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT!
// const graphqlAPI = 'https://api-ap-northeast-1.hygraph.com/v2/cln83lwwcg0ge01uo96dy8ph1/master'

export const getProject = async () => {
  const query = gql`
    query MyQuery {
      projectsConnection {
        edges {
          node {
            name
            createdAt
            slug
            image {
              url
            }
            projectTypes {
              name
              slug
            }
            excerpt
            featuredProject
          }
        }
      }
    }
  `
  const result = await request(graphqlAPI, query)
  return result
}