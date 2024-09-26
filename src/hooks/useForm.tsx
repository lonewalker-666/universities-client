import { useCallback, useState } from "react";

interface InputObject {
  value: string | number | null;
  valid: boolean;
  validationRules: Array<any>;
  maxLength: number;
  errorMessage: string;
}

interface FormProps {
  [key: string]: InputObject;
}

interface FieldsParams {
  [key: string]: any;
}

const useForm = (formProps: FormProps) => {
  const [form, setForm] = useState(formProps);

  const isInputFieldValid = (inputField: any) => {
    for (const rule of inputField.validationRules) {
      if (!rule.validate(inputField.value, form)) {
        inputField.errorMessage = rule.message;
        return false;
      }
    }
    return true;
  };

  const setInputValue = (name: string, value: any) => {
    const inputObj = { ...form[name] };
    // update value

    if (typeof inputObj?.value === "string") {
      inputObj.value =
        value && value.length >= inputObj.maxLength
          ? value.slice(0, inputObj.maxLength)
          : value;
    } else inputObj.value = value;
    // update input field's validity
    const isValidInput = isInputFieldValid(inputObj);
    // if input is valid and it was previously set to invalid
    // set its valid status to true
    if (isValidInput) {
      inputObj.valid = true;
    } else inputObj.valid = false;
    setForm({ ...form, [name]: inputObj });
  };

  const isFormValid = useCallback(() => {
    let isValid = true;
    const arr: any = Object.values(form);

    for (let i = 0; i < arr.length; i++) {
      if (!arr[i].valid) {
        isValid = false;
        break;
      }
    }

    return isValid;
  }, [form]);

  const isValid = isFormValid();

  const setFormFields = (fields: FieldsParams) => {
    Object.keys(fields).map((key: any) => {
      setInputValue(key, fields[key]);
    });
  };

  return { isValid, form, setInputValue, setForm, setFormFields };
};

export default useForm;
