import { useNavigate, useOutletContext } from "react-router-dom"
import { MovieContext } from "../../types"
import "../index.css"
import { SyntheticEvent, useState } from "react";



const LoginPage=()=>{
    const {loginUser}: MovieContext=useOutletContext();

    const navigate = useNavigate();
    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");


    const handleSubmit = async(e:SyntheticEvent)=>{
        e.preventDefault();
        try{
            await loginUser({username,password});
            navigate("/");
        }catch(err){
            console.error();
        }
    };


    const handleUsernameInputChange = (e:SyntheticEvent)=>{
        const input = e.target as HTMLInputElement;
        setUsername(input.value);
    };


    const handlePasswordInputChange= (e:SyntheticEvent)=>{
        const input = e.target as HTMLInputElement;
        setPassword(input.value);
    }


    return(
        <div>
            <h1>Connecter un utilisateur</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username</label>
                <input
                value={username}
                type="text"
                id="username"
                name="username"
                onChange={handleUsernameInputChange}
                required/>

                <label htmlFor="password">Password</label>
                <input 
                value={password}
                type="text"
                id="password"
                name="password"
                onChange={handlePasswordInputChange}
                required/>
                <button type="submit">S'authentifier</button>
            </form>
        </div>
    );
};

export default LoginPage;