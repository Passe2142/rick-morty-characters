import Home from "./Pages/Home"
import SignUp from "./Pages/SignUp"
import NavBar from "./Components/NavBar"
import NotFound from "./Pages/NotFound"
import SignIn from "./Pages/SignIn"
import CharactersDetails from "./Pages/CharactersDetails"
import {Route, Routes, BrowserRouter as Router} from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import CharacterUpload from "./Pages/CharactersUpload"
import { useState } from "react"

function App() {
  const[signIn, setSignIn] = useState(false)
  return (
    <>
    <Router>
      <NavBar signIn={signIn} setSignIn={setSignIn}/>
      <Container>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/SignIn" element={<SignIn setSignIn={setSignIn}/>}/>
          <Route path="/SignUp" element={<SignUp/>}/>
          <Route path="/characters/upload" element={<CharacterUpload/>}/>
          <Route path="/character/:id" element={<CharactersDetails/>}/>
          
          <Route path="*" element={<NotFound/>}/>
          
        </Routes>
      </Container>
    </Router>
    </>
  )
}

export default App
