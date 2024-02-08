import Image from "next/image"
import Styles from '../../styles/pokemon.module.css'

export const getStaticPaths = async () => {
    const maxPokemons = 251
    const api = `https://pokeapi.co/api/v2/pokemon/`

    const res = await fetch(`${api}/?limit=${maxPokemons}`)

    const data = await res.json()

    const paths = data.results.map((pokemon:any, index:any) => {
        return{
            params:{pokemonId: index.toString()}
        }
    })

    return{
        paths, fallback:false,
    }
}

    export const getStaticProps = async (context:any) => {
        const id = context.params.pokemonId
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)

        const data = await res.json()

        return {
            props:{pokemon: data}
        }
    }

export default function Pokemon({pokemon}:any){
    console.log(pokemon)
    return(
        <div className='flex border-2 items-center justify-around mt-20 max-w-xl m-auto p-6 rounded-md bg-stone-800 shadow-stone-800 shadow-md border-red-600 text-white'>
            <div className="">
                <h1 className="text-center bg-stone-200 text-stone-700 rounded capitalize p-1 font-semibold">{pokemon.name}</h1>
                <Image src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`} 
                width={150} 
                height={150} 
                alt="Imagem de um pokemon"/>
            </div>
            <div className=" text-center flex flex-col justify-center items-center">
                <div className='mb-3 mr-4'>
                    <h3>Número:</h3>
                    <p className="text-white w-14 h-6  m-auto text-center bg-red-600 rounded-md ">#{pokemon.id}</p>
                </div>
                <div className='mb-3 mr-4'>
                    <h3>Tipo:</h3>
                    {pokemon.types.map((item:any, index:any) => (
                        <span className={`${Styles.type} ${Styles['type_' + item.type.name]}`} key={index}>{`${item.type.name} `}</span>
                    ))}
                </div>
                <div className="flex">
                    <div className='mb-3 mr-4'>
                        <h4>Altura:</h4>
                        <p>{pokemon.height * 10} cm</p>
                    </div>
                    <div className='mb-3 mr-4'>
                        <h4>Peso:</h4>
                        <p>{pokemon.weight / 10} kg</p>
                    </div>
                </div>
            </div>

        </div>
    )
} 