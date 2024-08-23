import { DUMMY_NEWS } from "@/dummy-news"
import { notFound } from "next/navigation"

export default function ImagePreview({params}){
    const {slug} = params
    const newsItem = DUMMY_NEWS.find((news) => news.slug === slug)
    if(!newsItem){
        notFound()
    }

    return <>
    <h2>Intercepted!</h2>
    <div className="fullscreen-image" >
        <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
    </div>
    </>
}