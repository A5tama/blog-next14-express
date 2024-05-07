'use client';

import useLogin from '@/hooks/api/auth/useLogin';
import { validationSchema } from './validationSchema';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import FormInput from '@/components/FormInput';
import { Button } from '@/components/ui/button';
import { useFormik } from 'formik';
import { useRouter } from 'next/navigation';

const Login = () => {
  const router = useRouter();
  const { login } = useLogin();

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        email: '',
        password: '',
      },
      validationSchema,
      onSubmit: (values) => {
        login(values);
      },
    });

  return (
    <main className="container mx-auto h-[90vh] px-4">
      <div className="mt-40 flex justify-center">
        <Card className="w-[450px]">
          <CardHeader>
            <CardTitle className="text-center text-3xl text-primary">
              Login
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit}>
              <div className="grid w-full items-center gap-4">
                {/* EMAIL Start */}
                <FormInput
                  name="email"
                  type="email"
                  label="Email"
                  placeholder="Email"
                  value={values.email}
                  error={errors.email}
                  isError={!!touched.email && !!errors.email}
                  handleBlur={handleBlur}
                  handleChange={handleChange}
                />
                {/* EMAIL END */}

                {/* PASSWORD */}
                <FormInput
                  name="password"
                  type="password"
                  label="Password"
                  placeholder="Password"
                  value={values.password}
                  error={errors.password}
                  isError={!!touched.password && !!errors.password}
                  handleBlur={handleBlur}
                  handleChange={handleChange}
                />
                {/* PASSWORD END */}
                <p
                  className="cursor-pointer text-end text-xs"
                  onClick={() => router.push('/forgot-password')}
                >
                  Forgot Password ?
                </p>
              </div>
              <Button className="mt-6 w-full">Login</Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </main>
  );
};

export default Login;
