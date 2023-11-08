//Api call for blog posts

const url = "https://visitvaldrescms.thbergseng.com/wp-json/wp/v2/posts/";

async function getBlogPosts() {

  const response = await fetch(url);

  const posts = await response.json();

  return posts;
}

export { getBlogPosts };