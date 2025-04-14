export async function loadLatestVideo(apiKey, channelId) {
    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&channelId=${channelId}&part=snippet,id`
    );
  
    const data = await response.json();
  
    if (data.items && data.items.length > 0) {
      const videoId = data.items[0].id.videoId;
      const videoContainer = document.getElementById("youtube-video");
  
      videoContainer.innerHTML = `
        <iframe width="100%" height="315"
          src="https://www.youtube.com/embed/${videoId}"
          frameborder="0" allowfullscreen>
        </iframe>
      `;
    } else {
      console.error("Nenhum vídeo encontrado.");
    }
  }