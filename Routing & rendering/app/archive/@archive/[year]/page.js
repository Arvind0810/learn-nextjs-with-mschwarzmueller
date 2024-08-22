import NewsList from "@/components/news/news-list"
import { getNewsForYear } from "@/lib/news"

export default function FilterNewsPage({params}){
    const {year} = params
    const news = getNewsForYear(year)

    return <NewsList news={news} />
}