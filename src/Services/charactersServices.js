import instances from "../Config/axios"
import firebase from '../Config/firebase'

export const getCharacters = async (buscar) => {
    const res = await instances.get(`https://rickandmortyapi.com/api/character/?name=${buscar}`)
    return res.data
}

export const getById = async (id) => {
    const res = await instances.get(`character/${id}`)
    return res.data
}

export const create = async (payload) => {
    return await firebase.firestore().collection("perosnajes")
    .add(payload)
}

export const getAllFirebase = async (buscar) => {
    console.log(buscar)
    return await firebase.firestore().collection("perosnajes").get()
}