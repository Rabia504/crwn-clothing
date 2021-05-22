import React from 'react';
import './signin-and-signup-page.styles.scss';
import Sigin from '../../components/signin/signin.component';
import Signup from '../../components/signup/signup.component';

 const SigninAndSignupPage = () =>(
<>
     <div className='homepage'>
      <Sigin />
      <Signup />
    </div>

    
    

</>
  );

  export default SigninAndSignupPage;