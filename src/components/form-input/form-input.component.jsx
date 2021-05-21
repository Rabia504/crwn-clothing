import React from 'react';
import './form-input.styles.scss';



 const FormInput = ({handleChange, label, ...OtherProps}) =>(

         
    <div className='group'>
        {
            label? 
            (<label className={`${OtherProps.value.length ? 'shrink' : ''} form-input-label`}> {label}</label>)
            :null
        }
        <input className='form-input' onChange={handleChange} {...OtherProps} />
        
    </div>
        

  );

  export default FormInput;