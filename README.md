# Angular Directive for jQuery Lazy

This directive uses [jQuery Lazy plugin](http://jquery.eisbehr.de/lazy/index.php) under the hood.

## Usage

### Setup
Installing the plugin with bower:
```
bower install angular-jquery-lazy --save
```
or linking the minified source file manually:
```html
<script src="path/to/angular.jquery.lazy.min.js"></script>
```
### Adding plugin to Angular module dependency
```js
angular.module('directivesFunApp', ['angular.lazyimg']);
```

### Using it in your view
```html
<lazy-img src="http://upload.wikimedia.org/wikipedia/commons/1/1a/Bachalpseeflowers.jpg" alt="Beach image" class="test"></lazy-img>
```
Note: the directive needs the src attribute. All other attributes are simply copied from the directive to the generated img tag.

## Options
```
$scope.lazyOptions = {
    effect: 'show',
    effectTime: 2000
};
```
Note: You can overwrite all default properties. [Here](http://jquery.eisbehr.de/lazy/index.php?c=full) you can find all options.

## Dealing with events
```js
$scope.$on('ImgLazyLoaded', function(event, element) {
    // catching the event when an image has been successfully loaded.
});

$scope.$on('ImgNotLazyLoaded', function(event, element) {
    // catching the event when an image could not be loaded.
});
```

Contact me if you have any further questions. 