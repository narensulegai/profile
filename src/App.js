import React from "react";
import {
    HashRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Layout from "./components/Layout";
import "./App.css";
import Home from "./components/Home";
import Whoarewe from "./components/Whoarewe";
import {createMuiTheme} from "@material-ui/core";
import {ThemeProvider} from '@material-ui/styles';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#7d2ae8',
        },
        secondary: {
            main: '#c496ff',
        },
    },
});

export default function App() {
    return (
        <ThemeProvider theme={theme}>
            <Router>
                <Layout>
                    <Switch>
                        <Route exact path="/">
                            <Home/>
                        </Route>
                        <Route path="/samples">
                            <Whoarewe/>
                        </Route>
                    </Switch>
                </Layout>
            </Router>
        </ThemeProvider>
    );
}