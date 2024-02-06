function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}



function openModal(videoSrc, title, githubLink) {
  var modal = document.getElementById("videoModal");
  var video = document.getElementById("modalVideo");

  // Set video source, title, and GitHub link
  video.src = videoSrc;
  // You can display the title and GitHub link somewhere in the modal if needed
  console.log("Title: " + title);
  console.log("GitHub Link: " + githubLink);

  modal.classList.add('active');
}

function closeModal() {
  var modal = document.getElementById("videoModal");
  var video = document.getElementById("modalVideo");

  modal.classList.remove('active');
  video.pause();
  video.currentTime = 0;
}


