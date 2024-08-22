import NewsList from "@/components/news/news-list"
import { getNewsForYearAndMonth,getAvailableNewsMonths, getAvailableNewsYears, getNewsForYear } from "@/lib/news"
import Link from "next/link"


export default function FilterNewsPage({params}){
    const filter = params.filter
    const year = filter?.[0]
    const month = filter?.[1]
    let news
    let links = getAvailableNewsYears()
    let newsContent
    if(year && !month){
        news = getNewsForYear(year)
        links = getAvailableNewsMonths(year)
    }

    if(year && month){
        news = getNewsForYearAndMonth(year, month)
        links = []
    }

    if(year){
        newsContent = <p>No news found for the selected year.</p>
    }
    if(news && news.length > 0){
        newsContent = <NewsList news={news} />
    }
    console.log(filter)
    
    return (
        <>
        <header id="archive-header">
            <nav>
                <ul>
                    {links.map((link) => {
                        const href = year ? `/archive/${year}/${link}` : `/archive/${link}`
                        return (
                            <li key={link} >
                                <Link  href={href}>{link}</Link>
                            </li>
                        )
                    } )}
                </ul>
            </nav>
        </header>
        {newsContent}
        </>
    )
}