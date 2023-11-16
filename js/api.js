//Api call for blog posts

const url = "https://visitvaldrescms.thbergseng.com/wp-json/wp/v2/posts?per_page=30";

async function getBlogPosts() {

  const response = await fetch(url);

  const posts = await response.json();

  return posts;
}

export { getBlogPosts, url };

//Api call for specific blog post

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

async function getBlogPost() {

  const response = await fetch(url + id);

  const blogDetails = await response.json();

  return blogDetails;
}

export { getBlogPost };
