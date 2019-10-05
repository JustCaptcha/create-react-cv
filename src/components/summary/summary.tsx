import React from 'react';
import { style, classes } from './summary.st.css';
import { Typography } from '@material-ui/core';
import { person } from '../../person';
import { Title } from '../title/title';
import { Content } from '../content/content';

export const Summary: React.FunctionComponent = props => {
    return (
        <div className={style(classes.root)}>
            <Title>Summary</Title>
            <Content>
                {person.summary.map((item) => {
                    return (
                        <div className={style(classes.itemSummary)}>{item}</div>
                    )
                })}
            </Content>
        </div>
    )
}