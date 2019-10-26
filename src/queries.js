import gql from "graphql-tag";

export const q_AddUser = gql`
    mutation addUserMutation(
        $givenName: String,
        $surName: String,
        $googleId: String,
        $userName: String,
        $password: String,
        $googleEmail: String
) {
    addUser( 
        givenName: $givenName, 
        surName: $surName, 
        googleId: $googleId, 
        userName: $userName, 
        password:$password, 
        googleEmail: $googleEmail
        ) 
    }
`