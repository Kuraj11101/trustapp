import * as React from "react";
import Link from "next/link";
//import axios from "axios";
import router from "next/router";
import {useState} from "react";
//import {signIn} from "next-auth/react";
//import register from "./api/register";

export default function Register() {

   // const router = useRouter();

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // const registerUser = (event) => {
    //     event.preventDefault();
    // }

    const registerUser = async (event) => {
        event.preventDefault();

    //     const data = {
    //         firstName: firstName,
    //         lastName: lastName,
    //         email: email,
    //         password: password
    //     }

    //     await axios.post('/api/register', data);
    //     signIn("credentials", {
    //         email, password, callbackUrl: `${window.location.origin}/login`, redirect: true}
    //     ).then(function(result) {
    //         router.push(result.url)
    //     }).catch(err => {
    //         alert("Failed to register: " + err.toString())
    //     });
     }

    return (
        <>
            <h1>Register</h1>

            <form onSubmit={registerUser}>
                <fieldset>
                <div className="mb-3">
                <label htmlFor="firstnameInput" className="form-label">
                    First Name
                </label>
                    <input type='text' value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                </div>
                <div className="mb-3">
                <label htmlFor="lastnameInput" className="form-label">
                    Last Name
                </label>
                    <input type='text' value={lastName} onChange={(e) => setLastName(e.target.value)} />
                </div>
                <div className="mb-3">
                <label htmlFor="emailInput" className="form-label">
                    Email
                </label>
                    <input type='text' value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="mb-3">
                <label htmlFor="passwordInput" className="form-label">
                    Password
                </label> <br />
                    <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <button type='submit'>Register User</button>

                <Link href='/login'>Login</Link>

                </fieldset>
            </form>
        </>
    )
}