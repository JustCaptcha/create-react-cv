import React from 'react';
import { style, classes } from './education.st.css';
import { Typography, Paper } from '@material-ui/core';
import { person } from '../../person';
import { MapPin, Calendar } from 'react-feather';
import { Title } from '../title/title';
import { Content } from '../content/content';

export const Education: React.FunctionComponent = props => {
    return (
        <div className={style(classes.root)}>
            <Title>Education</Title>
            <Content className={style(classes.contentEdu)}>
                {person.education.map((item) => (
                    <div key={item.university} className={style(classes.eduItem)}>
                        <Block>
                            <Typography className={style(classes.subject)} variant='h4'>{item.subject}</Typography>
                            <Typography className={style(classes.titleUniversity)} color='secondary' variant='h5'>{item.university}</Typography>
                        </Block>
                        <Block>
                            <Paper className={style(classes.paper)}>
                            <div className={style(classes.blockItem1)}>
                                <MapPin size='2rem' /><Typography variant='body2'>{item.location}</Typography>
                            </div>
                            <div className={style(classes.blockItem)}>
                                <Calendar size='2rem' /><Typography variant='body2'>{item.date}</Typography>
                                <Typography variant='body2'>{item.degree}</Typography>
                            </div>
                            </Paper>
                        </Block>
                    </div>
                ))}
            </Content>
        </div>
    )
}

function Block(props: any) {
    return (
        <div className={style(classes.block)}>
            {props.children}
        </div>
    )
}