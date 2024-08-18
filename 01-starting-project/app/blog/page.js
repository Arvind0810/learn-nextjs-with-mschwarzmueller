import Link from "next/link"

export const metadata = {
    title: "Blog landing page",
    description: "This is blog landing page"
}

export default function Blog(){
    return (
        <main>
        <h1>Blog</h1>
        <p><Link href="/blog/blog-1">Blog 1</Link></p>
        <p><Link href="/blog/blog-2">Blog 2</Link></p>
        </main>
    )
}