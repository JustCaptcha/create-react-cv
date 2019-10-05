import React from 'react';
import { style, classes } from './certificates.st.css';
import { Title } from '../title/title';
import { Link, Typography } from '@material-ui/core';
import { Content } from '../content/content';
import { person } from '../../person';

export const Certificates: React.FunctionComponent = props => {
    return (
        <div className={style(classes.root)}>
            <Title variant='h4'>
                Certificates
            </Title>
            <Content>
                <div className={style(classes.certificates)}>
                {person.certificates.map((item) => {
                    return (
                        <Link href={item.link}><Typography variant='h5'>{item.title}</Typography></Link>
                    )
                })}
                </div>
            </Content>
        </div>
    )
}