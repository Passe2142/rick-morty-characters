import { useState, useEffect } from "react";
import { getCharacters } from "../Services/charactersServices";
import Character from "./Character";
import {Row} from 'react-bootstrap';

function Characters () {
    const [characters, setCharacters] = useState([]);
    const [loading, setLoading] = useState(true);
    const [buscar, setBuscar] = useState("");
    

    useEffect(
        ()=> {
            const request = async () => {
                try {
                    const data = await getCharacters(buscar);
                    console.log("🚀 ~ file: Characters.jsx:12 ~ request ~ const:", data)
                    setCharacters(data.results)
                    setLoading(false)

                } catch (error) {
                    console.log("Error", error)
                }
            }
            request();
        },
    [buscar])

const titulo = "Personajes de Rick and Morty";

if (loading) {
    return (
        <div>
            Cargando...
        </div>
    )
}
else {
    return (
    <div>
        <label htmlFor="search">Buscar:</label>
        <input
            value={buscar}
            onChange={(event) => setBuscar(event?.target?.value)}
            name="search"
            placeholder="Búsqueda de personajes"
        />
        <h1>{titulo}</h1>
        <Row>
            {characters.map((character) => (
                <Character key={character.id} {...character} />
            ))}
        </Row>
    </div>
        )
    }


}
    
    export default Characters;