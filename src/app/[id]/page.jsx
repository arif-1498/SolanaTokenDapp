'use client'

import { usePathname  } from 'next/navigation';

export default function showData () {
    const pathname = usePathname()
    console.log("arif", pathname); // Output: { route: "/data", query: {} }
    return(
        <>
            <h1>{pathname}</h1>
        </>
    )
}