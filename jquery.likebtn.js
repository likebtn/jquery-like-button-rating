/*
* LikeBtn - jQuery Like Button Rating Plugin
* Version: 1.0.0
* Settings: https://likebtn.com/en/settings
* 
* https://likebtn.com/en/jquery-like-button-rating
*/
(function($) {

    $.fn.likebtn = function(options) {
 
        var settings = $.extend({}, $.fn.likebtn.defaults, options);

        // Load code
		if (typeof(LikeBtn) == "undefined" && !$("#likebtn_wjs").size()) {
			var a = document.createElement('script');
			var m = d.getElementsByTagName('script')[0];
			a.async = 1;
			a.id = "likebtn_wjs";
			a.src = '//w.likebtn.com/js/w/widget.js';
			m.parentNode.insertBefore(a, m);
		} else {
			processButtons(this, settings);
		}

        return this;
    };

    function processButtons(obj, settings) {
    	if (typeof(LikeBtn) == "undefined") {
    		return;
    	}

		obj.each(function() {
        	var el = $(this);
        	if (settings.identifier == '' && el.attr('data-identifier') == '') {
        		log('data-identifier for the the following element not set, using page URL as Like button name: ', el);
        	}
        	// Apply settings to element
        	LikeBtn.apply(el[0], settings, ['identifier', 'site_id']);
        });
    }
	function log(msg, object) {
        window.console && window.console.log("jQuery LikeBtn: " + msg);
        if (typeof(object) !== "undefined") {
            window.console && window.console.log(object);
        }
    }

    $.fn.likebtn.defaults = {

    };
 
}( jQuery ));

(function(d,e,s){if(d.getElementById("likebtn_wjs"))return;a=d.createElement(e);m=d.getElementsByTagName(e)[0];a.async=1;a.id="likebtn_wjs";a.src=s;m.parentNode.insertBefore(a, m)})(document,"script","//w.likebtn.com/js/w/widget.js");