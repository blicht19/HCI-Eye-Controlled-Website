window.saveDataAcrossSessions = true

var player1;
var player2

var tag = document.createElement("script");
tag.src = "https://youtube.com/iframe_api";
tag.id = "youtubeScript";
var firstScriptTag = document.getElementsByTagName("script")[1];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

function onYouTubeIframeAPIReady() {
  player1 = new YT.Player("vid1", {
    width: "560",
    videoId: "NRLlRh2apA8",
    playerVars: {
      autoplay: 0,
      controls: 0,
      rel: 0,
      fs: 0,
      showinfo: 0,
      modestbranding: 1
    },
    events: {
      onReady: onPlayerReady,
      onStateChange: onPlayerStateChange
    }
  });
  player2 = new YT.Player("vid2", {
    width: "560",
    videoId: "Wh77ZGdIaZQ",
    playerVars: {
      autoplay: 0,
      controls: 0,
      rel: 0,
      fs: 0,
      showinfo: 0,
      modestbranding: 1
    },
    events: {
      onReady: onPlayerReady,
      onStateChange: onPlayerStateChange
    }
  });
}

function onPlayerReady(event) {
  
}

function onPlayerStateChange(event) {

}

const lookDelay = 1000;
const middle = window.innerWidth / 2;
let startLookTime = Number.POSITIVE_INFINITY;
let lookDirection = null;

webgazer
  .setGazeListener((data, timestamp) => {
    if (data == null) return;

    if (
      data.x < middle &&
      lookDirection !== "LEFT" &&
      lookDirection !== "RESET"
    ) {
      startLookTime = timestamp;
      lookDirection = "LEFT";
    } else if (
      data.x >= middle &&
      lookDirection !== "RIGHT" &&
      lookDirection !== "RESET"
    ) {
      startLookTime = timestamp;
      lookDirection = "RIGHT";
    }

    if (startLookTime + lookDelay < timestamp) {
      if (lookDirection === "LEFT") {
        console.log("LEFT");
        player2.pauseVideo();
        player1.playVideo();
      } else {
        console.log("RIGHT");
        player1.pauseVideo();
        player2.playVideo();
      }

      startLookTime = Number.POSITIVE_INFINITY;
      lookDirection = "STOP";
    }
  })
  .begin()