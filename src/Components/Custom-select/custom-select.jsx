
import React from "react";
import { MultiSelect } from "react-multi-select-component";

const CustomSelect = ({ options, selected, selectedVal, checked }) => {
  return (
    <>
      <div>
        <MultiSelect
          options={options}
          value={selected}
          onChange={selectedVal}
          labelledBy="Select"
          disableSearch={!checked}
        />
      </div>
    </>
  );
};
export default CustomSelect;
