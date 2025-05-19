import { TextFields } from "@mui/icons-material";
import { TextField } from "@mui/material";

const CustomInput = ({ label, name, type="text", multiline = false, rows = 1, value, onChange, readOnly = false, placeholder = "" }) => {
    return(
        <TextField
            fullWidth
            name={ name }
            label={ label }
            type={ type }
            multiline={ multiline }
            rows={ rows }
            value={ value }
            onChange={ onChange }
            margin="normal"
            inputProps={{
                readOnly,
                placeholder,
            }}
        />
    );
}

export default CustomInput;