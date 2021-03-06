import React, { useState } from "react";
import CustomSelect from "./Custom-select/custom-select";
import { colorOptions, updatedComponents } from "./Custom-select/data";
import Checkbox from "@mui/material/Checkbox";
import { Button } from "@mui/material";

const Home = () => {
  const [data, setData] = useState(colorOptions);
  const [checked, setChecked] = React.useState(true);
  const [checkedMulti, setCheckedMulti] = React.useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  const handleMultiSelect = (event) => {
    setCheckedMulti(event.target.checked)
  }


  const changeOptionsData = () => {
    setData((prev) =>
      prev === updatedComponents ? colorOptions : updatedComponents
    );
  };

  return (
    <div>
      <h3>Custom react-select component</h3>
      <div className="select-option-wrapper">
        <Button type="button" onClick={changeOptionsData}>
          Change Data
        </Button>
        <p className="selected-option">Searchable </p>
        <Checkbox
          checked={checked}
          onChange={handleChange}
          inputProps={{ "aria-label": "controlled" }}
        />
        <p className="selected-option">Multi-Select </p>
        <Checkbox
       
          checked={checkedMulti}
          onChange={handleMultiSelect}
          inputProps={{ "aria-label": "controlled" }}
        />
      </div>
      <CustomSelect
        options={data}
        checked={checked}
        multiChecked = {checkedMulti}
      />
    </div>
  );
};

export default Home;
