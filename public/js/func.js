const navEl = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY >= 56) {
        navEl.classList.add('navbar-scrolled');
    } else if (window.scrollY < 56) {
        navEl.classList.remove('navbar-scrolled');
    }
});

// // Function to convert regular YouTube URLs to embed URLs
// function getYouTubeEmbedUrl(youtubeUrl) {
//     // Extract video ID from YouTube URL
//     const videoId = extractYouTubeVideoId(youtubeUrl);
  
//     // If a valid video ID is extracted, construct the embed URL
//     if (videoId) {
//       return `https://www.youtube.com/embed/${videoId}`;
//     }
  
//     // If the URL is not recognized, return an empty string or handle accordingly
//     return '';
//   }
  
//   // Function to extract video ID from YouTube URL
//   function extractYouTubeVideoId(youtubeUrl) {
//     // Regular expression to match YouTube video ID
//     const regex = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
//     const match = youtubeUrl.match(regex);
  
//     // If a match is found, return the video ID, otherwise return null
//     return match ? match[1] : null;
//   }

//   // Test the functions
// console.log(extractYouTubeVideoId('https://www.youtube.com/watch?v=your-video-id')); // Should log the video ID
// console.log(getYouTubeEmbedUrl('https://www.youtube.com/watch?v=your-video-id')); //
  