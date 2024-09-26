'use client'
import React from 'react'
import { PhoneInput } from "@/components/phone-input"
import { useFormFields } from "@/core/hooks/useFormFields"
import { useState, useTransition } from "react"
import { signUpSchema, SignUpValues } from "@/lib/validation"
import LoadingButton from "@/components/loading-button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { register } from './actions'
import { PasswordInput } from '@/components/password-input'

export default function RegisterForm() {
    const { formFields, handleFieldChange, resetFields, validateForm, errors } = useFormFields<SignUpValues>({
        email: "",
        name: "",
        password: "",
        confirm_password: "",
        phone: ""
    });
    const [error, setError] = useState<string>();
    const [phoneNumber, setPhoneNumber] = useState("");

    const [isPending, startTransition] = useTransition();

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // Handle form submission

        const data: SignUpValues = {
            ...formFields,
            phone: phoneNumber
        }
        setError(undefined);
        const validationErrors = validateForm(data, signUpSchema)
        if (Object.keys(validationErrors).length === 0) {
            console.log('Form is valid. Submitting:', data);

            // Submit the form data
            startTransition(async () => {
                const { error } = await register(data);
                if (error) setError(error);
            });
        }
        resetFields()
    };
    return (
        <>
            <form className='register-forms' onSubmit={handleSubmit}>
                <div className="grid w-full max-w-sm items-center gap-1.5 pt-2">
                    <Label htmlFor="name">User Name</Label>
                    <Input type="text" name="name" placeholder="User Name" className="border-solid" value={formFields.name} onChange={handleFieldChange} />
                    {errors.name && <Label className="text-destructive">{errors.name[0]}</Label>}
                </div>
                <div className="grid w-full max-w-sm items-center gap-1.5 pt-2 ">
                    <Label htmlFor="email">Email</Label>
                    <Input type="email" name="email" placeholder="Email" className="border-solid" value={formFields.email} onChange={handleFieldChange} />
                    {errors.email && <Label className="text-destructive">{errors.email[0]}</Label>}
                </div>
                <div className="grid w-full max-w-sm items-center gap-1.5 pt-2 ">
                    <Label htmlFor="phone">Phone Number</Label>
                    <PhoneInput className="border border-solid rounded-md border-input" initialValueFormat="national" defaultCountry={'VN'} name="phone" placeholder="Phone Number" value={phoneNumber} onChange={setPhoneNumber} />
                    {errors.phone && <Label className="text-destructive">{errors.phone[0]}</Label>}
                </div>
                <div className="grid w-full max-w-sm items-center gap-1.5 pt-2 ">
                    <Label htmlFor="password">Password</Label>
                    <PasswordInput name="password" placeholder="Password" className="border-solid outline-none" value={formFields.password} onChange={handleFieldChange} />
                    {errors.password && <Label className="text-destructive">{errors.password[0]}</Label>}
                </div>
                <div className="grid w-full max-w-sm items-center gap-1.5 pt-2 ">
                    <Label htmlFor="confirm_password">Confirm Password</Label>
                    <PasswordInput name="confirm_password" placeholder="Confirm Password" className="border-solid outline-none" value={formFields.confirm_password} onChange={handleFieldChange} />
                    {errors.confirm_password && <Label className="text-destructive">{errors.confirm_password[0]}</Label>}
                </div>
                <div className="grid w-full max-w-sm items-center gap-1.5 pt-4">
                    <LoadingButton loading={isPending} type="submit" className="w-full">
                        Sign up
                    </LoadingButton>
                    {error ? <Label className="text-destructive">{error}</Label> : null}
                </div>
            </form></>
    )
}
