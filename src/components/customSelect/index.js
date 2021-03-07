import React from "react";
import s from "./styles.module.css";
import ClearIcon from "@material-ui/icons/Clear";
import { FormControl, InputLabel, MenuItem, Select } from "@material-ui/core";

const CustomSelect = ({
  className,
  label,
  clearable,
  onClear,
  options = [],
  value,
  ...rest
}) => {
  return (
    <FormControl className={`${s.customSelect} ${className || ""}`}>
      <InputLabel>{label}</InputLabel>
      <Select value={value} {...rest}>
        {options.map((item) => (
          <MenuItem key={item.value} value={item.value}>
            {item.label}
          </MenuItem>
        ))}
      </Select>
      {clearable && value && onClear ? (
        <ClearIcon className={s.cross} onClick={onClear} />
      ) : null}
    </FormControl>
  );
};

export default CustomSelect;
