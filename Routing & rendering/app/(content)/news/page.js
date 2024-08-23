import Link from "next/link";
import Image from "next/image";
import { DUMMY_NEWS } from "@/dummy-news";
import NewsList from "@/components/news/news-list";

export default function News(){
    return (
        <>
            <h1 className="title">News Page</h1>
            <NewsList news={DUMMY_NEWS} />
        </>
    )
}