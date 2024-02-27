
import Link from 'next/link'
const Admin = ()=>{
    return (
        <>
        <h1>Admin</h1>
            <ul>
                <li>
                    <Link href="/detail">detail</Link>
                </li>
                <li>
                    <Link href="/member">Member</Link>
                </li>
                <li>
                    <Link href="/login">login</Link>
                </li>
            </ul>
        </>
    )
}
export default Admin