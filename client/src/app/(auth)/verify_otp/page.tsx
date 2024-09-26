'use client'
import { InputOTP, InputOTPGroup, InputOTPSlot } from '@/components/ui/input-otp'
import React from 'react'
import { verify_otp } from './action'
import LoadingButton from '@/components/loading-button'
import { Label } from '@/components/ui/label'

const Verify_OTP = ({ email = 'demo@hugoshoping.tech' }: any) => {
    const [value, setValue] = React.useState<string>("")
    const [isPending, startTransition] = React.useTransition();
    const [error, setError] = React.useState<string>();
    const handleOnSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        // Submit the form data
        startTransition(async () => {
            const { error } = await verify_otp({ pin: value });
            if (error) setError(error);
        });
        setValue('')
    }
    return (
        <div className="flex items-center justify-center w-full h-screen">
            <div className='p-3 text-center border-l border-r border-solid rounded-sm border-y border-input'>
                <h1 className='py-3 text-xl'>Nhập mã xác nhận</h1>
                <div className='max-w-sm p-2 text-center'><span>Mã xác minh của bạn sẽ được gửi bằng tin nhắn đến <br /> {email}</span></div>
                <form className='verify_otp-form' onSubmit={handleOnSubmit}>
                    <div className="space-y-2">
                        <div className='w-full max-w-sm mt-5'>
                            <InputOTP
                                maxLength={6}
                                value={value}
                                onChange={(value) => setValue(value)}

                            >
                                <InputOTPGroup className='justify-center w-full'>
                                    <InputOTPSlot index={0} />
                                    <InputOTPSlot index={1} />
                                    <InputOTPSlot index={2} />
                                    <InputOTPSlot index={3} />
                                    <InputOTPSlot index={4} />
                                    <InputOTPSlot index={5} />
                                </InputOTPGroup>
                            </InputOTP>
                        </div>

                        <div className="text-sm text-center">
                            {value === "" ? (
                                <>Enter your one-time password.</>
                            ) : (
                                <>You entered: {value}</>
                            )}
                        </div>
                    </div>
                    <div className="grid w-full max-w-sm items-center gap-1.5 py-6">
                        <LoadingButton loading={isPending} type="submit" className="w-full px-3">
                            Verify OTP
                        </LoadingButton>
                        {error ? <Label className="text-destructive">{error}</Label> : null}
                    </div>

                </form>
            </div>
        </div>
    )
}

export default Verify_OTP