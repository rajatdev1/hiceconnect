

import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export interface NewTextFieldProps {
  name: string;
  label: string;
  placeholder: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  helperText?: string;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
  error?: boolean;
  fullWidth?:boolean;
  className?:any;
  sx?:object;
}

const NewTextField: React.FC<NewTextFieldProps> = ({
  name,
  label,
  placeholder,
  value,
  onChange,
  required,
  helperText,
  error,
  onFocus,
  onBlur,
  className,
  sx
}) => {
  // Function to create label with red asterisk if required
  const createLabel = () => (
    <>
      {label}
      {required && <span style={{ color: 'red' }}>*</span>}
    </>
  );

  return (
    <Box
      component="form"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        // m: 3,
      
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        name={name}
        label={createLabel()}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        InputLabelProps={{
          shrink: true,
        }}
        onBlur={onBlur}
        onFocus={onFocus}
        error={error}
        className={className}
        // required={required}
        helperText={helperText}
        sx={sx}
        // style={{width:'100%'}}
      />
      
    </Box>
  );
};

export default NewTextField;



