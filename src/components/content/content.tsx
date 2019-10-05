import React from 'react';
import { style, classes } from './content.st.css';

interface IContentProps {
    props?: any,
    className?: string
}

export const Content: React.FunctionComponent<IContentProps> = props => {
    return (
        <div className={style(classes.root, props.className)}>
            {props.children}
        </div>
    )
}