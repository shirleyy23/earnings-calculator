import React, { useState, useEffect } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import {
  Button,
  TextField,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  FormHelperText,
  Typography,
} from '@material-ui/core';

import { GlobalState } from '../../GlobalContext';

interface Props {
  onSubmit: (amount: number, plan: string) => void;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    paragraph: {
      color: 'white',
      margin: '2rem 0',
    },
    button: {
      width: '100%',
      padding: theme.spacing(2),
      fontWeight: 'bold',
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
    formFields: {
      display: 'block',
      margin: '0 0 2rem',
      '& .MuiInputBase-root, & .MuiFormControl-root': {
        width: '100%',
      },
      '& .MuiInputLabel-root, & .MuiOutlinedInput-input, & .MuiSelect-icon, & label.Mui-focused': {
        color: 'white',
      },
      '& .MuiInput-underline:after': {
        borderBottomColor: 'white',
      },
      '& .MuiOutlinedInput-root': {
        '& fieldset': {
          borderColor: 'rgba(255,255,255,.8)',
        },
        '&:hover fieldset': {
          borderColor: 'white',
        },
        '&.Mui-focused fieldset': {
          borderColor: 'white',
        },
      },
    },
  })
);

const Form: React.FunctionComponent<Props> = ({ onSubmit }) => {
  const classes = useStyles();
  const { data } = GlobalState();
  const { amount, plan, updateData } = data;

  const [formError, setFormError] = useState(false);
  const [firstSubmit, setFirstSubmit] = useState(true);

  const handleChange = (e: React.ChangeEvent<any>): void => {
    const { name, value } = e.target;
    updateData(name, value);
  };

  const handleSubmit = (e: React.FormEvent): boolean => {
    e.preventDefault();
    firstSubmit && setFirstSubmit(false);
    if (!formError) {
      onSubmit(amount, plan);
      return true;
    }
    return false;
  };

  const validateForm = amount < 1 || plan === 'select plan' ? true : false;

  useEffect(() => {
    setFormError(validateForm);
  }, [validateForm]);

  return (
    <form onSubmit={handleSubmit} data-testid="Form">
      <Typography
        variant="subtitle1"
        component="p"
        className={classes.paragraph}
      >
        Fill in the form below to generate your monthly and yearly earnings
        based on the amount of products sold and the selected plan.
      </Typography>
      <FormControl className={classes.formFields}>
        <TextField
          error={!firstSubmit && amount < 1}
          id="amount"
          type="number"
          label="Amount"
          variant="outlined"
          value={amount}
          onChange={handleChange}
          inputProps={{
            'data-testid': 'amount',
          }}
          helperText={
            !firstSubmit && amount < 1 ? 'Please enter an amount' : null
          }
          name="amount"
        />
      </FormControl>
      <FormControl
        error={!firstSubmit && plan === 'select plan'}
        variant="outlined"
        className={`${classes.formControl} ${classes.formFields}`}
      >
        <InputLabel id="plan-select-label">Plan</InputLabel>
        <Select
          labelId="plan-select-label"
          id="plan-select"
          value={plan}
          onChange={handleChange}
          label="Plan"
          name="plan"
          inputProps={{
            'data-testid': 'plan',
            id: 'plan',
          }}
        >
          <MenuItem value="select plan">Select Plan</MenuItem>
          <MenuItem value="basic">Basic</MenuItem>
          <MenuItem value="premium">Premium</MenuItem>
        </Select>
        {!firstSubmit && plan === 'select plan' ? (
          <FormHelperText>Please select a plan</FormHelperText>
        ) : null}
      </FormControl>
      <Button
        type="submit"
        color="primary"
        variant="contained"
        className={classes.button}
        data-testid="submit-btn"
      >
        Calculate
      </Button>
    </form>
  );
};

export default Form;
