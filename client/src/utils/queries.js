import { gql } from "@apollo/client";

export const QUERY_USER = gql`
  query queryUser {
    users {
      username
      email
      password
      savedBooks {
        authors
        description
        bookId
        image
        link
        title
      }
    }
  }
`;
