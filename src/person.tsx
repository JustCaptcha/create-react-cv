import React from 'react';
import { GitHub } from 'react-feather';
import { Typography } from '@material-ui/core';
import { style, classes } from './person.st.css';

// [SVG] - import your own
import Vim from './static/svg/logos/vim.svg';
import VSCode from './static/svg/logos/visual-studio-code.svg';
import Linux from './static/svg/logos/linux-tux.svg';
import ReactSvg from './static/svg/logos/react.svg';

/*
   all user data, rewrite by filling your personal data
*/
export const person = {
   fullname: 'John Doe',
   position: 'Front-end developer',
   social: {
      phone: '+44 777 555 777',
      email: 'email@google.com',
      /* you can get link icon by giving appropriate name from this array:
        ['Site', 'GitHub', 'GitLab', 'Linkedin', 'Facebook', 'Twitter', 'Slack', 'Codepen']
        if title will be different, then Link icon will be used
      */
      links: [
         {
            title: 'Site',
            url: 'https://yourwebsite.com'
         },
         {
            title: 'Linkedin',
            url: 'https://www.linkedin.com/in/your_profile'
         },
         {
            title: 'Codepen',
            url: 'https://codepen.io/your_profile'
         },
         {
            title: 'GitHub',
            url: 'https://github.com/your_profile'
         },
         {
            title: 'Twitter',
            url: 'https://twitter.com/your_profile'
         },
         {
            title: 'FaceBook',
            url: 'https://facebook.com/your_profile'
         }
         // add more if you want
      ],
   },

   summary: [
      (<Typography className={style(classes.root)} variant='body1'>
         Versatile Full-stack Developer with 15+ years of experience designing, developing, and managing complex sites and internal frameworks. Specializes in React and responsive design.
      </Typography>)
      // add more if you want
   ],

   technologies: [
      {
         title: 'front-end',
         stack: ['HTML5', 'CSS3', 'SASS', 'Stylable', 'BEM', 'Material-ui', 'JQuery', 'React', 'Redux', 'Vue', 'Apollo-client', 'GraphQl', 'Three.js' ]
      },
      {
         title: 'back-end',
         stack: ['Node.js', 'Express.js', 'Nest.js', 'Typeorm', 'Prisma2', 'Apollo-server', 'Socket.io']
      },
      {
         title: 'databases',
         stack: ['Postgres', 'MongoDB', 'MySQL']
      },
      {
         title: 'tools',
         stack: ['git', 'npm', 'yarn', 'webpack', 'babel']
      },
      {
         title: 'environment',
         stack: ['Linux', 'Visual Studio Code', 'Vim']
      }
      // add more if you want
   ],

   languages: [
      {
         language: 'Klingon',
         lvl: 'Native',
      },
      {
         language: 'English',
         lvl: 'Fluent'
      },
      {
         language: 'Japanese',
         lvl: 'B1'
      }
      // add more if you want
   ],

   experience: [
      {
         company: 'Google',
         link: 'https://google.com/',
         position: 'Fullstack developer',
         date: '2017-2019',
         location: 'USA, SA',
         text: [
            (
               <Typography variant='body1'>
                 Hard worked with internal frameworks to make them better. 
               </Typography>
            ),
         ],
         list: [
            ('Made things done'),
            ('Developed a secret internal algorithm'),
         ]
      },
      {
         company: 'Valve',
         link: 'https://steampowered.com/',
         position: 'Back-end developer',
         date: '2012-2017',
         location: 'Bellevue, Washington',
         text: [
            (
               <Typography variant='body1'>Worked with internal servers.</Typography>
            ),
         ],
         list: [
            ('Redesigned and improved main site'),
            ('Developed several internal apps'),
         ]
      },
      // add more if you want
   ],

   projects: [
      {
         title: 'Project - 1',
         url: '#',
         description: 'Project description'
      },
      {
         title: 'Project - 2',
         url: '#',
         description: 'Project description'
      },
      // add more if you want
   ],

   education: [
      {
         university: 'University of Phoenix',
         location: 'Unites States',
         subject: 'Web development',
         date: '2010',
         degree: 'Master',
      },
      // add more if you want
   ],

   certificates: [
      {
         title: 'Certificate 1',
         link: '#'
      },
      {
         title: 'Certificate 2',
         link: '#'
      },
      // add more if you want
   ],

   // put your svg's here
   ILove: [ Linux, Vim, VSCode, ReactSvg],
}