import { useState } from "react";
import { useNavigate } from "react-router-dom";

const useAuth = () => {
    const [ isReg, setIsReg ] = useState( false );
    const [ firstName, setFirstName ] = useState( "" );
    const [ email, setEmail ] = useState( "" );
    const [ password, setPassword ] = useState( "" );

    const navigate = useNavigate();

    const toggleForm = () => setIsReg( ( value ) => !value );

    const handleRegister = async () => {
        try {
            const response = await fetch( "http://localhost:3000/api/v1/users/register", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify( { firstName, email, password } ),
            } );


        } catch ( err ) {
            console.error( "Registration failed:", err );
            alert( "Registration failed. Try again later." );
        }
    };

    const handleLogin = async () => {
        try {
            const response = await fetch( "http://localhost:3000/api/v1/users/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify( { email, password } ),
            } );

            console.log( "RESPONSE IS" );
            if ( response.ok ) {
                console.log( "RESPONSE IS OK" )
                const data = await response.json();
                localStorage.setItem( "token", data.token );
                localStorage.setItem( "email", email );

            } else {
                const error = await response.json();
                console.error( `Error: ${ error.message }` );
            }
        } catch ( err ) {
            console.error( "Login failed:", err );
        }
    };

    return {
        isReg,
        setFirstName,
        setEmail,
        setPassword,
        toggleForm,
        handleRegister,
        handleLogin
    };
};

export default useAuth;