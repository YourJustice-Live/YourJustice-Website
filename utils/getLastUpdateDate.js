import { graphql } from "@octokit/graphql";



export default async function getLastUpdateDate(token, path) {
  const { repository } = await graphql(
    `{
      repository(owner: "YourJustice-Live", name: "landing") {
        ref(qualifiedName: "dev") {
          target {
            ... on Commit {
              history(first: 1, path: "${path}") {
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
    }`,
    {
      headers: {
        authorization: `token ${token}`,
      }
    }
  );
  return repository;
}
