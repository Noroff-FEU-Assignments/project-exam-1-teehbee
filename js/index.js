  /* Blog post carousel on frontpage */



/* Function to fetch and display posts from the API to the carousel */

import { getBlogPosts } from "./api.js";

  async function fetchAndDisplayPosts() {
    try {
      const data = await getBlogPosts();

      const blogCarousel = document.querySelector(".carousel-blog-posts");
      const fetchLoader = document.querySelector(".loader-frontpage");
      fetchLoader.classList.remove("loader-frontpage");

      data.forEach(post => {
         const postElement = document.createElement("div");
         postElement.classList.add("carousel-blog-post");
         postElement.innerHTML = `
           <a href="../blogpost.html?id=${post.id}"><img src="${post.jetpack_featured_media_url}" alt="${post.slug}""></a>
           <div class="carousel-text-box">
           <a href="../blogpost.html?id=${post.id}"><h3>${post.title.rendered}</h3></a>
           <a id=carousel-anchortag href="../blogpost.html?id=${post.id}">Read more here..</a>
           </div>
         `;
         blogCarousel.appendChild(postElement);
       });

       updateCarouselSize();

       /* Make carousel responsive when resizing the window */
       window.addEventListener("resize", updateCarouselSize);
      } catch (error) {
        console.error("An error has occured fetching data:", error);
      }
    }

    fetchAndDisplayPosts();
    

/* Adding functionality to the arrows on the carousel - This function is loaded after the whole dom-structure is loaded to the site */

document.addEventListener("DOMContentLoaded", function() {
  try {
    const previousArrow = document.querySelector(".arrow.prev");
    const nextArrow = document.querySelector(".arrow.next");
    const carousels = document.querySelectorAll(".carousel-blog-posts");

    if (previousArrow && nextArrow && carousels.length > 0) {

      /* Selecting a specific item so that the scrollBy function can be utilized */

    const carousel = carousels[0];

    let postWidth = getPostWidth();

    /* Function scrolling to the left with the arrow and getting the width of the post container*/

    previousArrow.addEventListener("click", function() {
      if (!postWidth) {
        postWidth = getPostWidth();
      }
      carousel.scrollBy({
        left: -postWidth,
        behavior: "smooth",
      });
    });

    /* Function scrolling to the right with the arrow and getting the width of the post container*/

    nextArrow.addEventListener("click", function() {
      if (!postWidth) {
        postWidth = getPostWidth();
      }
      carousel.scrollBy({
        left: postWidth,
        behavior: "smooth",
      });
    });

    /* Updates post width if screen is resized */

    window.addEventListener("resize", function() {
      postWidth = getPostWidth();
    });
  } else {
    throw new Error("An error has occured again!");
  }
} catch (error) {
  console.error("Caught an error:", error);
}
});

    /* Function calculating the width of the blog post for correct scroll behavior */
    function getPostWidth() {
      try {
        const post = document.querySelector(".carousel-blog-post");

        if(!post) {
          throw new Error ("An error occurred: No element with the class '.carousel-blog-post' found.");
        }

      const postStyle = window.getComputedStyle(post);

        /* As of now there is no margin on the posts, but the variables are added in case of style edits */
    
      const marginLeft = parseFloat(postStyle.marginLeft);
      const marginRight = parseFloat(postStyle.marginRight);
    
      const postWidth = post.offsetWidth + marginLeft + marginRight;
    
      console.log(postWidth);
      return postWidth;
      } catch (error) {
        console.error("Caught an error:", error);
        return null;
      }
    }

        /* Adjust number of slides according to screensize */ 

function updateCarouselSize() {
  const blogPostCarousel = document.querySelectorAll(".carousel-blog-post");

  let slidesShowing = 1;

  const breakpoints = [
    { width: 768, slides: 2 },
    { width: 1200, slides: 3 },
    { width: 1400, slides: 4 },
  ];

  const screenWidth = window.innerWidth;

  for (let i = 0; i < breakpoints.length; i++) {
    if (screenWidth >= breakpoints[i].width) {
      slidesShowing = breakpoints[i].slides;
    } else {
      break;
    }
  }

  const postWidth = (100 / slidesShowing).toFixed(2);
  blogPostCarousel.forEach(post => {
    post.style.flex = `0 0 ${postWidth}%`;
  });
}
