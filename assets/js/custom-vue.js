new Vue({
	el: '#app',
	data() {
		return {
            test: 'Hello WOrld',
            links: {
            	dribbble: 'https://dribbble.com/tha_ui_guy_',
            	instagram: 'https://www.instagram.com/tha_ui_guy/',
            	behance: 'https://www.behance.net/ADENIRAN107812',
            	twitter: 'https://twitter.com/toons_hub',
            	email: 'adeniran.opeyemi.ao@gmail.com'
            },
            skills: [
			    {
			      'img': 'assets/images/icons/html.png',
			      'alt': 'HTML 5'
			    },
			    {
			      'img': 'assets/images/icons/css.png',
			      'alt': 'CSS 3'
			    },
			    {
			      'img': 'assets/images/icons/javascript.png',
			      'alt': 'Javascript'
			    },
			    {
			      'img': 'assets/images/icons/jquery.gif',
			      'alt': 'JQuery'
			    },
			    {
			      'img': 'assets/images/icons/bootstrap.png',
			      'alt': 'Bootstrap'
			    },
			    {
			      'img': 'assets/images/icons/mdb.png',
			      'alt': 'Material Design Bootstrap'
			    },
			    {
			      'img': 'assets/images/icons/material.png',
			      'alt': 'Google Material'
			    },
			    {
			      'img': 'assets/images/icons/vuejs.png',
			      'alt': 'Vuejs'
			    },
			    {
			      'img': 'assets/images/icons/angular.png',
			      'alt': 'Angular'
			    },
			    {
			      'img': 'assets/images/icons/ionic.png',
			      'alt': 'Ionic Framework'
			    },
			    {
			      'img': 'assets/images/icons/git.png',
			      'alt': 'Git'
			    },
			    {
			      'img': 'assets/images/icons/php.png',
			      'alt': 'PHP'
			    },
			    {
			      'img': 'assets/images/icons/codeigniter.png',
			      'alt': 'Codeigniter'
			    },
			    {
			      'img': 'assets/images/icons/figma.png',
			      'alt': 'Figma'
			    },
			    {
			      'img': 'assets/images/icons/coreldraw.png',
			      'alt': 'Coreldraw'
			    },
			    {
			      'img': 'assets/images/icons/xd.png',
			      'alt': 'Adobe XD'
			    },
			    {
			      'img': 'assets/images/icons/photoshop.png',
			      'alt': 'Photoshop'
			    },
			    {
			      'img': 'assets/images/icons/illustrator.png',
			      'alt': 'Illustrator'
			    },

			  ],
            experiences: [{
            	title: 'UI/UX | Frontend Developer',
            	company: 'Exolve Technologies',
            	period: '04/2017 - Current',
            	roles: [
		            	'Created wireframes, screen-flow diagrams and UI spec documentation.',
						'Produced websites compatible with multiple browsers.',
						'Conducted usability testing and post-deployment evaluations to measure user experience success.',
						'Developed site navigation by categorizing content and funneling traffic through content.',
						'Mentored interns in UX/UI Design Internship program.',
						'Designed images, icons, banners and audio enhancements.',
						'Completely updated and redesigned user experience for company website.',
						'Converted mockups into HTML, JavaScript, AJAX and JSON.'
	            	]
	            },
	            {
            	title: 'Graphics Designer',
            	company: 'Tosh Crea8ions - Lagos',
            	period: '05/2016 - 02/2017',
            	roles: [
		            	'Employed design fundamentals when selecting typography, composition, layout and color in design work.',
						'Used CorelDraw to create images and layouts.',
						'Built corporate brands by designing cohesive looks between elements such as logos and letterheads.',
						'Developed print materials such as brochures, banners and signs.',
						'Designed website layouts, templates and unique branded looks.',
						'Mentored new members of design staff during onboarding.',
						'Altered patterns to fit client requirements.',
						'Generated detailed specs of final designs.'

	            	]
	            },
	            {
            	title: 'Intern',
            	company: 'Zaimak Global Limited - Lagos',
            	period: '05/2016 - 02/2017',
            	roles: [
		            	'Assisted with the design of print materials such as flyers and ads.',
						'Generated computer graphics and page-layout software, graphic elements and photography.',
						'Formatted text and graphics for blog posts, newsletters and other materials.',
						'Updated computer graphic files using graphics software programs.',
						'Created various logos for products.'
	            	]
	            }
            ]
		};
    },
	mounted() {
		
    },
});