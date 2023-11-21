/* Hamburger menu */

const hamburgerIcon = document.querySelector(".hamburger-button");
const closeHamburgerIcon = document.querySelector(".fa-xmark");
const body = document.body;
const backdrop = document.querySelector(".backdrop");
const activeMenu = document.querySelector(".backdrop-active"); 

  /* Open menu */

  function openMenu() {
    body.classList.add("menu-active");
    backdrop.classList.add("backdrop-active");
  }

  hamburgerIcon.addEventListener("click", openMenu);

  /* Close menu */

  function closeMenu () {
    body.classList.remove("menu-active");
    backdrop.classList.remove("backdrop-active");
  }

  closeHamburgerIcon.addEventListener("click", closeMenu);

  /* Close menu by clicking outside */


  /* Blog post carousel on frontpage */

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

function fetchAndDisplayPosts() {
  fetch("https://visitvaldrescms.thbergseng.com/wp-json/wp/v2/posts?per_page=30")
    .then(response => response.json())
    .then(data => {
      const blogCarousel = document.querySelector(".carousel-blog-posts");

      data.forEach(post => {
        const postElement = document.createElement("div");
        postElement.classList.add("carousel-blog-post");
        postElement.innerHTML = `
          <a href="../blogpost.html?id=${post.id}"><img src="${post.jetpack_featured_media_url}"></a>
          <div class="carousel-text-box">
          <a href="../blogpost.html?id=${post.id}"><h3>${post.title.rendered}</h3></a>
          <a id=carousel-anchortag href="../blogpost.html?id=${post.id}">Read more here..</a>
          </div>
        `;
        blogCarousel.appendChild(postElement);
      });

      updateCarouselSize();

      window.addEventListener("resize", updateCarouselSize);
    })
    .catch(error => {
      console.error("Error fetching data:", error);
    });
}

// Call the function to fetch and display posts
fetchAndDisplayPosts();