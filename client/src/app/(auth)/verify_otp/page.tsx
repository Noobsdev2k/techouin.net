'use client'
import { Button } from '@/components/ui/button'
import { InputOTP, InputOTPGroup, InputOTPSlot } from '@/components/ui/input-otp'
import React from 'react'

const Verify_OTP = ({ email = 'demo@hugoshoping.tech' }: any) => {
    const [value, setValue] = React.useState<string>("")
    return (
        <div className="flex items-center justify-center w-full h-screen">
            <div className='p-3 text-center border-l border-r border-solid rounded-sm border-y border-input'>
                <h1 className='py-3 text-xl'>Nhập mã xác nhận</h1>
                <div className='max-w-sm p-2 text-center'><span>Mã xác minh của bạn sẽ được gửi bằng tin nhắn đến <br /> {email}</span></div>
                <form className=''>
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
                        <Button type='submit'>Verify Email</Button>
                    </div>

                </form>
            </div>
        </div>
    )
}

export default Verify_OTP