import React, { useState, ChangeEvent } from "react";
import Link from "next/link";
import AccentInput from "../common/Form/AccentInput";
import ThemeButton from "../common/Buttons/ThemeButton";
import AuthImg from "../../../public/images/Auth.jpg";
import Image from "next/image";

const SignUpForm: React.FC = () => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Handle the sign-in logic here, perhaps sending a request to your server
    console.log("Submitted with Email:", email, "Password:", password);
  };

  return (
    <div className="flex items-center min-h-screen bg-gray-100">
      <div className="bg-white max-h-[864px] w-full flex rounded-lg shadow-lg">
        <div className="w-[768px] ">
          <Image width={768} height={864} src={AuthImg} alt="this is img" />
        </div>
        <div className="w-[768px] flex flex-col p-2 items-center justify-start h-full">
          <h2 className="text-2xl font-bold mb-2  text-graydark">Sign Up</h2>
          {/* <div className='flex gap-3 items-center mb-20 justify-center'>
                        <ThemeButton
                            text={"Google"}
                            onClick={""}
                            isAccent={false}
                        />
                        <ThemeButton
                            text={"Facebook"}
                            onClick={""}
                            isAccent={false}
                        />
                    </div> */}
          <form
            onSubmit={handleSubmit}
            className="p-4 space-y-4 w-full flex flex-col items-center "
          >
            <AccentInput
              title="Name"
              placeholder="Name"
              value={name}
              onChange={setName}
            />
            <AccentInput
              title="Username"
              placeholder="Username"
              value={username}
              onChange={setUsername}
            />
            <AccentInput
              title="Email"
              placeholder="E-mail"
              value={email}
              onChange={setEmail}
            />
            <AccentInput
              title="Phone Number"
              placeholder="Phone Number"
              value={contact}
              onChange={setContact}
            />
            <AccentInput
              title="Password"
              placeholder="Password"
              value={password}
              onChange={setPassword}
            />
            <div className="flex flex-col items-center justify-around">
              <ThemeButton
                text={"Sign Up"}
                onClick={handleSubmit}
                isAccent={true}
              />
            </div>
          </form>
          <span className=" text-graydark">
            I already have an account?{" "}
            <Link href={"/Auth/sign-in"}>Sign In</Link>
          </span>
          I
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;
