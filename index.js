let articleSection = document.querySelector('.article__box');
let featureSection = document.querySelector('.feature__box');

const articleObserver = new IntersectionObserver(
	entry => {
		gsap.set('.article__box', {
			opacity: 0,
			y: '100'
		});

		if (entry[0].isIntersecting) {
			gsap.to('.article__box', {
				opacity: 1,
				y: '0',
				duration: 0.6,
				stagger: 0.1
			});
		}
	},
	{
		root: null,
		rootMargin: '0px',
		threshold: 0.125
	}
);

articleObserver.observe(articleSection);

const featureObserver = new IntersectionObserver(
	entries => {
		gsap.set('.feature__box', {
			opacity: 0,
			x: '100'
		});
		if (entries[0].isIntersecting)
			[
				gsap.to('.feature__box', {
					opacity: 1,
					x: '0',
					duration: 0.8,
					stagger: 0.2
				})
			];
	},
	{
		root: null,
		rootMargin: '2px',
		threshold: 0.125
	}
);

featureObserver.observe(featureSection);

// header animations
let tl = gsap.timeline();

tl.from('.nav', {
	opacity: 0,
	y: -100,
	duration: 0.8
})
	.from('.header__image-box', {
		opacity: 0,
		x: 100,
		duration: 0.6,
		delay: -0.2
	})
	.from(['.header__text-box h1', '.header__text-box p', '.header__text-box button'], {
		opacity: 0,
		y: 100,
		duration: 0.6,
		delay: -0.2,
		stagger: 0.2,
		ease: 'power1.out'
	});
