import React from 'react';
import { style, classes } from './ilove.st.css';
import { Title } from '../title/title';
import { Content } from '../content/content';
import { person } from '../../person';

export const ILove: React.FunctionComponent = props => {
    const heartIcon = <span className={style(classes.heartIcon)}>{`\u{2764}`}</span>
    return (
        <div className={style(classes.root)}>
            <div className={style(classes.titleGroup)}>
                <Title>I {heartIcon}</Title>
                {/* <Heart className={style(classes.heartIcon)} size='2rem' /> */}
            </div>
            <Content>
                <div className={style(classes.stack)}>
                {person.ILove.map((item) => {
                    return (
                        <img className={style(classes.stackItem)} src={item}></img>
                    )
                })}
                </div>
            </Content>
        </div>
    )
}