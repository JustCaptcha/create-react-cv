import React from 'react';
import { style, classes } from './projects.st.css';
import { Title } from '../title/title';
import { Content } from '../content/content';
import { Typography, Link } from '@material-ui/core';
import { person } from '../../person';

export const Projects: React.FunctionComponent = props => {
    return (
        <div className={style(classes.root)}>
            <Title>Projects</Title>
            <Content>
                <div className={style(classes.projects)}>
                {person.projects.map((item) => {
                    return (
                        <div className={style(classes.project)}>
                            <Typography variant='h5'><Link href={item.url}>{item.title}</Link></Typography>
                            <Typography variant='body1'>{item.description}</Typography>
                        </div>
                    )
                })}
                </div>
            </Content>
        </div>
    )
}