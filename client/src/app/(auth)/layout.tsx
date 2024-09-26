import { redirect } from 'next/navigation';
import { checkUser } from './action'


const AuthLayout = async ({ children }: {
    children: React.ReactNode
}) => {
    const isUser = await checkUser()
    console.log(isUser);
    if (isUser) {
        redirect('/')
    }
    return (
        <section>
            {children}
        </section>
    )
}

export default AuthLayout
