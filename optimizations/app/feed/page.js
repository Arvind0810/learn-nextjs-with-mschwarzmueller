import Posts from '@/components/posts';
import { getPosts } from '@/lib/posts';

/* export const metadata = {
  title: 'All posts',
  description: 'Browse all our posts.'
} */

export async function generateMetadata(){
  const posts = await getPosts()
  const count = posts.length
  return {
    title: `Browse all our ${count} posts.`,
    description: `Browse all our posts.`
  }
}

export default async function FeedPage() {
  const posts = await getPosts();
  return (
    <>
      <h1>All posts by all users</h1>
      <Posts posts={posts} />
    </>
  );
}
