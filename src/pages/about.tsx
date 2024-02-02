import Image from "next/image";
import Charizard from '../../public/images/charizard.png'

export default function About(){
    return (
        <div className="flex flex-col items-center m-14 font-bold text-stone-700">
            <h1 className="text-2xl mb-5">Sobre o projeto PokeNext</h1>
            <p className="font-normal">Esse é um projeto de uma Pokedex, usando Next.js</p>
            <Image  src={Charizard} width={200} height={200} alt="Imagem de um Charizard"/>
        </div>
        )
    }