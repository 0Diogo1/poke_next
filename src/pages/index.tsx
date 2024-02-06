import Pokebola from '../../public/images/pokeball.png'
import Image from "next/image"
import { Inter } from "next/font/google";

interface Pokemon{
  name:string,
  url:string,
  id:number
}

export async function getStaticProps(){
  const maxPokemons = 1302
  const api = "https://pokeapi.co/api/v2/"

  const res = await fetch(`${api}/pokemon?limit=${maxPokemons}&offset=100`)

  const data = await res.json()

  //adicionando id


  data.results.forEach((item:any, index:any) => {
    item.id = index + 1;
  })
  

  return{
    props:{
      pokemons: data.results
    },
  }
    

}

export default function Home({pokemons}: {pokemons:Pokemon[]}){
  return(
    <>
      <div className='flex justify-center items-center mt-10 gap-3'>
        <h1 className='text-4xl font-bold text-stone-900'>Poke<span className='text-red-700'>Next</span></h1>
        <Image src={Pokebola} width={60} height={60} alt="Imagem de uma pokebola"/>
       </div>
      <div className='flex flex-wrap justify-between items-center max-w-4xl m-auto mt-7'>
        {pokemons.map((pokemon:any) => (
          <p key={pokemon.id}>{pokemon.name}</p>
        ))}
      </div>
    </>
  )
}
