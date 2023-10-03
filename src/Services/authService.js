import firebase from '../Config/firebase'

export const register = async (data) => {
    const responseUser = await firebase
    .auth()
    .createUserWithEmailAndPassword (data.email, data.password)
    if(responseUser.user.uid) {
        const document = await firebase.firestore().collection("usuarios").add({
            name: data.nombre,
            lastname: data.apellido,
            userId: responseUser.user.uid,
        })
        return document;
    }
    return responseUser;

}

export const login = async (data) => {
    const responseUser = await firebase
    .auth()
    .signInWithEmailAndPassword(data.email, data.password)
    if(responseUser.user.uid) {
        const document = await firebase.firestore().collection("usuarios").where("userId", "==", responseUser.user.uid).get()
        return document.docs[0].data();
    }
    return {};
}