import React from 'react';
import {style, classes} from './technologies.st.css';
import { Typography } from '@material-ui/core';
import { Chip } from '@material-ui/core';
import { person } from '../../person';
import { Title } from '../title/title';
import { Content } from '../content/content';

export const Technologies: React.FunctionComponent = (props) => {
    return (
        <div className={style(classes.root)}>
            <Title>Technologies</Title>
            <Content>
                {person.technologies.map((item) => {
                    return (
                        <div className={style(classes.section)}>
                            <Typography className={style(classes.stackTitle)} color='secondary' variant='h5'>{item.title}</Typography>
                            <div className={style(classes.tagsGroup)}>
                                {item.stack.map((stack) => {
                                    return (
                                        <TechTag
                                          key={stack}
                                          label={stack}
                                          color='primary' />
                                    )
                                })}
                            </div>
                        </div>
                    )
                })}
            </Content>
        </div>
    )
}

function TechTag(props: any) {
    return (
        <Chip label={props.label} color={props.color} size='small' className={style(classes.tag)}>
            {props.children}
        </Chip>
    )
}