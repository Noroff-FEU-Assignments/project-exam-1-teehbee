const header = document.createElement("header");

  header.innerHTML=`
   <header>
  <div class="backdrop"></div>
  <div id="navigation-line">
    <div class="logo-text-desktop">
      <a href="index.html"><picture>
        <source media="(min-width: 768px)" srcset="assets/svg/valdres-logo-large.svg">
        <img src="assets/svg/valdres-logo-small.svg" alt="Visit Valdres logo">
      </picture></a>
      <a href="index.html"><picture id="logo-with-title">
        <source media="(min-width: 768px)" srcset="assets/svg/main-logo-brown.svg">
        <img src="assets/svg/main-logo-mobile-brown.svg" alt="header test reading Visit Valdres">
      </picture></a>
    </div>    
    <nav id="navbar">
      <ul id="menu-list">
        <li><i class="fa-solid fa-xmark"></i></li>
        <li><a href="index.html">Home</a></li>
        <li><a href="blogs.html">Blogs</a></li>
        <li><a class="body-about-page" href="about.html">About</a></li>
        <li><a class="body-contact-page" href="contact.html">Contact</a></li>
      </ul>     
    </nav>
    <i class="fa-solid fa-bars hamburger-button"></i>
  </div>
</header>` 

document.body.prepend(header);

 /* Setting active state on navigation */ 

 function setActivePage() {
  const body = document.querySelector("body");

  const bodyClass = body.classList[0];

  const navLinks = document.querySelectorAll("#menu-list a");

  navLinks.forEach(link => {
    if (link.classList.contains(bodyClass)) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
 }

 window.onload = setActivePage;
