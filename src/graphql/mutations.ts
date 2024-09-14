import { gql } from "@apollo/client";

export const LOGIN_MUTATION = gql`
    mutation Login($email: String!, $password: String!){
        login(email: $email, password: $password){
            access_token
            refresh_token
        }
    }
`;

export const REFRESH_TOKEN_MUTATION = gql`
  mutation refreshToken($refresh_token: String!) {
    refreshToken(refresh_token: $refresh_token) {
      access_token
    }
  }
`;

export const Get_MY_PROFILE = gql`
  query {
    myProfile {
      id
      name
      avatar
    }
  }
`