import boxImg from '../assets/img/box.jpg';
//Photo by Jonny Caspari on Unsplash
import madefreshImg from '../assets/img/madefresh.jpg';
// Photo by LoboStudio Hamburg on Unsplash
import donutsImg from '../assets/img/donuts.jpg';
// Photo by Jonathan Gallegos on Unsplash
import coffeeImg from '../assets/img/coffee.jpg';

export const PROMOTIONS = [
    {
        id: 0,
        name: 'Dozens of donut selections',
        image: donutsImg,
        featured: true,
        description:
            'Made from scratch daily, the donuts here at our shop are on a mission to satisfy you and your familys tasty cravings… just the way you like it!'
    },
    {
        id: 1,
        name: 'Get your freshh Coffee',
        image: coffeeImg,
        featured: true,
        description:
            'Coffee to donut is like jelly to peanut butter. You can have them separately, but whats the point? Grab a cup of our freshly roasted coffee with your donut, kick back, and relax!.'
    },
    {
        id: 2,
        name: 'Bootstrap Teardown',
        image: boxImg,
        featured: false,
        description: `In this weekend workshop, we'll rebuild your bootstraps from scratch, so you're ready for next-level excursions.`
    },
    {
        id: 3,
        name: 'Asynchronous Rendezvous',
        image: madefreshImg,
        featured: false,
        description:
            'Meet up with your guide at the top of Promise Mountain. Or, try to. Good luck!'
    }
];
