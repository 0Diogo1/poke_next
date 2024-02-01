import Navbar from "./Navbar";
import Footer from "./Footer";
import Head from "next/head";


interface MyComponentProps{
    children:React.ReactNode;
}

export default function Layout({children}:MyComponentProps){
    return(
        <>
        <Head>
            <link rel="shortcut icon" href='images/favicon.ico'/>
            <title>PokeNext</title>
        </Head>
            <div className='flex flex-col min-h-screen'>
                <Navbar />
                    <main className="flex-1">
                        {children}
                    </main>
                <Footer />
            </div>
        </>
    )
}