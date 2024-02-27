'use client'
import { useRouter } from "next/navigation"


export default function Detail(){
    const router = useRouter()
    const handleBtn = () => {
            router.push("/")
        }

    return (
        <>
            Detail
            <br/>
            <button type="button" onClick ={() => handleBtn()}>
                Go back to Admin
            </button>
        </>
    )
}


// const Detail = ()=>{
//     return (
//         <>
//             Detail
//         </>
//     )
// }
// export default Detail