System.config({
  "baseURL": "/",
  "transpiler": "babel",
  "paths": {
    "*": "*.js",
    "github:*": "jspm_packages/github/*.js"
  }
});

System.config({
  "map": {
    "angular": "github:angular/bower-angular@1.3.15",
    "angular-sanitize": "github:angular/bower-angular-sanitize@1.3.15",
    "angularify/angular-semantic-ui": "github:angularify/angular-semantic-ui@0.0.2",
    "semantic-ui": "github:Semantic-Org/Semantic-UI@1.11.4",
    "videogular": "github:2fdevs/bower-videogular@1.1.0",
    "videogular-buffering": "github:2fdevs/bower-videogular-buffering@1.1.0",
    "videogular-controls": "github:2fdevs/bower-videogular-controls@1.1.0",
    "videogular-overlay-play": "github:2fdevs/bower-videogular-overlay-play@1.1.0",
    "videogular-poster": "github:2fdevs/bower-videogular-poster@1.1.0",
    "videogular-themes-default": "github:2fdevs/bower-videogular-themes-default@1.1.0",
    "github:angular/bower-angular-sanitize@1.3.15": {
      "angular": "github:angular/bower-angular@1.3.15"
    }
  }
});

