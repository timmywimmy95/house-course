import { FunctionComponent, ReactNode } from "react";
import Link from "next/link";
import { useAuth } from "src/auth/useAuth";

interface IProps{
    main: ReactNode;
}

const Layout: FunctionComponent<IProps> = ({main}) => {
    const {logout, authenticated} = useAuth()
    // const authenticated = false;
    // const logout = () => {
    //     return console.log('hi')
    // }

    return (
    <div className = 'bg-gray-900 max-w-screen-2xl mx-auto text-white'>
        <nav className="bg-gray-800" style = {{height: "64px"}}>
            <div className="px-6 flex items-center justify-between h-16">
                <Link href="/auth"><a> <img className="inline w-6" src="/home-color.svg" alt="home house" /></a></Link>
                {authenticated ? <><Link href="/houses/add">Add House</Link>
                <button onClick={logout}>Logout</button></> : <Link href='/auth'><a>Login / Signup</a></Link>}
            </div>
        </nav>
        <main style ={{minHeight: 'calc(100vh - 64px)'}}>{main}</main>
    </div>
        )
}

export default Layout;
