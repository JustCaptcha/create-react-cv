import React from 'react';
import { classes, style } from './header.st.css';
import reactLogo from './logos/react.svg';
import stylableLogo from './logos/stylable.svg';
import { Social } from '../social/social';
import { Typography, Container } from '@material-ui/core';
import { person } from '../../person';

export const Header: React.FunctionComponent = props => (
    <header className={style(classes.header)} >
        <Container className={style(classes.root)}>
        <div className={style(classes.person)}>
        <Typography variant='h3' className={style(classes.name)}>{person.fullname}</Typography>
        <Typography color='secondary' variant='h4' className={style(classes.role)}>{person.position}</Typography>
        </div>
        <Social />
        </Container>
    </header>
);