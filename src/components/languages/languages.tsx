import React from 'react';
import { style, classes } from './languages.st.css';
import { Typography, Paper, Divider, Grid } from '@material-ui/core';
import { person } from '../../person';
import { Title } from '../title/title';

export const Languages: React.FunctionComponent = props => {
    return (
        <div className={style(classes.root)}>
            <Title>Languages</Title>
            <div className={style(classes.contentLang)}>
                {person.languages.map((item) => (
                    <Paper key={item.language} className={style(classes.language)}>
                        <Typography variant='body1'>{item.language}</Typography>
                        <div className={style(classes.divider)}></div>
                        <Typography variant='body1'>{item.lvl}</Typography>
                    </Paper>
                ))}
            </div>
        </div>
    )
}