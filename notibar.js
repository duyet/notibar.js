Object.prototype.extend = function(obj) {
   for (var i in obj) {
      if (obj.hasOwnProperty(i)) {
         this[i] = obj[i];
      }
   }

   return this;
};

function notiBar (opt) {
	if (typeof opt == 'string') opt = { 'message': opt }

	var settings = {
		'message': '',
		'closeButton': false,
		'font': 'sans-serif',
		'fontSize': '13px',
		'minHeight': '41px',

	}.extend(opt);

	var noti_container = document.createElement('div');
	noti_container.id = 'duyetdev-top-notification-bar-container';
	var noti_msg = document.createElement('div');
	noti_msg.className = 'top-notification-bar';
	noti_msg.innerHTML = settings.message;

	noti_container.appendChild(noti_msg);

	var css = "#duyetdev-top-notification-bar-container { \
		background-color: #f0f9ff; \
		border-bottom: 1px solid #96c4ea; \
		display: block; \
		position: fixed; \
		top: 0; \
		left: 0; \
		z-index: 9; \
		width: 100%; \
		min-height: 41px; \
		width: 100%; \
		line-height: 11px; \
	} \
	#duyetdev-top-notification-bar-container div.top-notification-bar { \
		text-align: center; \
		padding-top: 15px; \
		color: #2895F1; \
	} \
	#duyetdev-top-notification-bar-container div.top-notification-bar a { \
		color: #2895F1; \
	}";

	css += '#duyetdev-top-notification-bar-container { '
		+ 'min-height: ' + parseFloat(settings.minHeight) + 'px;'
		+ 'font-size: ' + parseFloat(settings.fontSize) + 'px;'
		+' }';

	css += '#duyetdev-top-notification-bar-container div.top-notification-bar { '
		+ 'font-family: ' + settings.font + ';'
		+ 'font-size: ' + parseFloat(settings.fontSize) + 'px;'
		+' }';

	document.addEventListener("DOMContentLoaded", function(event) { 
		var body = document.body || document.getElementsByTagName('body')[0];
		var head = document.head || document.getElementsByTagName('head')[0];

		var style = document.createElement('style');
		style.type = 'text/css';
		if (style.styleSheet){
			style.styleSheet.cssText = css;
		} else {
			style.appendChild(document.createTextNode(css));
		}

		head.appendChild(style);
		body.appendChild(noti_container);
	});
}