import React from 'react';
import { style, classes } from './experience.st.css';
import { Typography, Link, Paper, List, ListItem, ListItemText, ListItemIcon } from '@material-ui/core';
import DoneIcon from '@material-ui/icons/Done';
import { person } from '../../person';
import { Calendar, MapPin } from 'react-feather';
import { Title } from '../title/title';
import { Content } from '../content/content';

export const Experience: React.FunctionComponent = props => {
    return (
        <div className={style(classes.root)}>
            <Title>Experience</Title>
            <Content className={style(classes.contentExp)}>
                {person.experience.map((item) => {
                    const link = (item.link !== '') ? (item.link) : '#';
                    const location = (item.location !== '') ? (
                        <div className={style(classes.blockItem1)}>
                            <MapPin size='2rem'/><Typography variant='body2'>{item.location}</Typography>
                        </div>
                    ) : '';

                    const date = (item.date !== '') ? (
                        <div className={style(classes.date)}>
                            <Calendar size='2rem'/><Typography variant='body2'>{item.date}</Typography>
                        </div>
                    ) : '';
                    
                    const card = (item.date !== '' || item.location !== '') ? (
                        <Paper className={style(classes.paper)}>
                            {location}
                            {date}
                        </Paper>
                    ) : '';

                    return (
                    <div key={item.company} className={style(classes.job)}>
                        <Block>
                            <Typography variant='h4'><Link className={style(classes.link)} href={link}>{item.company}</Link></Typography>
                            <Typography color='secondary' variant='h5'>{item.position}</Typography>
                        </Block>
                        <Block>
                            {card}
                        </Block>
                        <div className={style(classes.description)}>
                            {/* <Typography variant='body1'>{item.description}</Typography> */}
                            {item.text.map((text) => {
                                return (text);
                            })}
                            <List>{item.list.map((list) => {
                                return (
                                    <ListItem>
                                        <ListItemIcon>
                                            <DoneIcon color='secondary'/>
                                        </ListItemIcon>
                                        <ListItemText>{list}</ListItemText>
                                    </ListItem>
                                );
                            })}
                            </List>
                        </div>
                    </div>
                    )
                })}
            </Content>
        </div>
    )
}

const Block: React.FunctionComponent = props => {
    return (
        <div className={style(classes.block)}>
            {props.children}
        </div>
    )
}