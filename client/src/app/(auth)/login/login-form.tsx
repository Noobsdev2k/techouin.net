'use client'
import { useFormFields } from '@/core/hooks/useFormFields';
import { loginSchema, LoginValues } from '@/lib/validation';
import React, { useState, useTransition } from 'react'
import { login } from './actions';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import LoadingButton from '@/components/loading-button';
import { PasswordInput } from '@/components/password-input';

export default function LoginForm() {
    const { formFields, handleFieldChange, resetFields, validateForm, errors } = useFormFields<LoginValues>({
        email: '',
        password: '',
    });
    const [error, setError] = useState<string>();

    const [isPending, startTransition] = useTransition();

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // Handle form submission
        setError(undefined);
        const validationErrors = validateForm(formFields, loginSchema)
        if (Object.keys(validationErrors).length === 0) {
            console.log('Form is valid. Submitting:', formFields);
            // Submit the form data
            startTransition(async () => {
                const { error } = await login(formFields);
                if (error) setError(error);
            });
        }
        resetFields()
    };
    return (
        <>
            <form className='login-forms' onSubmit={handleSubmit}>
                <div className="grid w-full max-w-sm items-center gap-1.5 pt-4">
                    <Label htmlFor="email">Email</Label>
                    <Input type="email"
                        name="email"
                        value={formFields.email}
                        onChange={handleFieldChange}
                        placeholder="Email" className="border-solid" />
                    {errors.email && <Label className="text-destructive">{errors.email[0]}</Label>}

                </div>
                <div className="grid w-full max-w-sm items-center gap-1.5 pt-4">
                    <Label htmlFor="password">Password</Label>
                    <PasswordInput
                        name="password"
                        value={formFields.password}
                        onChange={handleFieldChange}
                        placeholder="Password" className="border-solid" />
                    {errors.password && <Label className="text-destructive">{errors.password[0]}</Label>}
                </div>
                <div className="grid w-full max-w-sm items-center gap-1.5 pt-6">
                    <LoadingButton loading={isPending} type="submit" className="w-full">
                        Log in
                    </LoadingButton>
                    {error ? <Label className="text-destructive">{error}</Label> : null}
                </div>
            </form>
        </>
    )
}
