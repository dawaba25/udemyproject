// src/data.js

export const COURSE_TABS_DATA = [
  {
    id: 'webdev',
    title: 'Web Development',
    headline: 'Build amazing things for the web.',
    description: 'Learn modern JavaScript frameworks like React and dive into full-stack development.',
    courses: [
      { id: 101, title: 'Full-Stack Web Dev Bootcamp', author: 'Dr. Angela Yu', rating: 4.7, reviews: '457,455', currentPrice: '$13.99', originalPrice: '$124.99', bestseller: true, },
      { id: 102, title: 'React - The Complete Guide', author: 'Maximilian Schwarzmüller', rating: 4.6, reviews: '500,000', currentPrice: '$14.99', originalPrice: '$139.99', bestseller: true, },
    ],
  },
  {
    id: 'python',
    title: 'Python',
    headline: 'Expand your career opportunities with Python.',
    description: 'Master Python for data science and automation.',
    courses: [
      { id: 201, title: '100 Days of Code: Python Pro Bootcamp', author: 'Dr. Angela Yu', rating: 4.7, reviews: '400,208', currentPrice: '$13.99', originalPrice: '$129.99', bestseller: true, },
    ],
  },
  {
    id: 'datascience',
    title: 'Data Science',
    headline: 'Future-proof your career.',
    description: 'Master data analysis tools like SQL, Tableau, and Machine Learning.',
    courses: [
      { id: 301, title: 'The Data Science Course 2024', author: 'Kirill Eremenko', rating: 4.5, reviews: '150,000', currentPrice: '$15.99', originalPrice: '$149.99', bestseller: false, },
    ],
  },
];

export const TRUSTED_COMPANIES_DATA = [
  
];

export const NAV_DATA = {
    businessLink: 'Udemy Business',
    loginText: 'Log in',
    signupText: 'Sign up'
};