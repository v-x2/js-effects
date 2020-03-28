
![NPM Package](https://badgen.net/npm/v/v2-js-effects)
![License](https://badgen.net/npm/license/v2-js-effects)
![Minified Size](https://badgen.net/bundlephobia/min/v2-js-effects)
![Gzipped Size](https://badgen.net/bundlephobia/minzip/v2-js-effects)


# V2 Javascript Effects

V2 JS Effect is just another library that provides additional effects such as parallax.
It's quite simple so far and it doesn't do much, but if you want to collaborate in enhancing it I would be happy.

## Required

- Jquery (any version)


## Setup

If you are using npm:
```
npm install v2-js-effects --save
```

If you're old school, just add at the end of the `body` tag in your HTML page
```html
<script src="v2-js-effects.min.js"></script>
```
## Usage

The basic usage is:
```html
<div class="box-1">
  I'm a default box that will move! Wah!
</div>
<script src="v2-js-effects.min.js"></script>
<script>

  window.onload = function(){

      V2(".box-1").add('parallax');

  };
</script>
```

You can eventually add more options such as speed or directions (left, right, top, bottom, top-left, top-right, ...)
```javascript
V2(".box-1")
    .add('parallax',
        {
            direction: 'left',
            speed: 1.2
        }
);
```

## Development
This library is still under development, more features will come...

## Changelog

## License

This library is released under Apache 2.0 license.