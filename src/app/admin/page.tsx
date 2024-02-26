'use li'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
const Admin = ()=>{
    return (
        <>
        <h1>Admin</h1>
            <ul>
                <li>
                <Link href="/detail">detail</Link>
                </li>
                <li>
                    <a href="/infoMember"> Info
                    </a>
                </li>
                <li>
                    <a href="/login"> login
                    </a>
                </li>
            </ul>
        </>
    )
}
export default Admin