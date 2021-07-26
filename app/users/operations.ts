import { signInAction } from "./actions";
import { push } from "connected-react-router";
// import ApiClient from "../../api/axios";
import axios from "axios";
export const signIn = (userid:string , password:string) => {
    return async (dispatch: any,getState:any) => {
        const state = getState();
        const isSignedIn = state.users.isSignedIn
        if (!isSignedIn) {
            // const response = await fetch(url,{method=}).then(res => res.json()).catch(() => null);
            // const response = await axios.post(url).then(res => {const persons = res.data})
            // ApiClient.post('/login/',
            //     (response:any) => console.log(response),
            //     {
            //         username:userid,
            //         password:password
            //     }
            // )
            const data = new URLSearchParams();
            data.append('username', userid);
            data.append('password', password);

            await axios.post('http://localhost:8000/login/',data).then(res => {
                console.log(`Success! HTTP Status: ${res.data.token}`);
              }).catch(error => {
                console.log(`Error! HTTP Status: ${error.response}`);
              });


            console.log('koko??');
            const token = "";

            dispatch(signInAction({
                isSignedIn: true,
                userid: userid,
                username: userid,
                token: token
            }));
            dispatch(push('/'));
        }
    }
}