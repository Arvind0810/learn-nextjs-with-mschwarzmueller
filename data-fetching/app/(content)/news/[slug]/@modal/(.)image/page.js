'use client'

import { DUMMY_NEWS } from "@/dummy-news"
import { notFound, useRouter } from "next/navigation"

export default function ImagePreview({params}){
    const router = useRouter()
    const {slug} = params
    const newsItem = DUMMY_NEWS.find((news) => news.slug === slug)
    if(!newsItem){
        notFound()
    }

    return <>
    <div className="modal-backdrop" onClick={router.back} >
    <dailog className="modal" open >
        <div className="fullscreen-image" >
            <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} style={{maxWidth:'100%'}} />
        </div>
    </dailog>
    </div>
    </>
}