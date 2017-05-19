// JavaScript 
'use strict';

var main = function()
	{
		
		// main menu click
		
		$('.menuButton').click(function() {
			if($('.navMenu').hasClass('active') === false) {
				$('.navMenu').addClass('active');
			} else {
				$('.navMenu').removeClass('active');
			}
		});
		$('#me').click(function() {
			if($('.bioSection').hasClass('activeSelection') === false) {
				$('.bioSection').siblings('.activeSelection').removeClass('activeSelection');
				$('.bioSection').addClass('activeSelection');
			}
			$('.navMenu').removeClass('active');
			$('.logoMenu').children('.selected').removeClass('selected');
			$('.logoSupport.active').removeClass('active');
		});
		$('#designs').click(function() {
			if($('.logoMenu').hasClass('activeSelection') === false) {
				$('.logoMenu').siblings('.activeSelection').removeClass('activeSelection');
				$('.logoMenu').addClass('activeSelection');
			}
			$('.navMenu').removeClass('active');
			$('.logoMenu').children('.selected').removeClass('selected');
			$('.logoSupport.active').removeClass('active');
		});
		$('#contact').click(function() {
			if($('.contactSection').hasClass('activeSelection') === false) {
				$('.contactSection').siblings('.activeSelection').removeClass('activeSelection');
				$('.contactSection').addClass('activeSelection');
			}
			$('.navMenu').removeClass('active');
			$('.logoMenu').children('.selected').removeClass('selected');
			$('.logoSupport.active').removeClass('active');
		});
		$('#home').click(function() {
			if($('.logoSplash').hasClass('activeSelection') === false) {
				$('.logoSplash').siblings('.activeSelection').removeClass('activeSelection');
				$('.logoSplash').addClass('activeSelection');
			}
			$('.navMenu').removeClass('active');
			$('.logoMenu').children('.selected').removeClass('selected');
			$('.logoSupport.active').removeClass('active');
		});
		
		// logo menu click
		
		$('.cardTitle').click(function() {
			if($(this).parent().hasClass('selected') === false) {
				$(this).parent().siblings('.selected').removeClass('selected');
				$(this).parent().addClass('selected');
				$('.logoSupport.active').removeClass('active');
			} else if($(this).parent().hasClass('selected')) {
				$(this).parent().removeClass('selected');
				$('.logoSupport.active').removeClass('active');
			}
		});
		
		// logo support click
		
		$('.logoSupport').click(function() {
			if($(this).hasClass('active') === false) {
				$(this).siblings('.active').removeClass('active');
				$(this).addClass('active');
			} else {
				$(this).removeClass('active');
			}
		});
		
		// splash click
		
		$('.pLogo').click(function() {
			if($('.forwards').hasClass('active') === false) {
				$('.forwards').addClass('active');
				$('.backwards').removeClass('active');
			} else {
				$('.backwards').addClass('active');
				$('.forwards').removeClass('active');				
			}
		});
	};

$(document).ready(main);