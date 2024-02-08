import Link from "next/link";
import Image from "next/image";



export default function Card({pokemon}:any){
    return(
        <div className="flex flex-col items-center m-4  border-2 border-red-700 rounded-xl bg-stone-900 shadow-lg shadow-stone-900  p-4 ">
            <Image src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`} width={120} height={120} alt="Imagem de um pokemon"/>
            <p className="text-white p-2 mb-2 bg-red-600 rounded-md">#{pokemon.id}</p>
            <h3 className="capitalize text-white">{pokemon.name}</h3>
            <Link className="bg-stone-200 mt-2 p-1 rounded-md transtion duration-300 hover:bg-red-600 hover:text-white" href={`/pokemon/${pokemon.id}`}>Detalhes</Link>
        </div>
    )
}