import React from "react";
import s from "./styles.module.css";
import ClearIcon from "@material-ui/icons/Clear";
import { FormControl, InputLabel, MenuItem, Select } from "@material-ui/core";

const CustomSelect = ({
  className,
  label,
  clearable,
  onChange,
  options = [],
  value,
  ...rest
}) => {
  const onClearClick = (e) => {
    onChange({ target: { value: "" } });
  };

  return (
    <FormControl className={`${s.customSelect} ${className || ""}`}>
      <InputLabel>{label}</InputLabel>
      <Select value={value} onChange={onChange} {...rest}>
        {options.map((item, index) => (
          <MenuItem key={index} value={item.value}>
            {item.label}
          </MenuItem>
        ))}
        3
      </Select>
      {clearable && value ? (
        <ClearIcon className={s.cross} onClick={onClearClick} />
      ) : null}
    </FormControl>
  );
};

export default CustomSelect;
