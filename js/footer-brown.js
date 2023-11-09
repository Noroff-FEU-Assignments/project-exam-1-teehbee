const footer = document.createElement("footer");

footer.innerHTML=`  <footer>
<picture>
  <source media="(min-width: 768px)" srcset="../assets/svg/valdres-logo-large.svg">
  <img src="../assets/svg/valdres-logo-small.svg" alt="Visit Valdres logo on the bottom of the page">
</picture>
<a href="../index.html"><picture id="logo-with-title">
  <source media="(min-width: 768px)" srcset="../assets/svg/main-logo-brown.svg">
  <img src="../assets/svg/main-logo-mobile-brown.svg" alt="footer text reading Visit Valdres">
  <a href="#" class="footer-copyright-text">&copy; 2023 Tor-Håkon Bergseng</a>
  <ul class="footer-navigation">
    <a href="index.html"><li>Home</li></a>
    <a href="blog.html"><li>Blogs</li></a>
    <a href="about.html"><li>About</li></a>
    <a href="contact.html"><li>Contact</li></a>
  </ul>
</footer>`

document.body.append(footer)