'use client';

import React from 'react';
import { HTMLInputTypeAttribute } from 'react';
import { FormikHandlers } from 'formik';
import { Label } from './ui/label';
import { Input } from './ui/input';

interface FormInputProps {
  name: string;
  label: string;
  type: HTMLInputTypeAttribute;
  value: string;
  placeholder: string;
  isError: boolean;
  error: string | undefined;
  handleChange: FormikHandlers['handleChange'];
  handleBlur: FormikHandlers['handleBlur'];
}

const FormInput: React.FC<FormInputProps> = ({
  name,
  label,
  type = 'text',
  placeholder,
  handleChange,
  handleBlur,
  value,
  isError,
  error,
}) => {
  return (
    <div className="flex flex-col space-y-1.5">
      <Label htmlFor={name} className={isError ? 'text-red-500' : ''}>
        {label}
      </Label>
      <Input
        name={name}
        placeholder={placeholder}
        type={type}
        onChange={handleChange}
        onBlur={handleBlur}
        value={value}
      />
      {isError ? <div className="text-xs text-red-500">{error}</div> : null}
    </div>
  );
};

export default FormInput;
