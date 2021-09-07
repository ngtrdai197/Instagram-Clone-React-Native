import { gql } from '@apollo/client';

export const AUTH_LOGIN_MUTATION = gql`
  mutation signInMutation($input: CredentialInput!) {
    signIn(input: $input) {
      token
      refreshToken
      user {
        id
        email
        fullName
        username
        phoneNumber
        bio
        dob
        gender
        website
        avatarUrl
        hasFollow
      }
    }
  }
`;
