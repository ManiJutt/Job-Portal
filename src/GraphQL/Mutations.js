import { gql } from "@apollo/client";

export const CREATE_JOB_MUTATION = gql`
  mutation postJobMutation(
    $title: String!
    $commitmentId: ID!
    $locationNames: String!
    $companyName: String!
    $userEmail: String!
    $description: String!
    $applyUrl: String!
  ) {
    postJob(
      input: {
        applyUrl: $applyUrl
        title: $title
        commitmentId: $commitmentId
        companyName: $companyName
        locationNames: $locationNames
        userEmail: $userEmail
        description: $description
      }
    ) {
      title
    }
  }
`;
