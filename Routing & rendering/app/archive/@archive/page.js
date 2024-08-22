import { getAllNews, getAvailableNewsYears } from "@/lib/news"
import Link from "next/link"

export default function ArvhivePage(){
    const links = getAvailableNewsYears()
    const posts = getAllNews()
    console.log(links)
    return (
        <header id="archive-header">
            <nav>
                <ul>
                    {links.map((link) => <li key={link} >
                        <Link  href={`/archive/${link}`}>{link}</Link>
                    </li>)}
                </ul>
            </nav>
        </header>
    )
}