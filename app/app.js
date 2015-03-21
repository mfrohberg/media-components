import angular from 'angular';
import sanitize from  'angular-sanitize';
import angular_semantic from 'angularify/angular-semantic-ui';
import videogular from 'videogular';
import controls from 'videogular-controls';
import overlayplay from 'videogular-overlay-play';
import poster from 'videogular-poster'
import * as HomeModule from './home/home.module';

console.log(angular.version)

angular.module('media-components', [
                'ngSanitize',
                "com.2fdevs.videogular",
                "com.2fdevs.videogular.plugins.controls",
                "com.2fdevs.videogular.plugins.overlayplay",
                "com.2fdevs.videogular.plugins.poster",
                'angularify.semantic',

               ])
  .controller('homeCtrl', HomeModule.ctrl)