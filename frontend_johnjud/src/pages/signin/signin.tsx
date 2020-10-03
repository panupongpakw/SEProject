import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {GoogleLogin} from 'react-google-login';
import {Button,Container} from 'reactstrap';
import './signin.css';
import { NavLink } from 'react-router-dom';
import back from './arrow_left.png'

const clientId = '99307406475-s1a1a9rcrfpo3kchirudo8i8fnidr0og.apps.googleusercontent.com'

const responseGoogle = (response : any) => {
  console.log(response);
}

const signin = () =>{
  return(
    <Container>
      <div className='left-half'>
        <NavLink to='/signin'><img src={back} alt='' className='back_page'/></NavLink>
        <div id='logo'></div>
      </div>
      <div className='right-half'>
        <div className='right-white-bg'>
          <div className='box'>
            <h2> Welcome to JohnJud! </h2>
            <br/><br/>
            <Container className='textbox'>
              <GoogleLogin
                clientId={clientId}
                buttonText="Sign in with Google account"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={'single_host_origin'}
              />
              <br/>
              <NavLink to='/signin2' className='botton_signin'><Button outline color='secondary'>Sign in with JohnJud account</Button></NavLink>
              <br/>
              <p className='register'>haven't register? <NavLink to='./signup'>sign up </NavLink></p>
            </Container>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default signin;