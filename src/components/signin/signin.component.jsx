import React, {Component} from 'react';
import './signin.styles.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

class Sigin extends Component {
constructor(){
    super();

    this.state = {
        email: '',
        password:''
    }
}

handleSubmit = async (event) =>{
    event.preventDefault();
    const {email,password} = this.state;

    try {
        await auth.signInWithEmailAndPassword(email,password);
        
        this.setState({
            email: '',
            password:''
        });

    } catch (error) {
        console.log(error);
    }

}
handleChange = (event) =>{
    const {value,name} = event.target;
    this.setState({[name]:value});

}
    render(){
        return (
            <div  className='sign-in'>
               <h2>I already have an account</h2>
               <span>Sign in with your email and passowrd</span>

               <form onSubmit={this.handleSubmit}>
                   <FormInput type="email" name="email" label="email" handleChange={this.handleChange} value={this.state.email} required  />

                   <FormInput type="password" name="password" label="password" handleChange={this.handleChange} value={this.state.password} required  />
                   <div className='buttons'>
                        <CustomButton type="submit">Sign in</CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignin>Sign in with google</CustomButton>
                   </div>
               </form>
            </div>
        )
    }

 }

  export default Sigin;