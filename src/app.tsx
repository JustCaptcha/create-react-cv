import React from 'react';
import './project.st.css';
import { classes, style } from './app.st.css';
import { Router, View } from 'react-navi';
import { routes } from './routes';
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core';
import { palette } from '@material-ui/system';

export interface IAppProps {
    className?: string;
}

const theme = createMuiTheme({
    typography: {
        htmlFontSize: 10,
    },
    palette: {
        primary: {
            main: '#5E81AC',
        },
        secondary: {
            main: '#BF616A',
        }
    }
})

export const App: React.FunctionComponent<IAppProps> = props => (
    <Router routes={routes}>
        <ThemeProvider theme={theme}>
        <View />
        </ThemeProvider>
    </Router>
    // <div className={style(classes.root, props.className || '')} >
    // </div>
);
