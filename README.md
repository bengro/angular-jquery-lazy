# Angular Directive for jQuery Lazy

This directive uses [jQuery Lazy plugin](http://jquery.eisbehr.de/lazy/index.php) under the hood.


## Installation
Installing the plugin with bower:
```
bower install angular-jquery-lazy --save
```
or linking the minified source file manually:
```html
<script src="path/to/angular.jquery.lazy.min.js"></script>
```

Then you need to add the dependency to your angular module.
```js
angular.module('directivesFunApp', ['angular.lazyimg']);
```

## Usage
```html
<lazy-img src="http://upload.wikimedia.org/wikipedia/commons/1/1a/Bachalpseeflowers.jpg" alt="Beach image" class="test"></lazy-img>
```
Note: the directive needs the src attribute. All other attributes are simply copied from the directive to the generated img tag.

## Options
In your controller you can define the lazyOptions object to overwrite the default behaviour. [Here](http://jquery.eisbehr.de/lazy/index.php?c=full) you can find all options.
```
$scope.lazyOptions = {
    effect: 'show',
    effectTime: 2000
};
```

## Catching Events
```js
$scope.$on('ImgLazyLoaded', function(event, element) {
    // catching the event when an image has been successfully loaded.
});

$scope.$on('ImgNotLazyLoaded', function(event, element) {
    // catching the event when an image could not be loaded.
});
```

Contact me if you have any further questions. 
