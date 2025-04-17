export async function loadLatestVideo(apiKey, channelId) {
  try {
      // Fetch the latest video from the YouTube channel
      const response = await fetch(
          `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&channelId=${channelId}&part=snippet,id&order=date&maxResults=1`
      );

      const data = await response.json();

      // Check if the response contains video data
      if (data.items && data.items.length > 0) {
          const videoId = data.items[0].id.videoId;
          const videoContainer = document.getElementById("youtube-video");

          // Embed the latest video in the container
          videoContainer.innerHTML = `
              <iframe width="100%" height="315"
                  src="https://www.youtube.com/embed/${videoId}"
                  frameborder="0" allowfullscreen>
              </iframe>
          `;
      } else {
          console.error("No video found.");
      }
  } catch (error) {
      console.error("Error loading the video:", error);
  }
}