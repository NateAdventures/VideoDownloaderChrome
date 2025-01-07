chrome.runtime.onInstalled.addListener(() => {
    console.log("Video Downloader extension installed.");
});

chrome.downloads.onDeterminingFilename.addListener((item, suggest) => {
    suggest({ filename: "Downloaded_Video.mp4" });
});