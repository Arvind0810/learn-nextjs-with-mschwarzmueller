'use server'
import { uploadImage } from "@/lib/cloudinary";
import { storePost, updatePostLikeStatus } from "@/lib/posts";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function createPost(prevState,formData) {
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

try {
    const imageUrl = await uploadImage(image)

    await storePost({
        imageUrl: imageUrl,
        title,
        content,
        userId: 1
    })
} catch (error) {
    console.log(error)
    throw new Error("something wen wrong while creating post")
}
revalidatePath('/', 'layout')
redirect('/feed')

}

export async function togglePostLikeStatus(postId, formData){
    await updatePostLikeStatus(postId,2)
    revalidatePath('/', 'layout')
}