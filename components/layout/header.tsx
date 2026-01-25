import Link from "next/link";

export default function Header(){
    return <div>
        <div>
            <h1>Piyush Kumar Singh</h1>
        </div>
        <div>
            <Link href="/">About | </Link>
            <Link href="/education">Education | </Link>
            <Link href="/projects">Projects | </Link>
            <Link href="/blogs">Blogs | </Link>
            <Link href="/more">More</Link>
        </div>
    </div>
}