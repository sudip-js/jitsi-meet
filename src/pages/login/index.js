import React, { useState } from "react";
import { EmailIcon, Logo, PasswordIcon } from "../../assets/icons";
import { TextInput } from "../../components";
import Button from "../../components/formComponents/Button";
import PasswordInput from "../../components/formComponents/PasswordInput";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import { auth } from "../../config/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

const initialValues = {
  email: "",
  password: "",
};

const validationSchema = yup.object({
  email: yup.string().required("Email is required"),
  password: yup.string().required("Password is required"),
});

const Login = () => {
  const [loading, setLoading] = useState(false);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: initialValues,
    // resolver: yupResolver(validationSchema),
    mode: "onBlur",
    reValidateMode: "onChange",
  });

  const onSubmitLogin = async (data) => {
    setLoading(true);
    const { email, password } = data;
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log("LOGIN ERROR:", error);
    }
  };

  return (
    <div className="bg-main h-[100vh] w-[100vw] flex justify-center items-center">
      <div className="bg-black min-w-[400px] min-h-[500px] px-10 py-10 flex flex-col gap-5 rounded-md">
        <div className="flex flex-col items-center justify-center">
          <Logo className="w-20 h-20 text-white cursor-pointer" />
          <h1
            className="text-white font-600 text-2xl
          "
          >
            Login
          </h1>
        </div>
        <form
          onSubmit={handleSubmit(onSubmitLogin)}
          className="w-[100%] flex flex-col gap-5"
        >
          <Controller
            name="email"
            control={control}
            render={({ field }) => (
              <TextInput
                {...field}
                placeholder="Email"
                icon={<EmailIcon className="text-2xl" />}
                error={errors?.email?.message}
              />
            )}
          />

          <Controller
            name="password"
            control={control}
            render={({ field }) => (
              <PasswordInput
                {...field}
                placeholder="Password"
                icon={<PasswordIcon className="text-2xl" />}
                error={errors?.password?.message}
              />
            )}
          />

          <Button
            type="submit"
            loading={loading}
            className="w-full bg-headerBtnActive hover:bg-white hover:text-black mt-2"
          >
            Login
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Login;
