import { getBlogPost, url } from "./api.js";

const blogPostUpperContainer = document.querySelector(".blog-upper-container");
const blogSpecificMainContainer = document.querySelector(".blog-post-specific");



async function blogPostSpecific() {
  try {
    const specificPost = await getBlogPost();
    const fetchLoader = document.querySelector(".loader");
    fetchLoader.classList.remove("loader");

    console.log(specificPost);

    
    /* Create container for title */ 

    const blogPostSpecificTitleContainer = document.createElement("div");
    blogPostSpecificTitleContainer.classList.add("blog-post-title");

      /* Create title element */

    const blogPostSpecificTitle = document.createElement("h2");
    blogPostSpecificTitle.innerHTML = specificPost.title.rendered;
    blogPostSpecificTitle.classList.add("blog-post-title-h2");

    /* Create main container for blog post */ 

    const blogSpecificContainer = document.createElement("div");
    blogSpecificContainer.classList.add("blog-post-container");

    /* Create images and text container used for flexbox */

    const blogSpecificImagesAndTextContainer = document.createElement("div");
    blogSpecificImagesAndTextContainer.classList.add("blog-post-images-and-text");

    /* Create image container */

    const blogSpecificImageContainer = document.createElement("div");
    blogSpecificImageContainer.classList.add("blog-post-image");

    /* Create image element for specific blog posts */

    const blogSpecificImage = document.createElement("img");
    blogSpecificImage.src=specificPost.jetpack_featured_media_url;
    blogSpecificImage.classList.add("blog-post-picture");

    /* Create text container */

    const blogSpecificTextContainer = document.createElement("div");
    blogSpecificTextContainer.classList.add("blog-post-content-container");

    /* Create text element */

    const blogSpecificText = document.createElement("p");
    blogSpecificText.innerHTML = specificPost.content.rendered;



    /* Append title container to main container */

    blogPostUpperContainer.appendChild(blogPostSpecificTitleContainer);

    /* Append main blog container to main container */

    blogSpecificMainContainer.appendChild(blogSpecificContainer);

    /* Append images and text container to main container */

    blogSpecificContainer.append(blogSpecificImagesAndTextContainer);

    /* Append image container to image and text container */

    blogSpecificImagesAndTextContainer.appendChild(blogSpecificImageContainer);

    /* Append title element to parent div */

    blogPostSpecificTitleContainer.appendChild(blogPostSpecificTitle);

    /* Append image */

    blogSpecificImageContainer.append(blogSpecificImage);

    /* Append text container to image and text container */

    blogSpecificImagesAndTextContainer.appendChild(blogSpecificTextContainer);

    /* Append text content to text container */

    blogSpecificTextContainer.appendChild(blogSpecificText);


    /* Display image modal on image click */

    blogSpecificImage.addEventListener("click", () => {
      const imageUrl = specificPost.jetpack_featured_media_url;
      const modalImage = document.getElementById("modalImage");
      modalImage.src = imageUrl;
    
      const imageModal = document.getElementById("imageModal");
      imageModal.showModal();    
    });


    /* Close modal with button */

    const closeModalButton = document.getElementById("closeModal");
    closeModalButton.addEventListener("click", () => {
      const imageModal = document.getElementById("imageModal");
      imageModal.close();
    });

    /* Close by clicking outside */ 

    imageModal.addEventListener("click", (event) => {
      if (event.target === imageModal) {
        imageModal.close()
      }
    });
    
  


  }catch(error) {
    console.error("Error occurred:", error);
    blogSpecificMainContainer.innerHTML = "Something is wrong here!";
  }
}




blogPostSpecific();