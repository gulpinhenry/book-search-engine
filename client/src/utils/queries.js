import { gql } from '@apollo/client';

export const GET_USER = gql`
{
    getUser {
      _id
      username
      email
      bookCount
      savedBooks {
        # _id
        bookId
        authors
        image
        link
        title
        description
      }
    }
  }
`;