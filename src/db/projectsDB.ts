import {getRepoUrl} from '@/lib/constants'

const projectsDB: TPortfolioItem[] = [
  {
    title: 'iExpense - React',
    desc: 'A bookkeeping single-page application built with React.ts and React Hooks.',
    url: getRepoUrl('iExpense-react-website'),
    github: 'https://github.com/ReformedCola/iExpense-react',
    languages: ['React', 'TypeScript'],
    stars: 1
  },
  {
    title: 'iExpense - Vue',
    desc: 'A bookkeeping single-page application built with Vue.ts and Sass.',
    url: getRepoUrl('iExpense-vue-website'),
    github: 'https://github.com/ReformedCola/iExpense-vue',
    languages: ['Vue', 'TypeScript'],
    stars: 1
  },
  {
    title: 'Web Navigation',
    desc: 'A responsive navigation website implemented with JavaScript and jQuery.',
    url: getRepoUrl('webnav'),
    github: 'https://github.com/ReformedCola/webnav',
    languages: ['JavaScript'],
    stars: 1
  },
  {
    title: 'Pikachu',
    desc: 'Utilized jQuery, HTML5, CSS3 to draw a Pikachu on a web page.',
    url: getRepoUrl('pikachu'),
    github: 'https://github.com/ReformedCola/pikachu',
    languages: ['JavaScript'],
    stars: 1
  },
  {
    title: 'Quick SketchBook',
    desc: 'A sketchbook web application implemented with JavaScript and Canvas API.',
    url: getRepoUrl('quick-sketch-book'),
    github: 'https://github.com/ReformedCola/quick-sketch-book',
    languages: ['JavaScript'],
    stars: 1
  }
]

export default projectsDB
