// 'use client'
import NewsList from "@/components/news/news-list"
import { getNewsForYearAndMonth,getAvailableNewsMonths, getAvailableNewsYears, getNewsForYear } from "@/lib/news"
import Link from "next/link"
import { Suspense } from "react"

async function FilterHeader({year, month}){
    let links
    if(year && !month){
        links = await getAvailableNewsMonths(year)
    }

    if(year && month){
        links = []
    }

    const availableYear = await getAvailableNewsYears()
    const availableMonth = await getAvailableNewsMonths(year)
    if((year && !availableYear.includes(year)) || (month && !availableMonth.includes(month))){
        throw new Error('Invalid request.')
    } 

    return <header id="archive-header">
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
}

export default async function FilterNewsPage({params}){
    const filter = params.filter
    const year = filter?.[0]
    const month = filter?.[1]
    let news
    let links = await getAvailableNewsYears()
    let newsContent
    
    async function FilteredNews({ year, month }){
        if(!year && !month){
            newsContent = ''
        }
        if(year && !month){
            news = await getNewsForYear(year)
            links = await getAvailableNewsMonths(year)
        }
    
        if(year && month){
            news = await getNewsForYearAndMonth(year, month)
            links = []
        }

        newsContent = <p>No news found for the selected period.</p>

        if(news && news.length > 0){
            newsContent = <NewsList news={news} />
        }

        return newsContent
    }

       
    return (
        <>
        <Suspense fallback={<p>Loading Headers...</p>} >
            <FilterHeader year={year} month={month} />
        </Suspense>
        <Suspense fallback={<p>Loading news...</p>}>
            <FilteredNews year={year} month={month} />
        </Suspense>
        </>
    )
}