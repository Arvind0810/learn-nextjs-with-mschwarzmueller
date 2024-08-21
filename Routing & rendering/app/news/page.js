import Link from "next/link";
import Image from "next/image";
import { DUMMY_NEWS } from "@/dummy-news";

export default function News(){
    return (
        <>
            <h1 className="title">News Page</h1>
            <ul className="news-list">
            {DUMMY_NEWS.map((news) => <li key={news.id} >
                    <Link href={`/news/${news.slug}`} >
                        <img src={`/images/news/${news.image}`} alt={news.title} />
                        <span>{news.title}</span>
                    </Link>
                </li>)}
            </ul>
        </>
    )
}