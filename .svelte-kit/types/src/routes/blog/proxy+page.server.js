// @ts-nocheck
import { VITE_API_KEY, VITE_BLOG_ID } from '$env/static/private';

/** */
export async function load() {
  try {
    const response = await fetch(
      `https://www.googleapis.com/blogger/v3/blogs/${VITE_BLOG_ID}/posts?key=${VITE_API_KEY}`
    );
    
    if (!response.ok) {
      throw new Error('Error al obtener los posts');
    }
    
    const data = await response.json();
    return {
      posts: data.items || []
    };
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return {
      posts: []
    };
  }
}