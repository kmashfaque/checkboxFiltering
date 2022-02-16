import React, { Fragment, useState } from "react";
import { Checkbox } from "@material-ui/core";

const brand = [
  {
    _id: 1,
    name: "Samsung",
  },
  {
    _id: 2,
    name: "Apple",
  },
  {
    _id: 3,
    name: "Vivo",
  },
  {
    _id: 4,
    name: "Google",
  },
  {
    _id: 5,
    name: "Xiaomi",
  },
  {
    _id: 6,
    name: "Nokia",
  },
];
const CheckBox = (props) => {
  const [checked, setChecked] = useState([]);
  const [brandName, setBrandName] = useState([]);

  const handleToggle = (value, name) => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);

    const currentBrandName = brandName.indexOf(name);
    const newBrandName = [...brandName];

    if (currentBrandName === -1) {
      newBrandName.push(name);
    } else {
      newBrandName.splice(currentBrandName, 1);
    }
    setBrandName(newBrandName);

    props.handleFilters(newChecked, newBrandName);
  };

  return brand.map((value, index) => (
    <Fragment key={index}>
      <Checkbox
        checked={checked.indexOf(value._id) === -1 ? false : true}
        onChange={() => handleToggle(value._id, value.name)}
      />
      <span>{value.name}</span>
    </Fragment>
  ));
};

export default CheckBox;
