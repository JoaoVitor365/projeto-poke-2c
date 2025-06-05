import poke from './assets/pokeapi_256.png'
import eevee from './assets/eevee.jpg'
import './Home.css'
import PokeGride from './PokeGrid'
import PokeFlex from './PokeFlex'
import PokeGrid from './PokeGrid'
const Home = () => {

    return (
        <div>
            <PokeGrid />
            <PokeFlex />
            <PokeGrid />
            <PokeFlex />
        </div>
    )
}

export default Home
