<script>
    export let data
</script>    
<h1>Blog Post</h1>
<ul>
{#each data.summaries as post}
<li><a href="/{post.id}">{post.title}</a></li>
    
{/each}
</ul>