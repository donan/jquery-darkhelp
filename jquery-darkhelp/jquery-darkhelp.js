//--------------------
// jquery-darkhelp - Help information system
// Automatic help descriptions system. Use custom data attributes to describe your application 
// Author: Pablo Carabantes
// Website: se32.com
//--------------------
/*
How to use it:
//--------------------
Load Jquery, and link the js and css of the plugin Call the function $().jqueryDarkhelp(); within the document ready.
Example:
	$(document).ready(function() {
		$().jqueryDarkhelp();
	});
If you dont like the button, you can manually activate the dialogs by using 2 different methods:
	$().jqueryDarkhelp({method:'show'});
	$().jqueryDarkhelp({method:'hide'});

Settings:
//--------------------
	selector - Current html property where the text comes from, you can change it to be an alt, title or whatever crazy property you like.
	button_top - Position of the button.
	button - true or false to show/hide the button.
	button_color - change the theme to one of the default ones: black, blue, red, green, brown, purple, invert.
	box_color - change the theme to one of the default ones: black, blue, red, green, brown, purple, invert.
	button_active_text - change the default text of the button. Use <br/> to break the line.
	button_deactive_text - change the default deactive text of the button. Use <br/> to break the line.
	method - init, show, hide
*/
(function($) {
	'use strict';
	$.fn.jqueryDarkhelp = function( options ) {
		var settings = $.extend({
			selector    			: 'data-hint',
			button_top				: '10%',
			button					: true,
			button_color			: 'blue',
			box_color				: 'black',
			button_active_text 		: 'Activate<br/>Help',
			button_deactive_text	: 'Deactivate<br/>Help',
			method					: 'init'
		}, options);
		var darkhelp_selector = settings.selector;
		var darkhelp_gizmos = $('<div class="darkhelp_toogle_bg" style="display:none"></div><a href="#" id="darkhelp_toogle_off" class="darkhelp_toogle darkhelp_'+settings.button_color+'" style="display:none;top:'+settings.button_top+'">'+settings.button_active_text+'<span><i></i></span></a><a id="darkhelp_toogle_on" class="darkhelp_toogle darkhelp_'+settings.button_color+'" href="#" style="display:none;top:'+settings.button_top+'" >'+settings.button_deactive_text+'<span><i></i></span></a>');
		switch (settings.method) {
		  case 'show':
			darkhelptoggle(0);
			break;
		  case 'hide':
			darkhelptoggle(1);
			break;
		  case 'init':
			init_hints();
			break;
		}
		
		$('body').on('click', '#darkhelp_toogle_off', function(){  darkhelptoggle(0);   return false; });
		$('body').on('click', '#darkhelp_toogle_on', function(){   darkhelptoggle(1);   return false; });		
		$(window).resize(function(){
			$('.darkhelp_toogle_bg').css({'height':($(document).height())+'px'});
			recalculate_darkhelp();
		});
			
		function darkhelptoggle(darkhelpstatus){
			if(darkhelpstatus === 0){
				if((settings.button) && (settings.method !=='show')&&(settings.method !=='hide')){
				$('#darkhelp_toogle_off').hide(0);
				$('#darkhelp_toogle_on').show(0);
				}
				$('.darkhelp_toogle_bg').css({'height':($(document).height())+'px'});
				$('.darkhelp_toogle_bg, .darkhelp_box').fadeIn(300);
				recalculate_darkhelp();
			}else{
				if((settings.button) && (settings.method !=='show')&&(settings.method !=='hide')){
				$('#darkhelp_toogle_off').show(0);
				$('#darkhelp_toogle_on').hide(0);
				}
				$('.darkhelp_toogle_bg, .darkhelp_box').fadeOut(200);
			}
		}
		function init_hints(){
			if($('['+darkhelp_selector+']').length){
				darkhelp_gizmos.appendTo('body');
				if((settings.button) && (settings.method !=='show')&&(settings.method !=='hide')){
				$('#darkhelp_toogle_off').fadeIn(200);
				}
				$('['+darkhelp_selector+']').each(function() {
					var currenthint = $(this).attr(darkhelp_selector);
					$(this).prepend('<div class="darkhelp_box darkhelp_box_'+settings.box_color+'" style="display:none"><span>'+ currenthint + '</span></div>');
					recalculate_darkhelp();
				});
			}
		}
		function recalculate_darkhelp(){
			$('.darkhelp_box').each(function() {
				var darkhelp_pad_left = $(this).parent().css('padding-left').replace(/\D+$/g, '')* -1;
				var darkhelp_pad_right = $(this).parent().css('padding-right').replace(/\D+$/g, '')* -1;
				var darkhelp_pad_top = $(this).parent().css('padding-top').replace(/\D+$/g, '')* -1;
				var darkhelp_pad_bottom = $(this).parent().css('padding-bottom').replace(/\D+$/g, '')* -1;
				$(this).css( { "margin-left" : darkhelp_pad_left + "px", "margin-right" : darkhelp_pad_right+ "px" } );
				$(this).css( { "margin-top" : darkhelp_pad_top + "px", "margin-bottom" : darkhelp_pad_bottom+ "px" } );
				var darkhelp_width = $(this).parent().innerWidth();
				var darkhelp_height = $(this).parent().innerHeight();
				$(this).css('width', darkhelp_width + 'px');
				$(this).css('height', darkhelp_height + 'px');
			});
		}
	};
}(jQuery));