import React, {Component} from 'react';
import './signin.styles.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';


class Sigin extends Component {
constructor(){
    super();

    this.state = {
        email: '',
        password:''
    }
}

handleSubmit = (event) =>{
    event.preventDefault();
    this.setState({email:'', password:''});

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

                   <CustomButton type="submit">Sign in</CustomButton>
                   
               </form>
            </div>
        )
    }

 }

  export default Sigin;