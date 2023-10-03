import Characters from "../Components/Characters";
import firebase from "../Config/firebase"
function Home() {
    console.log(firebase);
    return(
        <div>
            <Characters />

        </div>
    )
}

export default Home;