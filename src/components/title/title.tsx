import React from 'react';
import { style, classes } from './title.st.css';
import { Typography } from '@material-ui/core';

interface ITitleProps {
    children: string | (string | any)[],
    variant?: any
}

export const Title: React.FunctionComponent<ITitleProps> = props => {
    const variant = (props.variant) ? props.variant : 'h4';
    return (
        <Typography variant={variant} className={style(classes.root)}>
            {props.children}
        </Typography>
    )
}