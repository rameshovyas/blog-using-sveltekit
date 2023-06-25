import { posts } from '../data'

export function load() {
    return {
        summaries : posts.map((post) =>({
            id : post.id,
            title:post.title
        }))
    };
}