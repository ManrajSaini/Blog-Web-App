import React, { useState, useEffect, useContext } from 'react';

import { TextField, Box, Button, Typography, styled } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import {Helmet} from 'react-helmet';
import './Login.css';

import { API } from '../../service/api';
import { DataContext } from '../../context/DataProvider';

const ParentContainer = styled(Box)`
  display: flex;
  padding-right: 100px;
  align-items: center;
`;

const Component = styled(Box)`
    width: 400px;
    margin: auto;
    box-shadox : 5px 2px 5px 5px rgb(1,1,0)0.6;

`;

const Image = styled('img')({
    width: 160,
    display: 'flex',
    margin: 'auto',
    padding: '50px 0 0'
});

const Wrapper = styled(Box)`
    padding: 25px 35px;
    display: flex;
    flex: 1;
    overflow: auto;
    flex-direction: column;
    & > div, & > button, & > p {
        margin-top: 20px;
    }
`;

const LoginButton = styled(Button)`
    text-transform: none;
    background: none;
    border: solid 3px #ad9e11;
    color: #fff;
    height: 48px;
    border-radius: 2px;
    font-size: 19px;
    font-weight: bold;

`;

const SignupButton = styled(Button)`
    text-transform: none;
    background: none;
    border: solid 3px #ad9e11;
    color: #fff;
    height: 48px;
    border-radius: 2px;
    box-shadow: 0 2px 4px 0 rgb(0 0 0 / 20%);
    font-size: 19px;
    font-weight: bold;
`;

const Text = styled(Typography)`
    color: white;
    font-size: 17px;
    font-weight: bold;
`;

const Error = styled(Typography)`
    font-size: 10px;
    color: #ff6161;
    line-height: 0;
    margin-top: 10px;
    font-weight: 600;
`

const loginInitialValues = {
    username: '',
    password: ''
};

const signupInitialValues = {
    name: '',
    username: '',
    password: '',
};

const Login = ({ isUserAuthenticated }) => {
    const [login, setLogin] = useState(loginInitialValues);
    const [signup, setSignup] = useState(signupInitialValues);
    const [error, showError] = useState('');
    const [account, toggleAccount] = useState('login');

    const navigate = useNavigate();
    const { setAccount } = useContext(DataContext);

    const imageURL = 'https://i.postimg.cc/W3Rf9NjP/blog-high-resolution-logo-white-on-transparent-background.png';

    useEffect(() => {
        showError(false);
    }, [login])


    const onValueChange = (e) => {
        setLogin({ ...login, [e.target.name]: e.target.value });
    }

    const onInputChange = (e) => {
        setSignup({ ...signup, [e.target.name]: e.target.value });
    }

    const loginUser = async () => {
        let response = await API.userLogin(login);
        if (response.isSuccess) {
            showError('');

            sessionStorage.setItem('accessToken', `Bearer ${response.data.accessToken}`);
            sessionStorage.setItem('refreshToken', `Bearer ${response.data.refreshToken}`);
            setAccount({ name: response.data.name, username: response.data.username });
            
            isUserAuthenticated(true);
            setLogin(loginInitialValues);
            navigate('/');
        } else {
            showError('Something went wrong! please try again later');
        }
    }

    const signupUser = async () => {
        let response = await API.userSignup(signup);
        if (response.isSuccess) {
            showError('');
            setSignup(signupInitialValues);
            toggleAccount('login');
        } else {
            showError('Something went wrong! please try again later');
        }
    }

    const toggleSignup = () => {
        account === 'signup' ? toggleAccount('login') : toggleAccount('signup');
    }


    return (
        <ParentContainer>
            <Helmet>
                <style>{'body { background-color: #022a4f; }'}</style>
            </Helmet>
            <Component>
            <Box>
            <Image src={imageURL} alt="blog" />
            {
                account === 'login' ?
                            <Wrapper>
                                <TextField variant="standard" autoComplete='off' value={login.username} onChange={(e) => onValueChange(e)} name='username' label='Enter Username' InputProps={{style: {color: 'white',backgroundColor: 'none',fontSize: '25px'}}} InputLabelProps={{ style: { color: 'gold' } }}/>
                                <TextField variant="standard" type='password' autoComplete='off' value={login.password} onChange={(e) => onValueChange(e)} name='password' label='Enter Password' InputProps={{style: {color: 'white',backgroundColor: 'none',fontSize: '25px'}}} InputLabelProps={{ style: { color: 'gold' } }}/>

                                {error && <Error>{error}</Error>}

                                <LoginButton variant="contained" onClick={() => loginUser()} >Login</LoginButton>
                                <Text style={{ textAlign: 'center' }}>OR</Text>
                                <SignupButton  variant="contained" onClick={() => toggleSignup()} style={{ marginBottom: 50 } }>Create an account</SignupButton>
                            </Wrapper> :
                            <Wrapper>
                                <TextField variant="standard" autoComplete='off' onChange={(e) => onInputChange(e)} name='name' label='Enter Name' InputProps={{style: {color: 'white',backgroundColor: 'none',fontSize: '25px'}}} InputLabelProps={{ style: { color: 'gold' } }} />
                                <TextField variant="standard" autoComplete='off' onChange={(e) => onInputChange(e)} name='username' label='Enter Username' InputProps={{style: {color: 'white',backgroundColor: 'none',fontSize: '25px'}}} InputLabelProps={{ style: { color: 'gold' } }}/>
                                <TextField variant="standard" type='password' autoComplete='off' onChange={(e) => onInputChange(e)} name='password' label='Enter Password' InputProps={{style: {color: 'white',backgroundColor: 'none',fontSize: '25px'}}} InputLabelProps={{ style: { color: 'gold' } }}/>

                                <SignupButton variant="contained" onClick={() => signupUser()} >Signup</SignupButton>
                                <Text style={{ textAlign: 'center' }}>OR</Text>
                                <LoginButton variant="contained" onClick={() => toggleSignup()}>Already have an account</LoginButton>
                            </Wrapper>
                    }
                </Box>
            </Component>
            <img src='https://i.postimg.cc/Jz9W6gM8/typewriter.png' alt='typeimage' id='typeImage' width='500px' height='400px' />
        </ParentContainer>
    )
}

export default Login;