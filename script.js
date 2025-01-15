// Navbar Toggle for Mobile View
const menu = document.querySelector(".menu");
const navbar = document.querySelector(".navbar");

menu.addEventListener("click", () => {
  navbar.classList.toggle("change"); // Toggle the 'change' class for visibility and animation
  menu.classList.toggle("change");
});

// Section 2: Video Controls
const video = document.querySelector(".video");
const btn = document.querySelector(".buttons button i");
const bar = document.querySelector(".video-bar");

const playPause = () => {
  if (video.paused) {
    video.play();
    btn.className = "far fa-pause-circle"; // Change icon to pause
    video.style.opacity = "0.7"; // Adjust video opacity during play
  } else {
    video.pause();
    btn.className = "far fa-play-circle"; // Change icon to play
    video.style.opacity = "0.3"; // Adjust video opacity during pause
  }
};

btn.addEventListener("click", () => {
  playPause(); // Handle play/pause on button click
});

video.addEventListener("timeupdate", () => {
  const barWidth = (video.currentTime / video.duration) * 100; // Calculate progress bar width
  bar.style.width = `${barWidth}%`; // Update progress bar
  if (video.ended) {
    btn.className = "far fa-play-circle"; // Reset icon to play when video ends
    video.style.opacity = "0.3"; // Adjust opacity after video ends
  }
});

// Swiper Slider Configuration
const swiper = new Swiper(".swiper-container", {
  effect: "coverflow", // Apply coverflow effect
  grabCursor: true, // Enable cursor grabbing
  centeredSlides: true, // Center the active slide
  slidesPerView: "auto", // Auto adjust slides per view
  coverflowEffect: {
    rotate: 70, // Rotation angle of slides
    stretch: 0, // No stretching between slides
    depth: 100, // Depth offset for 3D effect
    modifier: 1, // Effect intensity
    slideShadows: true, // Add slide shadows
  },
});

