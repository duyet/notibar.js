![](example.png)

# Notibar.js
Lightweight notification bar, no dependency.

```html
<script type="text/javascript" src="//duyet.github.io/notibar.js/notibar.min.js"></script>
<script type="text/javascript">
	notiBar('<strong>notibar.js</strong> by <a href="http://duyet.net">duyet</a>  :))');
</script>
```

See example: https://duyet.github.io/notibar.js/example.html

# Installation 

1. CDN
	```html
	<script src="//cdn.jsdelivr.net/notibar.js/1.0/notibar.min.js"></script>
	```

2. NPM

	```
	npm install --save notibar.js 
	```

3. Bower 

	```
	bower install --save notibar
	```

# More options

```js
notiBar({
	message: '<strong>notibar.js</strong> by <a href="http://duyetdev.com">duyetdev</a>  :))',
	closeButton: true,
	font: 'sans-serif',
	fontSize: '13px',
	minHeight: '41px',
	color: '#2895F1',
	bgColor: '#f0f9ff',
	borderBottomColor: '#96c4ea',
});
```

# Build your own

Clone a copy of the  git repo by running:

```
git clone https://github.com/duyet/notibar.js
```

Enter the **notibar.js** directory and run the build script:

```
cd notibar.js && npm install
npm run build
```

# How to contribute

1. Fork the project on Github
2. Create a topic branch for your changes
3. Ensure that you provide documentation and test coverage for your changes (patches won’t be accepted without)
4. Create a pull request on Github (these are also a great place to start a conversation around a patch as early as possible)


# License

MIT License

Copyright (c) 2017 Van-Duyet Le

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
