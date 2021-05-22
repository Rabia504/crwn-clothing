import React from 'react';
import './custom-button.styles.scss';



 const CustomButton = ({children, isGoogleSignin, ...OtherProps}) =>(

    <button className= {`${isGoogleSignin ? 'google-sign-in' : ''} custom-button`} {...OtherProps}>
        {children}
    </button>
        

  );

  export default CustomButton;