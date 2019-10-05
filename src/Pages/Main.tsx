import React from 'react'
import { style, classes } from './Main.st.css';
import { Header } from '../components/header/header';
import { Paper, Container } from '@material-ui/core';
import { Summary } from '../components/summary/summary';
import { Technologies } from '../components/technologies/technologies';
import { Experience } from '../components/exsperience/experience';
import { Languages } from '../components/languages/languages';
import { Education } from '../components/education/education';
import { Certificates } from '../components/certifc/certificates';
import { ILove } from '../components/ilove/ilove';

const Main: React.FunctionComponent = (props) => {
    return (
        <div className={style(classes.root)}>
            {/* you can customize layout */}
            <Header></Header>
            <Content>
                <Block>
                    <Experience />
                    <Education />
                    <Certificates />
                </Block>
                <Block>
                    <Summary />
                    <Technologies />
                    <Languages />
                    <ILove />
                </Block>
            </Content>
        </div>
    )
}

const Content: React.FunctionComponent = props => {
    return (
        <Container className={style(classes.content)}>
            {props.children}
        </Container>
    )
}

const Block: React.FunctionComponent = props => {
    return (
        <div className={style(classes.block)}>
            {props.children}
        </div>
    )
}

export default Main;