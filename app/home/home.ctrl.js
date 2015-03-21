'use strict';

class HomeCtrl {

  constructor($sce) {
    this.$sce = $sce;
    this.init();
  }

  init(){
    this.config = {
      sources: [
        {src: this.$sce.trustAsResourceUrl("http://static.videogular.com/assets/videos/videogular.mp4"), type: "video/mp4"},
        {src: this.$sce.trustAsResourceUrl("http://static.videogular.com/assets/videos/videogular.webm"), type: "video/webm"},
        {src: this.$sce.trustAsResourceUrl("http://static.videogular.com/assets/videos/videogular.ogg"), type: "video/ogg"}
      ],
      tracks: [
          {
            src: "http://www.videogular.com/assets/subs/pale-blue-dot.vtt",
            kind: "subtitles",
            srclang: "en",
            label: "English",
            default: ""
          }
      ],
      theme: "../../jspm_packages/github/2fdevs/bower-videogular-themes-default@1.1.0/videogular.css",
      plugins: {
        poster: "http://www.videogular.com/assets/images/videogular.png"
      }
    };
  }
}

HomeCtrl.$inject =['$sce']

export { HomeCtrl }