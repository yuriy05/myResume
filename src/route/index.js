// Підключаємо технологію express для back-end сервера
const { transformFileSync } = require('@babel/core')
const express = require('express')
// Cтворюємо роутер - місце, куди ми підключаємо ендпоїнти
const router = express.Router()

// ================================================================
var header = {
  name: {
    firstName: 'Yurii',
    lastName: 'Dilai',
  },
  position: 'Junior Fullstack JS Developer',
  salary: '600$ в місяць',
  address: 'Lviv, Lviv oblast, Ukraine',
}

var footer = {
  social: {
    email: {
      text: 'dilayyura@gmail.com',
      href: 'mailto:dilayyura@gmail.com',
    },
    phone: {
      text: '+380984863570',
      href: 'tel:+380984863570',
    },
    linkedin: {
      text: 'LinkedIn',
      href: 'https://www.linkedin.com',
    },
  },
}

var educations = [
  {
    name: 'Secondary education: School №90 Lviv',
    isEnd: true,
  },
  {
    name: 'Higher education: Lviv Polytechnic National University',
    isEnd: false,
  },
]

var courses = [
  {
    name: 'Start IT',
  },
  {
    name: 'IT Brains',
  },
]

var certificates = [
  {
    name: 'First Certificate',
    id: 11111,
  },
  {
    name: 'Second Certificate',
    id: 22222,
  },
  {
    name: 'Third Certificate',
    id: 33333,
  },
]

var hobbies = [
  {
    name: 'Programming',
    isMain: true,
  },
  {
    name: 'Sport',
    isMain: true,
  },
  {
    name: 'Music',
    isMain: false,
  },
]

// ================================================================

// router.get Створює нам один ентпоїнт

//           ↙ тут вводимо шлях (PATH) до сторінки
router.get('/', function (req, res) {
  // res.render генерує нам HTML сторінку

  //            ↙ cюди вводимо назву файлу з сontainer
  res.render('index', {})
})

// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/summary', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('summary', {
    page: {
      title: 'Resume',
    },

    header,

    main: {
      summary: {
        title: 'Summary',
        text: `Open-minded for new technologies, with 1 years of experience in development. Whenever I start to
            work on a new project I learn the domain and try to understand the idea of the project. Good team
            player, every colleague is a friend to me.`,
      },
      experience: {
        title: 'Experience',
        text: `Pet project for parsing sport betting data from different platforms ( odds ) and sport statistics (
              tournament position, goals etc), analyzing by simple mathematics models and preparing probability
              for such events like: money line - first win / draw / second win, totals etc.`,
      },
    },

    footer,
  })
})

// ================================================================

// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/skills', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('skills', {
    page: {
      title: 'Skills',
    },

    header,

    main: {
      skills: [
        {
          name: 'HTML',
          lvl: 10,
          isTop: true,
        },
        {
          name: 'Handlebars',
          lvl: 10,
          isTop: true,
        },
        {
          name: 'VS Code & NPM',
          lvl: 7,
        },
        {
          name: 'GIT & Terminal ',
          lvl: 7,
        },
        {
          name: 'React.js',
          lvl: 0,
        },
        {
          name: 'PHP',
          lvl: null,
        },
      ],
      hobbies,
    },

    footer,
  })
})

// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/education', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('education', {
    page: {
      title: 'Education',
    },

    header,

    main: {
      educations,
      courses,
      certificates,
    },
    footer,
  })
})

// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/work', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('work', {
    layout: 'big',
    page: {
      title: 'Work',
    },
    header,
    main: {
      works: [
        {
          position: 'Junior Fullstack Developer',
          company: {
            name: 'Google company',
            url: 'https://www.google.com/',
          },
          duration: {
            from: '05.05.2022',
            to: '05.05.2023',
          },
          projectAmmont: 1,
          projects: [
            {
              name: 'Resume',
              url: 'https://www.google.com.ai',
              about: 'AI for Google search',
              stackAmount: 5,
              stacks: [
                {
                  name: 'HTML | CSSS',
                },
                {
                  name: 'React.js',
                },
                {
                  name: 'Node.js',
                },
                {
                  name: 'Hadnlebars',
                },
              ],
              awardAmount: 2,
              awards: [
                {
                  name: 'Google 2022 Awards',
                },
                {
                  name: 'Best code of 2022 Awards',
                },
              ],
            },
          ],
        },
        {
          position: 'Trainee Fullstack Developer',
          company: {
            name: 'Meta',
            url: 'https://www.meta.com/',
          },
          duration: {
            from: '05.05.2022',
            to: null,
          },
          projectAmmont: 1,
          projects: [
            {
              name: 'VirtualAssistant',
              url: null,
              about: 'AI for Meta games',
              stackAmount: 5,
              stacks: [
                {
                  name: 'HTML | CSSS',
                },
                {
                  name: 'React.js',
                },
                {
                  name: 'Node.js',
                },
                {
                  name: 'Redux',
                },
              ],
              awardAmount: 1,
              awards: [
                {
                  name: 'Meta 2023 Awards',
                },
              ],
            },
          ],
        },
      ],
    },
    footer,
  })
})

// ================================================================

// Підключаємо роутер до бек-енду
module.exports = router
