import React from 'react'
import PhoneIcon from '@material-ui/icons/Phone';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import { style, classes } from './social.st.css';
import { Link, Typography } from '@material-ui/core';
import { GitHub, Linkedin, Phone, Mail, Codepen, Globe, Twitter, Facebook, Link as LinkIcon, Gitlab, Slack, } from 'react-feather';
// import { Link } as LinkIcon from 'react-feather';
import { person } from '../../person';

export const Social: React.FunctionComponent = props => {
    return (
        <div className={style(classes.root)}>
            <Item><Phone></Phone><Typography variant='body1'>{person.social.phone}</Typography></Item>
            <Item><Mail /><Typography variant='body1'>{person.social.email}</Typography></Item>
            <div className={style(classes.links)}>
                {person.social.links.map((item) => {
                    let icon = getIcon(item.title);
                    function getIcon(title: string): any {switch(title) {
                        case 'GitHub': { return <GitHub /> };
                        case 'GitLab': { return <Gitlab /> };
                        case 'Linkedin': { return <Linkedin /> };
                        case 'Codepen': { return <Codepen /> };
                        case 'Site': { return <Globe /> };
                        case 'Slack': { return <Slack /> };
                        case 'Twitter': { return <Twitter /> };
                        case 'Facebook': { return <Facebook /> };
                        default: { return <LinkIcon /> };
                    }}
                    return (
                        <Item>
                            {icon}<Link href={item.url}><Typography variant='body1'>{item.title}</Typography></Link>
                        </Item>
                    )
                })}
            </div>
        </div>
    )
}

const Item: React.FunctionComponent = props => {
    return (
        <div className={style(classes.item)}>{props.children}</div>
    )
}