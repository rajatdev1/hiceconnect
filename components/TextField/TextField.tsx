import React from 'react';
import TextField from '@mui/material/TextField';

export interface CustomTextFieldProps {
  name?: string;
  type?: string;
  value?: string;
  asterisk?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  // onFocus: (event: React.FocusEvent<HTMLInputElement, Element>)=>void,
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
  error?: boolean;
  helperText?: string;
  disabled?: boolean;
  label?: string;
  required?: boolean;
  placeholder?: string;
  fullWidth?:boolean;
  className?:any;
  // styles?:{}
}

const CustomTextField: React.FC<CustomTextFieldProps> = ({
  name,
  type,
  value,
  asterisk,
  onFocus,
  onChange,
  onBlur,
  error,
  helperText,
  disabled,
  label,
  required,
  placeholder,
  fullWidth,
  className,
  ...props
}) => {

  const displayLabel = asterisk ? `${label} *` : label;
  return (
    <TextField
      name={name}
      type={type}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      onFocus={onFocus}
      error={error}
      helperText={helperText}
      disabled={disabled}
      {...props}
      // label={label}
      label={displayLabel}
      required={required}
      placeholder={placeholder}
      fullWidth={fullWidth}
      className={className}
      style= {{marginBottom: '15px', backgroundColor:'white'}}
    />
  );
};

export { CustomTextField };