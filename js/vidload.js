function profileIframe(div) {
var iframe = document.createElement('iframe');
iframe.setAttribute(
  'src', div.dataset.id
);
// iframe.setAttribute('frameborder', '0');
iframe.setAttribute('allowfullscreen', '1');
/*iframe.setAttribute(
  'allow',
  'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
);*/
div.parentNode.replaceChild(iframe, div);
}

function initYouTubeVideos() {
var playerElements = document.getElementsByClassName('custom-player');
for (var n = 0; n < playerElements.length; n++) {
  var videoId  = playerElements[n].dataset.id;
  var thumbImg = playerElements[n].dataset.thumb;
  var div = document.createElement('div');
  div.setAttribute('data-id', videoId);

  var thumbNode = document.createElement('img');
  thumbNode.setAttribute('src', thumbImg);
  div.appendChild(thumbNode);

  var playButton = document.createElement('div');
  playButton.setAttribute('class', 'play');

  div.appendChild(playButton);
  div.onclick = function () {
    profileIframe(this);
  };
  playerElements[n].appendChild(div);
}
}

document.addEventListener('DOMContentLoaded', initYouTubeVideos);