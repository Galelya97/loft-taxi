import InputMask from "react-input-mask";
import { TextField } from "@material-ui/core";

const CustomInput = ({
  mask,
  value,
  disabled = false,
  maskChar = " ",
  ...rest
}) => (
  <InputMask
    mask={mask}
    value={value}
    disabled={disabled}
    maskChar={maskChar}
    {...rest}
  >
    {(prop) => <TextField {...prop} />}
  </InputMask>
);

export default CustomInput;
