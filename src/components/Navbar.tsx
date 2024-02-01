import Image from 'next/image'
import ImagePokebol from '../../public/images/pokeball.png';
import Link from 'next/link';


export default function Navbar(){
    return(
        <nav className='flex bg-stone-900 justify-between text-white h-14'>
            <div className='flex items-center  justify-between ml-4'>
            <Image  className='mr-3 h-8' src={ImagePokebol} alt="Logo PokeNext" width={30} height={30} />
            <h1 className='font-bold'>PokeNext</h1>
            </div>
            <ul className='flex mr-4  items-center'>
                <li className='mr-4 transition-border duration-200 p-2 rounded hover:bg-stone-600'><Link href='/' >Home</Link></li>
                <li  className=' transition-border duration-200 p-2 rounded hover:bg-stone-600'><Link href='/about' >Sobre</Link></li>
            </ul>
        </nav>
    )
}