import React, { useState } from 'react'
import { Mutation } from 'react-apollo'
import GoogleLogin from 'react-google-login'

import { Paper, Button, TextField} from '@material-ui/core'
import styled from 'styled-components';

import { q_AddUser } from '../queries'

const Login = () => {

    const [gmail, setGmail] = useState('')
    const [gname, setGname] = useState('')
    const [sname, setSname] = useState('')
    const [gid, setGid] = useState('')
    const [uname, setUname] = useState('')
    const [password, setPassword] = useState('')

    const responseGoogle = ({
        profileObj: { email, givenName, familyName, googleId }
    }) => {
        setGmail(email)
        setGname(givenName)
        setSname(familyName)
        setGid(googleId)
    }

    return (
        <Mutation mutation={q_AddUser}>
            {( AddUser, { loading, error, data }) => {
                console.log(data)
                return (
                <div>
                    <Wrapper>
                        <TextField
                            autoFocus
                            placeholder="username"
                            onChange={e => {setUname(e.target.value)}}
                            value={uname}
                        />
                        <TextField
                            placeholder="password"     
                            onChange={e => {setPassword(e.target.value)}}
                            value={password}
                        />
                        <GoogleLogin
                            clientId="511883778031-cmdjd47sv4c8cqd1jcrmhi4kuvj0r6l4.apps.googleusercontent.com"
                            buttonText="Login"
                            onSuccess={responseGoogle}
                            onFailure={responseGoogle}
                            cookiePolicy={'single_host_origin'}
                            />
                        <Button onClick={() => {
                            AddUser({ variables: { 
                                givenName: gname, 
                                surName: sname, 
                                googleId: gid, 
                                userName: uname, 
                                password: password, 
                                googleEmail: gmail }})
                            console.log(gmail + " " + gname + " " + sname + " " + gid + " " + uname + " " + password)
                        }}>전송</Button>
                    </Wrapper>
                </div>
                )
            }}
        </Mutation>
    )
}

export default Login;


// styled-components 로 스타일링한 리액트 컴포넌트
const Wrapper = styled(Paper)`
  width: 450px;
  display: flex;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
  padding: 16px;
`