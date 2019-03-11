import React, { Fragment } from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const formUtil = {
  topics: [
    {
      value: "product",
      name: "Product request",
    },          
    {
      value: "showroom",
      name: "Showroom",
    },
    {
      value: "technical",
      name: "Technical",
    },
    {
      value: "applicatory",
      name: "Applicatory",
    },
    {
      value: "other",
      name: "Other",
    },
  ],
}

export default formUtil;