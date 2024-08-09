'use client'
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { AiFillFacebook, AiOutlineFacebook, AiOutlineGoogle } from "react-icons/ai"
import Link from "next/link"
import { PasswordInput } from "@/components/password-input"

function LoginPage() {

    return (
        <div className="flex items-center justify-center w-full h-screen">
            <div  >
                <div>
                    <h1 className="flex items-center text-2xl font-bold">Login Page.<br /> Welcome to <Link href={'/'}><Image src={'/logo.svg'} className="bg-cover" width={150} height={50} alt="logo" /></Link></h1>
                    <p className="py-3 text-sm text-gray-600">Don’t have an account?<Link href={'/register'} className="px-1 italic text-blue-600 transition-all duration-200 cursor-pointer focus:text-blue-700 hover:underline hover:text-blue-500">Create an account.</Link></p>
                </div>
                <div className='login-forms'>
                    <div className="grid w-full max-w-sm items-center gap-1.5 pt-4">
                        <Label htmlFor="email">Email</Label>
                        <Input type="email" id="email" placeholder="Email" className="border-solid" />
                    </div>
                    <div className="grid w-full max-w-sm items-center gap-1.5 pt-4">
                        <Label htmlFor="password">Password</Label>
                        <PasswordInput id="password" placeholder="Password" className="border-solid" />
                    </div>
                    <div className="grid w-full max-w-sm items-center gap-1.5 pt-6">
                        <Button>Login</Button>
                    </div>
                </div>
                <div className="w-full max-w-sm p-4">
                    <p className="flex justify-center text-sm text-gray-600">Did you forget your password?<a className="px-1 italic text-blue-600 cursor-pointer">Reset it now.</a></p>
                </div>
                <div className="my-7"><div className="relative"><div className="w-full border-t border-gray-300 border-solid" /><div className="absolute px-3 text-sm text-gray-500 transform -translate-x-1/2 bg-white left-1/2 -top-2">Or continue with</div></div></div>
                <div className="w-full max-w-sm login-socials">
                    <div className="pt-2">
                        <Button type="button" className="flex items-center justify-start w-full" variant="destructive"><AiOutlineGoogle className="w-5 h-5" /><span className="w-full text-center"> Login with Google</span></Button>
                    </div>
                    <div className="pt-2">
                        <Button type="button" className="flex items-center justify-start w-full transition-all duration-150 bg-blue-500 hover:bg-blue-400"><AiFillFacebook className="w-5 h-5" /> <span className="w-full text-center"> Login with Facebook</span></Button>
                    </div>
                </div>
                <div>

                </div>
            </div>
        </div >
    )
}

export default LoginPage