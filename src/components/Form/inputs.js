import React from 'react';
import {
  TextField,
} from '@material-ui/core';
import { TextValidator, SelectValidator } from 'react-material-ui-form-validator';

const Input = ({classes, value, name, label, onChange, select, children}) => {
  if (!select) return (
    <TextField
      variant="outlined"
      id="standard-company"
      label={label}
      className={classes.formControl}
      value={value}
      onChange={onChange(name)}
      margin="normal"
      name={name}
      InputLabelProps={{
        classes: {
          root: classes.cssLabel,
          focused: classes.cssFocused,
        },
      }}
      InputProps={{
        classes: {
          root: classes.cssOutlinedInput,
          focused: classes.cssFocused,
          notchedOutline: classes.notchedOutline,
        },
      }}
    />
  )

  return (
    <TextField
      variant="outlined"
      id="standard-company"
      label={label}
      select
      className={classes.formControl}
      value={value}
      onChange={onChange}
      margin="normal"
      name={name}
      InputLabelProps={{
        classes: {
          root: classes.cssLabel,
          focused: classes.cssFocused,
        },
      }}
      InputProps={{
        classes: {
          root: classes.cssOutlinedInput,
          focused: classes.cssFocused,
          notchedOutline: classes.notchedOutline,
        },
      }}
    >
    {children}
    </TextField>
  )
};

const RequiredInput = ({classes, value, name, label, onChange, validators, errorMessages}) => (
  <TextValidator
    variant="outlined"
    id="standard-company"
    label={label}
    className={classes.formControl}
    value={value}
    onChange={onChange(name)}
    margin="normal"
    name={name}
    validators={validators}
    errorMessages={errorMessages}
    InputLabelProps={{
      classes: {
        root: classes.cssLabel,
        focused: classes.cssFocused,
      },
    }}
    InputProps={{
      classes: {
        root: classes.cssOutlinedInput,
        focused: classes.cssFocused,
        notchedOutline: classes.notchedOutline,
      },
    }}
  />
);

const ReqSelect = ({classes, value, name, label, onChange, validators, errorMessages, children}) => (
  <SelectValidator
    variant="outlined"
    value={value}
    name={name}
    label={label}
    onChange={onChange}
    validators={validators}
    errorMessages={errorMessages}
    className={classes.formControl}
    InputLabelProps={{
      classes: {
        root: classes.cssLabel,
        focused: classes.cssFocused,
      },
    }}
    InputProps={{
      classes: {
        root: classes.cssOutlinedInput,
        focused: classes.cssFocused,
        notchedOutline: classes.notchedOutline,
      },
    }}
  >
    {children}
  </SelectValidator>
)

export {
  Input,
  RequiredInput,
  ReqSelect,
};
