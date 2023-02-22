import { SiOpenaigym } from 'react-icons/si';
import { GiProgression } from 'react-icons/gi';
import { CiCircleInfo } from 'react-icons/ci';
import { CgGym } from 'react-icons/cg';
import { ImUsers } from 'react-icons/im';

export const links = [
  {
    name: 'Home',
    path: '/',
  },
  {
    name: 'About',
    path: '/about',
  },
  {
    name: 'Gallery',
    path: '/gallery',
  },
  {
    name: 'Plans',
    path: '/plans',
  },
  {
    name: 'Trainers',
    path: '/trainers',
  },
  {
    name: 'Contact',
    path: '/contact',
  },
];

export const programs = [
  {
    id: 1,
    icon: <SiOpenaigym />,
    title: 'Week One',
    info: 'You’ll begin the program with a full-body training split, meaning you’ll train all major bodyparts in each workout.',
    path: '/programs/111',
  },
  {
    id: 2,
    icon: <SiOpenaigym />,
    title: 'Week Two',
    info: 'You’ll begin to train different bodyparts on different days with a two-day training split.train a four days this week.',
    path: '/programs/222',
  },
  {
    id: 3,
    icon: <SiOpenaigym />,
    title: 'Week Three',
    info: 'Train all “pushing” bodyparts (chest, shoulders, triceps) for the following days. you train each bodypart twice a week',
    path: '/programs/333',
  },
  {
    id: 4,
    icon: <SiOpenaigym />,
    title: 'Week Four',
    info: 'you’ll train four days in a four-way split that hits each bodypart just once. which you done in the past week days.',
    path: '/programs/444',
  },
];

export const values = [
  {
    id: 1,
    icon: <ImUsers />,
    title: 'Authentic Relationship',
    desc: 'Serving the MSF is our top Priority. Engaging in members lives and building real and altrustic relationship comes natural to our MSF staff.',
  },
  {
    id: 2,
    icon: <CgGym />,
    title: 'Work hard,Play hard',
    desc: 'MSF apppreciates the importance of hard Work but we also have playful side should be fun and our goal is to provide that experience to our members',
  },
  {
    id: 3,
    icon: <CiCircleInfo />,
    title: 'Integrity and Respect',
    desc: 'We will conduct our business with honesty and treat all staff members and guest with respect.Our values will guide us to make the right decissions.',
  },
  {
    id: 4,
    icon: <GiProgression />,
    title: 'Progress is a Process',
    desc: 'It all starts with the right mindset and incorporates how you define your goals, what habits you build for consistency, and how often you measure progress.',
  },
];

export const faqs = [
  {
    id: 1,
    question: 'How often should I exercise?',
    answer:
      'Consectetur adipisicing elit. Non ipsa dolorem, rem consequatur eum omnis ex, fuga temporibus qui nesciunt odio aliquam commodi culpa inventore ut similique repellendus perferendis sint!',
  },
  {
    id: 2,
    question: 'What time of day is best to work out?',
    answer:
      'Distinctio nihil blanditiis accusantium atque, quo maxime inventore eum! Cum dolorem quibusdam amet et qui. Eos, omnis beatae? Quas, est at! Molestiae quidem ab soluta exercitationem culpa nostrum iusto illum qui non a harum deserunt atque commodi at velit.',
  },
  {
    id: 3,
    question: 'How long should my workouts be?',
    answer:
      'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.',
  },
  {
    id: 4,
    question: 'Do I need to warm up before my workouts?',
    answer:
      'Molestiae quidem ab soluta exercitationem culpa nostrum iusto illum qui non a harum deserunt atque commodi at velit, consequatur quibusdam dignissimos cum labore possimus placeat consectetur nisi cupiditate? Qui totam est omnis dolor nobis quisquam veritatis a!',
  },
  {
    id: 5,
    question: 'Should I do strength training, cardio or both?',
    answer:
      'Maiores fuga, cum praesentium esse laudantium! Distinctio nihil blanditiis accusantium atque, quo maxime inventore eum! Cum dolorem quibusdam amet et qui.',
  },
  {
    id: 6,
    question: 'Should I lift weights for strength training?',
    answer:
      'Quas, est at! Molestiae quidem ab soluta exercitationem culpa nostrum iusto illum qui non a harum deserunt atque commodi at velit, consequatur quibusdam dignissimos cum labore possimus placeat consectetur nisi cupiditate.',
  },
];

export const testimonials = [
  {
    id: 1,
    name: 'Sachin V Dasar',
    quote:
      'I don’t count my sit-ups. I only start counting when it starts hurting because they’re the only ones that count.',
    job: 'Student',
    avatar: require('./images/avatar1.png'),
  },
  {
    id: 2,
    name: 'Nitin Doddamani',
    quote:
      'I hated every minute of training, but I said, ‘Don’t quit. Suffer now and live the rest of your life as a champion.',
    job: 'Embaded Engineer',
    avatar: require('./images/avatar2.png'),
  },
  {
    id: 3,
    name: 'Edem Quist',
    quote:
      'The mind is the most important part of achieving any fitness goal. Mental change always comes before physical change',
    job: 'University Lecturer',
    avatar: require('./images/avatar3.jpg'),
  },
  {
    id: 4,
    name: 'Mahadev Rashinkar',
    quote:
      'Your health account, your bank account, they’re the same thing. The more you put in, the more you can take out.',
    job: 'R & D Engineer',
    avatar: require('./images/avatar4.png'),
  },
  {
    id: 5,
    name: 'Vinayak Mane',
    quote:
      'Your health account, your bank account, they’re the same thing. The more you put in, the more you can take out.',
    job: 'Software Developer',
    avatar: require('./images/avatar5.png'),
  },
];

export const plans = [
  {
    id: 1,
    name: 'Silver Package',
    desc: 'This package is perfect for beginners who need constant help',
    price: -499,
    features: [
      { feature: 'First Feature', available: true },
      { feature: 'Second Feature', available: true },
      { feature: 'Third Feature', available: true },
      { feature: 'Fourth Feature', available: true },
      { feature: 'Fifth Feature', available: true },
      { feature: 'Fifth Feature Plus', available: false },
      { feature: 'Sixth Feature', available: false },
      { feature: 'Seventh Feature', available: false },
      { feature: 'Seventh Feature Plus', available: false },
      { feature: 'Eighth Feature', available: false },
      { feature: 'Ninth Feature', available: false },
      { feature: 'Tenth Feature', available: false },
      { feature: 'Eleventh Feature', available: false },
    ],
  },
  {
    id: 2,
    name: 'Gold Package',
    desc: 'This is the perfect package for beginners who know what their doing',
    price: -999,
    features: [
      { feature: 'First Feature', available: true },
      { feature: 'Second Feature', available: true },
      { feature: 'Third Feature', available: true },
      { feature: 'Fourth Feature', available: true },
      { feature: 'Fifth Feature', available: true },
      { feature: 'Fifth Feature Plus', available: true },
      { feature: 'Sixth Feature', available: true },
      { feature: 'Seventh Feature', available: true },
      { feature: 'Seventh Feature Plus', available: true },
      { feature: 'Eighth Feature', available: false },
      { feature: 'Ninth Feature', available: false },
      { feature: 'Tenth Feature', available: false },
      { feature: 'Eleventh Feature', available: false },
    ],
  },
  {
    id: 3,
    name: 'Platinum Package',
    desc: 'This package is perfect for busy people who need home service',
    price: -1499,
    features: [
      { feature: 'First Feature', available: true },
      { feature: 'Second Feature', available: true },
      { feature: 'Third Feature', available: true },
      { feature: 'Fourth Feature', available: true },
      { feature: 'Fifth Feature', available: true },
      { feature: 'Fifth Feature Plus', available: true },
      { feature: 'Sixth Feature', available: true },
      { feature: 'Seventh Feature', available: true },
      { feature: 'Seventh Feature Plus', available: true },
      { feature: 'Eighth Feature', available: true },
      { feature: 'Ninth Feature', available: true },
      { feature: 'Tenth Feature', available: true },
      { feature: 'Eleventh Feature', available: true },
    ],
  },
];

const Trainer1 = require('./images/trainer1.jpg');
const Trainer2 = require('./images/trainer2.jpg');
const Trainer3 = require('./images/trainer3.jpg');
const Trainer4 = require('./images/trainer4.jpg');
const Trainer5 = require('./images/trainer5.jpg');
const Trainer6 = require('./images/trainer6.jpg');

export const Trainers = [
  {
    id: 1,
    image: Trainer1,
    name: 'John Doe',
    job: 'Aerobic Trainer',
    socials: [
      'https://instagram.com/',
      'https://twitter.com/',
      'https://facebook.com/',
      'https://linkedin.com/',
    ],
  },
  {
    id: 2,
    image: Trainer2,
    name: 'Daniel vinyo',
    job: 'Speed Trainer',
    socials: [
      'https://instagram.com/',
      'https://twitter.com/',
      'https://facebook.com/',
      'https://linkedin.com/',
    ],
  },
  {
    id: 3,
    image: Trainer3,
    name: 'Edem Quist',
    job: 'Flexibility Trainer',
    socials: [
      'https://instagram.com/',
      'https://twitter.com/',
      'https://facebook.com/',
      'https://linkedin.com/',
    ],
  },
  {
    id: 4,
    image: Trainer4,
    name: 'Shatta Wale',
    job: 'Body Composition Trainer',
    socials: [
      'https://instagram.com/',
      'https://twitter.com/',
      'https://facebook.com/',
      'https://linkedin.com/',
    ],
  },
  {
    id: 5,
    image: Trainer5,
    name: 'Diana Ayi',
    job: 'Circuit Trainer',
    socials: [
      'https://instagram.com/',
      'https://twitter.com/',
      'https://facebook.com/',
      'https://linkedin.com/',
    ],
  },
  {
    id: 6,
    image: Trainer6,
    name: 'Wayne Carter',
    job: 'Physical Intelligence Trainer',
    socials: [
      'https://instagram.com/',
      'https://twitter.com/',
      'https://facebook.com/',
      'https://linkedin.com/',
    ],
  },
];
