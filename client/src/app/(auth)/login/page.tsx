'use client'
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { AiFillFacebook, AiOutlineGoogle } from "react-icons/ai"
import Link from "next/link"
import LoginForm from "./login-form"
import { GoogleAuthProvider, FacebookAuthProvider, signInWithPopup, getAuth } from 'firebase/auth'
import { app } from "@/config/firebase.config"
import { useState, useTransition } from "react"
import { googleLogin } from "./actions"
import LoadingButton from "@/components/loading-button"

function LoginPage() {
    const [error, setError] = useState<string>();

    const [isPending, startTransition] = useTransition();
    const handleLoginGoogle = async () => {
        const provider = new GoogleAuthProvider()
        const auth = getAuth(app)
        const result = await signInWithPopup(auth, provider)
        setError(undefined);
        if (result) {
            const formData = {
                name: result.user.displayName,
                avatar: result.user.photoURL,
                phone: result.user.phoneNumber,
                email: result.user.email,
                token: result.user.refreshToken
            }
            startTransition(async () => {
                const { error } = await googleLogin(formData);
                if (error) setError(error);
            });
        }

    }
    console.log(error);

    return (
        <div className="flex items-center justify-center w-full h-screen">
            <div className="login">
                <div>
                    <h1 className="flex items-center text-2xl font-bold">Login Page.<br /> Welcome to <Link href={'/'}><Image src={'/logo.svg'} className="bg-cover" width={150} height={50} alt="logo" /></Link></h1>
                    <p className="py-3 text-sm text-gray-600">Don’t have an account?<Link href={'/register'} className="px-1 italic text-blue-600 transition-all duration-200 cursor-pointer focus:text-blue-700 hover:underline hover:text-blue-500">Create an account.</Link></p>
                </div>
                <LoginForm />
                <div className="w-full max-w-sm p-4">
                    <p className="flex justify-center text-sm text-gray-600">Did you forget your password?<a className="px-1 italic text-blue-600 cursor-pointer">Reset it now.</a></p>
                </div>
                <div className="my-7"><div className="relative"><div className="w-full border-t border-gray-300 border-solid" /><div className="absolute px-3 text-sm text-gray-500 transform -translate-x-1/2 bg-white left-1/2 -top-2">Or continue with</div></div></div>
                <div className="w-full max-w-sm login-socials">
                    <div className="pt-2">
                        <LoadingButton loading={isPending} type="button" onClick={handleLoginGoogle} className="flex items-center justify-start w-full" variant="destructive"><AiOutlineGoogle className="w-5 h-5" /><span className="w-full text-center"> Login with Google</span></LoadingButton>
                    </div>
                    <div className="pt-2">
                        <Button type="button" className="flex items-center justify-start w-full transition-all duration-150 bg-blue-500 hover:bg-blue-400"><AiFillFacebook className="w-5 h-5" /> <span className="w-full text-center"> Login with Facebook</span></Button>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default LoginPage