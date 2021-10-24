import { TextField, MenuItem, Link } from "@material-ui/core";
import { useField, useFormikContext } from "formik";

const SelectWrapper  = ({
    name,
    options,
    onValueChange, 
    ...otherProps
}) => {
    
    const [field, meta] = useField(name);
    const {setFieldValue} = useFormikContext();
    const handleChange = event => {
        const {value} = event.target;
        setFieldValue(name,value);
        if (event.target.name !== 'payment') onValueChange(event)
        
    };
    const configSelect = {
        ...field,
        ...otherProps,
        select: true,
        ...meta,
        variant: 'outlined',
        onChange: handleChange,
    }
    return(
         <TextField {...configSelect}>
             {options.map((item,pos) => {
                 return (
                    
                    <MenuItem key = {pos} value = {item}>
                        {item}
                    </MenuItem>
                 );
             })}
         </TextField>
    );
}

export default SelectWrapper;

