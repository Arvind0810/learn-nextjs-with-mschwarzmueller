import PostForm from '@/components/post-form';
import { storePost } from '@/lib/posts';
import { redirect } from 'next/navigation';

export default function NewPostPage() {

  async function createPost(prevState,formData) {
    "use server";
    const title = formData.get('title');
    const image = formData.get('image');
    const content = formData.get('content');

    let error = []

    if(!title || title.trim().length === 0){
      error.push('Title is required.')
    }

    if(!content || content.trim().length === 0) {
      error.push('Content is required.')
    }

    if(!image || image.size === 0){
      error.push('Image is required.')
    }

    if(error.length > 0){
      return {error}
    }

    storePost({
      imageUrl: '',
      title,
      content,
      userId: 1
    })
    redirect('/feed')
  }

  return <>
    <PostForm action={createPost} />
  </>
}
