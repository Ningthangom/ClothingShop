import React from 'react';
import './form-input.styles.scss';

   ///* all of  otherProps will end up being all the props(such as email, passwords, etc)
               // that are passed in sign-in-sign-up component    */}
  //    {/* as for lable prop we will put it in a condition 
   //  as we are not sure if we need it or not */}


const FormInput = ({handelChange, label, ...otherProps}) => ( 
        <div className = "group">
         
          <input className ="form-input" OnChange={handelChange} {...otherProps}/>
      {
          label ? 
          (<label className = {`${otherProps.value.length? 'shrink' : '' }  form-input-label`}
     
          > {label}</label>)
          : null
      }
        </div>
)

export default FormInput;