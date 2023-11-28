/* Importing blog posts to the blog list page */ 

import { getBlogPosts } from "./api.js"; 

const blogsMainContainer = document.querySelector(".blogs");
const loadMoreButton = document.querySelector(".blogs-load-more");
const loaderContainer = document.querySelector(".loader-container");

let currentIndex = 10;


async function frontPagePosts() {
try {

  const fetchLoader = document.createElement("div");
  fetchLoader.classList.add("loader");
  loaderContainer.appendChild(fetchLoader);
  

const posts = await getBlogPosts();
fetchLoader.classList.remove("loader");

      
posts.slice(0, currentIndex).forEach(post => {

  if (!document.getElementById(`post-${post.id}`)) {
    /* Create image element */

   const blogListImage = document.createElement("img");
   blogListImage.src = post.jetpack_featured_media_url;
   blogListImage.classList.add("blogs-list-image");

  /* Look for and implement alt-text for image */

  blogListImage.alt = post.slug;
 
  /* Create title element */

  const blogListTitle = document.createElement("h2");
  blogListTitle.innerHTML= post.title.rendered;
  blogListTitle.classList.add("blogs-list-title");

  /* Create anchor tag for the read more button */

  const blogListReadMoreLink = document.createElement("a");
  blogListReadMoreLink.textContent = "Read more...";
  blogListReadMoreLink.href = `../blogpost.html?id=${post.id}`;
  blogListReadMoreLink.classList.add("bloglist-anchortag");

  const pictureAnchorTag = document.createElement("a");
  pictureAnchorTag.href= `../blogpost.html?id=${post.id}`;
  pictureAnchorTag.classList.add("picture-anchor-tag");

  /* Create excerpt for larger screens */

  const blogListPreview = document.createElement("p");
  blogListPreview.innerHTML = post.excerpt.rendered;
  blogListPreview.classList.add("text-preview");

  /* Create main blog container. This also creates a ID for the div which will make sure the load more function only loads new posts.  */
 
   const blogsContainer = document.createElement("div");
   blogsContainer.id = `post-${post.id}`;
   blogsContainer.classList.add("blog-container");

 
  
   /* Append image */ 
   pictureAnchorTag.appendChild(blogListImage);

   /* Append image anchor tag to main container */

   blogsContainer.appendChild(pictureAnchorTag);

   /* Append title */

   blogsContainer.appendChild(blogListTitle);

   /* Append text excerpt for larger screens */

   blogsContainer.appendChild(blogListPreview);

   /* Append anchor tag */ 

   blogsContainer.appendChild(blogListReadMoreLink);

   /* Append blog container */
   blogsMainContainer.appendChild(blogsContainer);
  

  }

  });
} catch(error) {
  console.error("Error occurred:", error);
  blogsMainContainer.innerHTML = "Something is wrong here!";
}
}

loadMoreButton.addEventListener("click", (event) => {
  event.preventDefault();
  currentIndex += 10;
  frontPagePosts();
})

frontPagePosts();

