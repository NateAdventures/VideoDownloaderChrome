document.getElementById("scan").addEventListener("click", () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        chrome.tabs.sendMessage(tabs[0].id, { action: "getVideos" }, (response) => {
            let videoList = document.getElementById("videoList");
            videoList.innerHTML = ""; // Clear previous results

            if (response && response.videos.length > 0) {
                response.videos.forEach((videoURL) => {
                    let li = document.createElement("li");
                    let a = document.createElement("a");
                    a.href = videoURL;
                    a.innerText = "Download Video";
                    a.download = "video.mp4";  // Forces download
                    li.appendChild(a);
                    videoList.appendChild(li);
                });
            } else {
                videoList.innerHTML = "<li>No videos found.</li>";
            }
        });
    });
});