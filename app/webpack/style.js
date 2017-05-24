require('../scss/style.scss');
require('../scss/loading.scss');

$(document).ready(function() {

	/**
	 * Onepage scroll
	 */ 
	$('#fullpage').fullpage({
		autoScrolling: true,
		scrollBar:true,
		anchors: ['section-1', 'section-2', 'section-3', 'section-4', 'section-5', 'section-6'],
		menu: '#menu'
	});

	/**
	 *	Scroll animation
	 */
	window.sr = ScrollReveal();

	/***
	 * Section 1
	 */
	sr.reveal('.text-big h2', { 
		reset: true,
		origin: 'top',
		distance: '20px',
	});
	sr.reveal('.text-big p', { 
		reset: true,
		origin: 'bottom',
		distance: '20px',
	});
	sr.reveal('.intro-text', { 
		reset: true,
		origin: 'left',
		distance: '20px',
	});
	sr.reveal('.btn-apply', { 
		reset: true,
		origin: 'right',
		distance: '20px',
	});

	/***
	 * Section 2
	 */
	 sr.reveal('.section-2 .js-fri-green', { 
		reset: true,
		origin: 'left',
		distance: '100px',
	});

	sr.reveal('.section-2 .fruit', { 
		reset: true,
		origin: 'right',
		distance: '60px',
	});

	sr.reveal('.section-2 .hand-phone', { 
		reset: true,
		opacity: 0,
		scale: 0.5,
	});

	/***
	 * Section 3
	 */
	 sr.reveal('.section-3 .js-fri-white', { 
		reset: true,
		origin: 'right',
		distance: '20px',
	});

	/***
	 * Section 4
	 */
	 sr.reveal('.section-4 .js-fri-green', { 
		reset: true,
		origin: 'left',
		distance: '20px',
	});

	/***
	 * Section 5
	 */
	 sr.reveal('.section-5 .js-fri-white', { 
		reset: true,
		origin: 'right',
		distance: '20px',
	});

	/***
	 * Section 6
	 */
	 sr.reveal('.section-6 .js-fri-green', { 
		reset: true,
		origin: 'top',
		distance: '60px',
	});

	console.log("dzo");
});