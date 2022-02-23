import { graphql } from '@octokit/graphql'
import { months } from 'translations/months'

const lastUpdateDateQuery = `
  query lastUpdateDate($path: String!) {
    repository(owner: "YourJustice-Live", name: "landing") {
      ref(qualifiedName: "main") {
        target {
          ... on Commit {
            history(first: 1, path: $path) {
              edges {
                node {
                  committedDate
                }
              }
            }
          }
        }
      }
    }
  }
`

export default async function getLastUpdateDate(token, path, locale) {
  try {
    const { repository } = await graphql(lastUpdateDateQuery, {
      path,
      headers: {
        authorization: `token ${token}`,
      },
    })

    const date = new Date(repository.ref.target.history.edges[0].node.committedDate)
    const year = date.getFullYear()
    const month = months[date.getMonth()][locale]
    const day = date.getDate()

    return `${month} ${day}, ${year}`
  } catch {
    console.log('Предупреждение: не удалось получить дату обновления', { path })
    return null
  }
}
