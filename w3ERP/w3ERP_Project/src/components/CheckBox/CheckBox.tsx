import FormControlLabel from "@mui/material/FormControlLabel";
import { NeonCheckbox } from "./CheckBoxStyles";

export function CheckboxNeon() {
  return (
    <div>
      <FormControlLabel
        control={
          <NeonCheckbox disableRipple checkedIcon={<span />} icon={<span />} />
        }
        label={"Lembrar-me"}
      />
      
    </div>
  );
}