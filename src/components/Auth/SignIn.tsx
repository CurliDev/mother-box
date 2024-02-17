import React, { useState, ChangeEvent } from 'react';
import AccentInput from '../common/Form/AccentInput';
import ThemeButton from '../common/Buttons/ThemeButton';
import AuthImg from '../../../public/images/Auth.jpg'
import Image from 'next/image';
const SignInForm: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // Handle the sign-in logic here, perhaps sending a request to your server
        console.log('Submitted with Email:', email, 'Password:', password);
    };



    return (
        <div className="flex items-center min-h-screen bg-gray-100">
            <div className="bg-white h-[864] w-full flex rounded-lg shadow-lg">
                <div className='w-[768px] '>
                    <Image width={768} height={864} src={AuthImg} alt='this is img' />
                </div>
                <div className="w-[768px] flex flex-col p-10 items-center h-full">
                    <h2 className="text-2xl font-bold mb-20  text-graydark">Sign In</h2>
                    <div className='flex gap-3 items-center mb-20 justify-center'>
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
                    </div>
                    <form onSubmit={handleSubmit} className="p-8 space-y-4 w-full flex flex-col items-center ">
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
                            {/* <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700">Log in</button>
                        <a href="#" className="text-sm text-blue-600 hover:underline">Forgot password?</a> */}
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignInForm;
