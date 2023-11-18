import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { SelectProps as MuiSelectProps } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { SxProps } from '@mui/material';

export interface NewSelectOptionProps {
  options: Array<{ value: string; label: string }>;
  // label: string;
  label: React.ReactNode
  value: string; // Controlled value
  helperText?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  id?: string;
  name?: string;
  style?: React.CSSProperties;
  SelectProps?: Partial<MuiSelectProps>;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
  // placeholder:String;
  // displayEmpty:String,
  // disabled:any,
  sx?: SxProps;
  required?: boolean;
  error?: boolean;
  // hidden:boolean,
  className?: string; // Additional className prop for styling
  // Any other props for TextField can be added here

}

const NewSelectOption: React.FC<NewSelectOptionProps> = ({
  options,
  label,
  value,
  onChange,
  id = 'outlined-select-field',
  name = 'select-field',
  style,
  className,
  // displayEmpty,
  // placeholder,
  SelectProps,
  // disabled,
  // hidden,
  required,
  helperText,
  error,
  onBlur,
  onFocus,

  ...otherProps // Capture any other additional props
}) => {
  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': {  width: ' 100ch', ...style },
        
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        id={id}
        InputLabelProps={{
          shrink: true, // This will make the label always appear on top
        }}
        select
        label={label}
        value={value}
        // placeholder={placeholder}
        onChange={onChange}
        name={name}
        className={className}
        // disabled={disabled}
        // hidden={hidden}
        error={error}
        required={required}
        helperText={helperText}
        onFocus={onFocus}
        onBlur={onBlur}
        SelectProps={{
          displayEmpty: true,
          ...otherProps, // ensure any additional SelectProps are included
        }}
        {...otherProps} // Spread any additional props here
      >
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
    </Box>
  );
};

export default NewSelectOption;
