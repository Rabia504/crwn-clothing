import React, {Component} from 'react';
import './signup.styles.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import {auth, createUserProfileDocument} from '../../firebase/firebase.utils';

class Sigup extends Component {
constructor(){
    super();

    this.state = {
        displayName:'',
        email: '',
        password:'',
        confirmPassword:''
    }
}

handleSubmit = async (event) =>{
    event.preventDefault();
    const {displayName,email,password,confirmPassword} = this.state;

    if(password !== confirmPassword)
    {
        alert("passwrds donot match");
        return;
    }
    try {
        const {user} = auth.createUserWithEmailAndPassword(email,password);
        await createUserProfileDocument(user,{displayName});
        this.setState({
            displayName:'',
            email: '',
            password:'',
            confirmPassword:''
        });

    } catch (error) {
        console.log(error);
    }
    

}
handleChange = (event) =>{
    const {name,value} = event.target;
    this.setState({[name]:value});

}
    render(){
        return (
            <div  className='sign-up'>
               <h2>I do not have an account</h2>
               <span>Sign up with your email and passowrd</span>

               <form onSubmit={this.handleSubmit}>

                   <FormInput type="text" name="displayName" label="Display Name" handleChange={this.handleChange} value={this.state.displayName} required  />

                   <FormInput type="email" name="email" label="Email" handleChange={this.handleChange} value={this.state.email} required  />

                   <FormInput type="password" name="password" label="Password" handleChange={this.handleChange} value={this.state.password} required  />

                   <FormInput type="password" name="confirmPassword" label="Confirm Password" handleChange={this.handleChange} value={this.state.confirmPassword} required  />


                   
                   <div className='buttons'>
                        <CustomButton type="submit">Sign up</CustomButton>
                   </div>
               </form>
            </div>
        )
    }

 }

  export default Sigup;