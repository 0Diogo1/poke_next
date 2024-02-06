


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
    <ul>
      {pokemons.map((pokemon:any) => (
        <li key={pokemon.id}>{pokemon.name}</li>
      ))}
    </ul>
  )
}
