import NextAuth from 'next-auth'
//import { PrismaClient } from '@prisma/client'
//import CredentialsProvider from "next-auth/providers/credentials";
import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";

//let userAccount = null;

//const prisma = new PrismaClient();

//const bcrypt = require('bcrypt');

// const confirmPasswordHash = (plainPassword, hashedPassword) => {
//     return new Promise(resolve => {
//         bcrypt.compare(plainPassword, hashedPassword, function(err, res) {
//             resolve(res);
//         });
//     })
// }

//const configuration
const options = {
    // cookie: {
    //     secure: process.env.NODE_ENV && process.env.NODE_ENV !== 'production',
    // },
    // session: {
    //     jwt: true,
    //     maxAge: 30 * 24 * 60 * 60
    // },
    providers: [

        GitHubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET,
        }),
        GoogleProvider({
            clientId: process.env.Google_ID,
            clientSecret: process.env.Google_SECRET,
        }),

        // CredentialsProvider({

          //  id: "credentials",
            // name: "Credentials",
            // credentials: {
            //     Firstname: { label: "Firstname", type: "text", placeholder: "firstname" },
            //     Lastname: { label: "Firstname", type: "text", placeholder: "firstname" },
            //     email: { label: "Firstname", type: "text", placeholder: "firstname" },
            //     password: {  label: "Password", type: "password" }
            // },
            // async authorize(credentials, req) {

            //     const res = await fetch("http://localhost/api/register", {
            //         method: 'POST',
            //         body: JSON.stringify(credentials),
            //         headers: {
            //             "Content-Type": "application/json, text/html, text/plain",
            //             "User-Agent":
            //             "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.89 Safari/537.36",
            //              "Accept": "application/json; charset=UTF-8",
            //              //authorization: getToken(),
            //          }
            //       })
            //       const user = await res.json()

            //       // If no error and we have user data, return it
            //       if (res.ok && user) {
            //         return user
            //       }
            //       // Return null if user data could not be retrieved
            //       return null
            //     // try
            //     // {
            //     //     const user = await prisma.users.findFirst({
            //     //         where: {
            //     //             email: credentials.email
            //     //         }
            //     //     });

            //     //     if (user !== null)
            //     //     {
            //     //         //Compare the hash
            //     //         const res = await confirmPasswordHash(credentials.password, user.password);
            //     //         if (res === true)
            //     //         {
            //     //             userAccount = {
            //     //                 userId: user.userId,
            //     //                 firstName: user.firstName,
            //     //                 lastName: user.lastName,
            //     //                 email: user.email,
            //     //                 isActive: user.isActive
            //     //             };
            //     //             return userAccount;
            //     //         }
            //     //         else
            //     //         {
            //     //             console.log("Hash not matched logging in");
            //     //             return null;
            //     //         }
            //     //     }
            //     //     else {
            //     //         return null;
            //     //     }
            //     // }
            //     // catch (err)
            //     // {
            //     //     console.log("Authorize error:", err);
            //     // }

           // }
        //}),
    ],
    pages: {
        signIn: "/auth/signin",
    },

callbacks: {
  async jwt({ token, account }) {
    // Persist the OAuth access_token to the token right after signin
    if (account) {
      token.accessToken = account.access_token
    }
    return token
  },
  async session({ session, token, user }) {
    // Send properties to the client, like an access_token from a provider.
    session.accessToken = token.accessToken
    return session
  }
}
    // callbacks: {
    //     async signIn({user, account, profile}) {
    //         try
    //         {
    //             //the user object is wrapped in another user object so extract it
    //             user = user.user;
    //             console.log("Sign in callback", user);
    //             console.log("User id: ", user.userId)
    //             if (typeof user.userId !== typeof undefined)
    //             {

    //                 if (user.isActive === '1')
    //                 {
    //                     console.log("User is active");
    //                     return user;
    //                 }
    //                 else
    //                 {
    //                     console.log("User is not active")
    //                     return false;
    //                 }
    //             }
    //             else
    //             {
    //                 console.log("User id was undefined")
    //                 return false;
    //             }
    //         }
    //         catch (err)
    //         {
    //             console.error("Signin callback error:", err);
    //         }

    //     },
    //     async register(firstName, lastName, email, password) {
    //         try
    //         {
    //             await prisma.users.create({
    //                 data: {
    //                     firstName: firstName,
    //                     lastName: lastName,
    //                     email: email,
    //                     password: password
    //                 }
    //             })
    //             return true;
    //         }
    //         catch (err)
    //         {
    //             console.error("Failed to register user. Error", err);
    //             return false;
    //         }

    //     },
    //     session:({session, token})=>{
    //         if (token)
    //         //(userAccount !== null)
    //         {

    //             session.user.id = token.id;
    //             //session.user = userAccount;
    //         //     session.user = {
    //         //         userId: userAccount.userId,
    //         //         name: `${userAccount.firstName} ${userAccount.lastName}`,
    //         //         email: userAccount.email
    //         //     }

    //         // }
    //         // else if (typeof token.user !== typeof undefined && (typeof session.user === typeof undefined
    //         //     || (typeof session.user !== typeof undefined && typeof session.user.userId === typeof undefined)))
    //         // {
    //         //     session.user = token.user;
    //         // }
    //         // else if (typeof token !== typeof undefined)
    //         // {
    //         //     session.token = token;
    //          }
    //         return session;
    //         //Promise.resolve(session);
    //     },
    //     jwt:({token, user}) => {
    //         //console.log("JWT callback. Got User: ", user);
    //         if (user)
    //         //session:user
    //         {
    //             token.id = user.userId;
    //         }
    //         return token;
    //     },
    //     // async jwt({token, user, account, profile, isNewUser}) {
    //     //     console.log("JWT callback. Got User: ", user);
    //     //     if (typeof user !== typeof undefined)
    //     //     {
    //     //         token.user = user;
    //     //     }
    //     //     return token;
    //     // }
    //     pages: {
    //         signIn: '/auth/signin',
    //         signOut: '/auth/signout',
    //         error: '/auth/error', // Error code passed in query string as ?error=
    //         verifyRequest: '/auth/verify-request', // (used for check email message)
    //         newUser: '/auth/new-user' // New users will be directed here on first sign in (leave the property out if not of interest)
    //       }
    // }
}
export default (req, res) => NextAuth(req, res, options)

    //configuration)