/* Importing blog posts to the blog list page */ 

import { getBlogPosts, url } from "./api.js"; 

const blogsMainContainer = document.querySelector(".blogs");


async function frontPagePosts() {
try {
const posts = await getBlogPosts();
const fetchLoader = document.querySelector(".loader");
fetchLoader.classList.remove("loader");
      
for (let i = 0; i < 6; i++) {
  const post = posts[i];
  console.log(post.title.rendered);


  /* Create image element */

   const blogListImage = document.createElement("img");
   blogListImage.src= post.jetpack_featured_media_url;
   blogListImage.classList.add("blogs-list-image");
 
  /* Create title element */

  const blogListTitle = document.createElement("h2");
  blogListTitle.textContent= post.title.rendered;
  blogListTitle.classList.add("blogs-list-title");

  /* Create anchor tag */

  const blogListReadMoreLink = document.createElement("a");
  blogListReadMoreLink.textContent = "Read more...";
  blogListReadMoreLink.href = "../blogpost.html?id=${post.id}";
  blogListReadMoreLink.classList.add("bloglist-anchortag");

  /* Create excerpt for larger screens */

  const blogListPreview = document.createElement("p");
  blogListPreview.textContent = post.excerpt.rendered;
  blogListPreview.classList.add("text-preview");

  /* Create main blog container */
 
   const blogsContainer = document.createElement("div");
   blogsContainer.classList.add("blog-container");
 
  
   /* Append image */ 
   blogsContainer.appendChild(blogListImage);

   /* Append title */

   blogsContainer.appendChild(blogListTitle);

   /* Append text excerpt for larger screens */

   blogsContainer.appendChild(blogListPreview);

   /* Append anchor tag */ 

   blogsContainer.appendChild(blogListReadMoreLink);

   /* Append blog container */
   blogsMainContainer.appendChild(blogsContainer);
  

  }
} catch(error) {
  console.error("Error occurred:", error);
  blogsMainContainer.innerHTML = "Something is wrong here!";
}
}

frontPagePosts();
