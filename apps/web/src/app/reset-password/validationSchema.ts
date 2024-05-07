import * as Yup from 'yup';

export const validationSchema = Yup.object({
  password: Yup.string()
    .required('please enter your password')
    .min(8, 'Your Password is too short.'),
  confirmPassword: Yup.string()
    .required('Please retype your password')
    .oneOf([Yup.ref('password')], 'Your Passwords do not match.'),
});
