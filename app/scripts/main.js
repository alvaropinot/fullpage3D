'use strict';

$(function() {

	$.jmpress('template', 'icons', {
		children: function(idx) {
			//single slide effect
			return {r: 2500, phi: idx*40, rotateY: idx*140, scale: 0.5, rotateX: 9};

			//circular menu
			//return {r: 250, phi: idx*40, rotateY: idx*140, scale: 0.5, rotateX: 9};
		}
	});

	var config = {
		stepSelector: 'section',
		viewPort: {
			width: 1300,
			maxScale: 1
		}
	};

	$('#simple').jmpress(config);

});
