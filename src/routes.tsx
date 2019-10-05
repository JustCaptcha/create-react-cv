import React from 'react'
import { mount, route } from 'navi';
import Main from './Pages/Main';

export const routes =
  mount({
      '/': route({
          title: "Home page CV",
          view: <Main />
      })
  });