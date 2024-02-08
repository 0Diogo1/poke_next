import Link from "next/link";
import Image from "next/image";



export default function Card({pokemon}:any){
    return(
        <div>
            <Image src={`https://cdn.traction.one/pokedex/pokemon/${pokemon.id}.png`} width={120} height={120} alt="Imagem de um pokemon"/>
            <p>#{pokemon.id}</p>
            <h3>{pokemon.name}</h3>
            <Link href={`/pokemon/${pokemon.id}`}>Detalhes</Link>
        </div>
    )
}