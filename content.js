function findVideos() {
    let videos = document.querySelectorAll("video");
    let videoLinks = [];

    videos.forEach((video, index) => {
        let src = video.src || (video.querySelector("source") ? video.querySelector("source").src : "");
        if (src && !videoLinks.includes(src)) {
            videoLinks.push(src);
        }
    });

    return videoLinks;
}

// Listen for messages from popup.js
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "getVideos") {
        let videoLinks = findVideos();
        sendResponse({ videos: videoLinks });
    }
});