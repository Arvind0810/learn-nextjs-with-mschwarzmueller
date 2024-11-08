'use client'
import { formatDate } from '@/lib/format';
import LikeButton from './like-icon';
import { togglePostLikeStatus } from '@/actions/post';
import { useOptimistic } from 'react'

function Post({ post, action }) {
  return (
    <article className="post">
      <div className="post-image">
        <img src={post.image} alt={post.title} />
      </div>
      <div className="post-content">
        <header>
          <div>
            <h2>{post.title}</h2>
            <p>
              Shared by {post.userFirstName} on{' '}
              <time dateTime={post.createdAt}>
                {formatDate(post.createdAt)}
              </time>
            </p>
          </div>
          <div>
            <form action={action.bind(null, post.id)} className={post.isLiked ? "liked" : ''}>
              <LikeButton />
            </form>
          </div>
        </header>
        <p>{post.content}</p>
      </div>
    </article>
  );
}

export default function Posts({ posts }) {

  const [optimisticPost, UpdateOptimisticPost] = useOptimistic(posts, (prevPosts, updatedPostId) => {
    const updatePostIndex = prevPosts.findIndex(post => post.id === updatedPostId)

    if(updatePostIndex === -1){
      return prevPosts
    }

    const updatedPost = {...prevPosts[updatePostIndex]}
    updatedPost.likes = updatedPost.likes + (updatedPost.isLiked ? -1 : 1)
    updatedPost.isLikes = !updatedPost.isLiked
    const newPosts = [...prevPosts]
    newPosts[updatePostIndex] = updatedPost
  })

  if (!posts || posts.length === 0) {
    return <p>There are no posts yet. Maybe start sharing some?</p>;
  }

  async function updatePost(postId){
    UpdateOptimisticPost(postId)
    await togglePostLikeStatus(postId)
  }

  return (
    <ul className="posts">
      {posts.map((post) => (
        <li key={post.id}>
          <Post post={post} action={updatePost} />
        </li>
      ))}
    </ul>
  );
}
