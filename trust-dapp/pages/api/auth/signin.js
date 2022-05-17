import { getProviders, signIn } from "next-auth/react"
import React, { useEffect, useState } from "react";

export default function SignIn({ providers }) {
  console.log(providers);
  return (
    <>
      {Object.values(providers).map((provider) => (
        <div key={provider.name}>
          <button onClick={() => signIn(provider.id)}>
            Sign in with {provider.Credentials}
          </button>
        </div>
      ))}
    </>
  )
}

export async function getServerSideProps(context) {
  const providers = await getProviders()
  return {
    props: { providers },
  }
}

// const SignIn = () => {
//   const [providers, setProviders] = useState('');

//   useEffect(() => {
//     (async () => {
//       const res = await getProviders();
//       setProviders(res);
//     })();
//   }, []);

//   return (
//     <>
//       {providers &&
//         Object.values(providers).map((provider) => (
//           <div key={provider.name}>
//             <button
//               onClick={() => {
//                 signIn(provider.id);
//               }}
//             >
//               Sign in with {provider.name}
//             </button>
//           </div>
//         ))}
//     </>
//   );
// };

// export default SignIn
