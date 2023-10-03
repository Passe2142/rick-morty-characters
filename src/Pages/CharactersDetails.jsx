import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getById } from "../Services/charactersServices";
import {Card} from 'react-bootstrap';

function Details () {
    const {id} = useParams();
    const[character, setCharacter] = useState({});
    const[loading, setLoading] = useState(true);
    
    console.log("🚀 ~ file: CharactersDetails.jsx:7 ~ Details ~ id:", id)

useEffect (
    ()=>{
        const request = async () => {

            try {
                const response = await getById(id);

                console.log("🚀 ~ file: CharactersDetails.jsx:18 ~ request ~ response:", response)

                setCharacter(response)
                setLoading(false)

            } catch (e) {
                console.log(e)
            }
        }

        request()

    } ,[id]
);


if (loading) {
    return <div>Cargando...</div>
    }
    else {
        return (
        <div>
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={character.image} />
                <Card.Body>
                    <Card.Title>{character.name}</Card.Title>
                        <Card.Text>
                        <p>{character.status}</p>
                        <p>{character.species}</p>
                        <p>{character.origin ? character.origin.name : "Unknown"}</p>
                        </Card.Text>
                </Card.Body>
    </Card>


            </div>
        );
    }

}

export default Details;