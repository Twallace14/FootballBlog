import React from 'react';
import './FormInputStyles.scss';

const FormInput = ({ handlechange, label, ...otherProps }) => (
    <div className="group">
        <input placeholder={label} className='form-input' onChange={handlechange} {...otherProps} required minLength="2" />
      
    </div>
);

export default FormInput;
