import { useState } from "react";
//import { useEffect } from "react";
import axios from "axios";


export function useUser() {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    // const [loginMessage, setLoginMessage] = useState("");


    const login = async ({ username, password }) => {
        try {
            const { data } = await axios.post("http://localhost:3000/api/auth/login", { email: username, password });

            if (data.statusCode === 201){
                setUser(data);
                setError(null);
            }

        } catch (error) {

            const { data } = error.response;
            if (!data)
                setError(`Server error to connect`)
            if (data.statusCode === 400)
                setError(`Credentials are invalid`)
            //401 when the token is expired or invalid
            else
                setError(`Server error`)

        }
    };

    const logout = async () => {
        try {
            await axios.post("/api/logout");
            setUser(null);
        } catch (error) {
            setError(error);
        }
    };

    /* useEffect(() => {
         const fetchUser = async () => {
             try {
                 const { data } = await axios.get("localhost:3000/api/auth/login");
                 setUser(data);
             } catch (error) {
                 setError(error);
             } finally {
                 setLoading(false);
             }
         };
         fetchUser();
     }, []);*/

    return { user, loading, hasLoginError: error, login, logout };
}