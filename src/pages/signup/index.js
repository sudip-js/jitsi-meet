import React, { useState } from "react";
import {
  CallIcon,
  EmailIcon,
  FileIcon,
  Logo,
  PasswordIcon,
  UserIcon,
} from "../../assets/icons";
import { TextInput } from "../../components";
import Button from "../../components/formComponents/Button";
import PasswordInput from "../../components/formComponents/PasswordInput";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { FileInput } from "@mantine/core";
import { auth, db, storage } from "../../config/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";

const initialValues = {
  username: "",
  email: "",
  phone: "",
  password: "",
  confirmPassword: "",
  profileImage: null,
};

const validationSchema = yup.object({
  username: yup.string().required("Username is required"),
  email: yup.string().required("Email is required"),
  phone: yup.string().required("Phone is required"),
  password: yup.string().required("Password is required"),
  confirmPassword: yup.string().required("Confirm password is required"),
  profileImage: yup.string().required("Profile image is required").nullable(),
});

const Signup = () => {
  const [loading, setLoading] = useState(false);
  const {
    control,
    handleSubmit,
    formState: { errors },
    getValues,
    setValue,
  } = useForm({
    defaultValues: initialValues,
    // resolver: yupResolver(validationSchema),
    mode: "onBlur",
    reValidateMode: "onChange",
  });

  const onSubmitSignup = async (data) => {
    setLoading(true);
    const { username, email, phone, password, profileImage } = data;
    const profileImageRef = ref(
      storage,
      `profile-images/${profileImage?.name}`
    );
    const uploadTask = uploadBytesResumable(profileImageRef, profileImage);
    try {
      const result = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      if (result?.user) {
        console.log("result", result?.user);
        uploadTask.on(
          "state_changed",
          (snapshot) => {
            const progress =
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log("Upload is " + progress + "% done");
            switch (snapshot.state) {
              case "paused":
                console.log("Upload is paused");
                break;
              case "running":
                console.log("Upload is running");
                break;
            }
          },
          (error) => {
            console.log("Upload Image ERROR", error);
          },
          async () => {
            const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
            if (downloadURL) {
              const payload = {
                username,
                email,
                phone,
                password,
                profileImage: downloadURL,
                uuid: result?.user?.uid,
              };
              const userRef = doc(db, "users", result?.user?.uid);
              await setDoc(userRef, payload);
              setLoading(false);
            }
          }
        );
      }
    } catch (error) {
      setLoading(false);
      console.log("SIGNUP ERROR : ", error);
    }
  };

  return (
    <div className="bg-main h-[100vh] w-[100vw] flex justify-center items-center">
      <div className="bg-black min-w-[400px] h-min px-10 py-2 flex flex-col gap-1 rounded-md">
        <div className="flex flex-col items-center justify-center">
          <Logo className="w-20 h-20 text-white cursor-pointer" />
          <h1
            className="text-white font-600 text-2xl
          "
          >
            Create Account
          </h1>
        </div>
        <form
          onSubmit={handleSubmit(onSubmitSignup)}
          className="w-[100%] flex flex-col gap-1"
        >
          <Controller
            name="username"
            control={control}
            render={({ field }) => (
              <TextInput
                {...field}
                placeholder="Username"
                icon={<UserIcon className="text-2xl" />}
                error={errors?.username?.message}
              />
            )}
          />
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
            name="phone"
            control={control}
            render={({ field }) => (
              <TextInput
                {...field}
                placeholder="Phone"
                icon={<CallIcon className="text-2xl" />}
                error={errors?.phone?.message}
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
          <Controller
            name="confirmPassword"
            control={control}
            render={({ field }) => (
              <PasswordInput
                {...field}
                placeholder="Confirm Password"
                icon={<PasswordIcon className="text-2xl" />}
                error={errors?.confirmPassword?.message}
              />
            )}
          />
          <Controller
            name="profileImage"
            control={control}
            render={({ field }) => (
              <FileInput
                placeholder="Profile image"
                icon={<FileIcon className="text-2xl" />}
                multiple
                clearable
                sx={(theme) => ({
                  ".mantine-InputWrapper-label": {
                    color: theme.colors.greyText,
                    fontSize: ".900rem",
                    fontWeight: "600",
                    marginBottom: "5px",
                  },
                  ".mantine-FileInput-input": {
                    div: {
                      padding: `0px 15px`,
                      borderRadius: `50px`,
                      height: `30px`,
                      color: `${theme.colors.white}`,
                    },
                    "&.mantine-FileInput-invalid": {
                      border: `2px solid #fa5252`,
                      ".mantine-FileInput-placeholder": {
                        color: "#fa5252",
                      },
                    },
                    height: "3rem",
                    border: "none",
                    backgroundColor: `${theme.colors.darkGrey}`,
                    fontWeight: "400",
                    color: theme.colors.black,

                    "&:focus,&:focus-within": {
                      border: `1px solid ${theme.colors.blue}`,
                    },
                  },
                })}
                value={getValues("profileImage")}
                onChange={(file) => setValue("profileImage", file[0])}
              />
            )}
          />
          <Button
            type="submit"
            loading={loading}
            className="w-full bg-headerBtnActive hover:bg-white hover:text-black mt-2"
          >
            Signup
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
