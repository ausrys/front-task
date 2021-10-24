import React, { useEffect } from "react";
import { TextField } from "@material-ui/core";
import { useField, useFormikContext } from "formik";

const TextFieldWrapper = ({
    name,
    ratio,
    ...otherProps
}) => {
    const {
        values: {firstInput, secondInput},
        touched,
        setFieldValue,
    } = useFormikContext();
    const [field, mata] = useField(name);
    useEffect(() => {
        if (
            touched.firstInput
        )
        {
            setFieldValue('secondInput', (firstInput / ratio).toFixed(6) )
        }


    }, [firstInput, secondInput, touched.firstInput, setFieldValue, name.firstInput,ratio])
    const configTextField = {
        ...field,
        ...otherProps,
        variant: 'outlined',
        fullWidth: true,
    };

    if(mata && mata.touched && mata.error) {
        configTextField.error = true;
        configTextField.helperText = mata.error;
    }
    return(
        <TextField {...configTextField}>
            

        </TextField>
    );
};

export default TextFieldWrapper;
