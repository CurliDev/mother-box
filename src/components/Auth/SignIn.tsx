import React, { useState } from "react";
import AccentInput from "../common/Form/AccentInput";
import ThemeButton from "../common/Buttons/ThemeButton";
import ThemedSocialButton from "../common/Buttons/ThemedSocialButton";

import GoogleIcon from "@/statics/logos/google-icon-transparent.png";
import FacebookIcon from "@/statics/logos/facebook-icon-transparent.png";

const SignInForm: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Handle the sign-in logic here, perhaps sending a request to your server
    console.log("Submitted with Email:", email, "Password:", password);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="bg-white h-[864] w-[600px] flex rounded-sm shadow-lg">
        <div className="w-[768px] flex flex-col p-10 items-center h-full">
          <h2 className="text-2xl font-bold mb-10 text-graydark">Sign In</h2>
          <div className="flex gap-3 items-center  justify-center">
            <ThemedSocialButton
              text={"Google"}
              onClick={""}
              icon={GoogleIcon}
            />
            <ThemedSocialButton
              text={"Facebook"}
              onClick={""}
              icon={FacebookIcon}
            />
          </div>
          <form
            onSubmit={handleSubmit}
            className="p-8 space-y-4 w-full flex flex-col items-center "
          >
            <AccentInput
              title="Email"
              placeholder="E-mail"
              value={email}
              onChange={setEmail}
            />
            <AccentInput
              title="Password"
              placeholder="Password"
              value={password}
              onChange={setPassword}
            />
            <div className="flex items-center justify-between">
              <ThemeButton
                text={"Sign In"}
                onClick={handleSubmit}
                isAccent={true}
              />
            </div>
            <div className="flex items-center">
              <div className=" flex items-center px-4 py-2 bg-sky-500 text-black rounded hover:bg-blue-700">
                <p>Don't have an account?</p>
                <a className="text-sky-100 cursor-pointer ml-2">Signup</a>
              </div>
              <a href="#" className="text-sm text-blue-600 hover:underline">
                Forgot password?
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignInForm;
