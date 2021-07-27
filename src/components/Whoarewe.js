import React from 'react';
import {Card, Typography, CardContent, Grid, Divider} from "@material-ui/core";
import spiderChart from "../SpiderChart.png";
import flowerChart from "../FlowerChart.png";
import simpleSlider from "../SimpleSlider.png";
import verticalBenchmarkChart from "../VerticalBenchmarkChart.png";

const SpiderChartDesc = () => {
    return <>Built using vanilla HTML with d3.js. View the demo and code snippets&nbsp;
        <a target="_blank"
           href="https://bl.ocks.org/narensulegai/0e926dece1fae43b715ab08dbe1751a0"
           rel="noreferrer">here</a>.</>
}

const FlowerChartDesc = () => {
    return <>Built using vanilla HTML with d3.js. View the demo and code snippets&nbsp;
        <a target="_blank"
           href="https://bl.ocks.org/narensulegai/61914bd9fdbfd79c4d41e16349c40a50"
           rel="noreferrer">here</a>.</>
}

const SimpleSliderDesc = () => {
    return <>Built using vanilla HTML with d3.js. View the demo and code snippets&nbsp;
        <a target="_blank"
           href="https://bl.ocks.org/narensulegai/9cf8315bea69f599ddbbff21dc7f2b60"
           rel="noreferrer">here</a>.</>
}

const VerticalBenchmarkChart = () => {
    return <>
        View <a target="_blank"
                href="https://narensulegai.github.io/vertical-benchmark-chart/demo/"
                rel="noreferrer">demo</a> and <a
        target="_blank" href="https://github.com/narensulegai/vertical-benchmark-chart"
        rel="noreferrer">code snippet</a>.
    </>
}
const profile = [
    {
        title: "Spider Chart",
        subTitle: "HTML / d3.js / CSS",
        description: <SpiderChartDesc/>,
        img: spiderChart
    },
    {
        title: "Flower Chart",
        subTitle: "HTML / d3.js / CSS",
        description: <FlowerChartDesc/>,
        img: flowerChart
    },
    {
        title: "Simple Slider",
        subTitle: "HTML / d3.js / CSS",
        description: <SimpleSliderDesc/>,
        img: simpleSlider
    },
    {
        title: "Vertical Benchmark Chart",
        subTitle: "WebComponents / HTML / CSS",
        description: <VerticalBenchmarkChart/>,
        img: verticalBenchmarkChart
    }
]
const Whoarewe = props => {

    return (
        <Grid container spacing={4}>
            {profile.map(p => {
                return <Grid item xs={6}>
                    <Card>
                        <CardContent>
                            <Typography variant="subtitle1" color="textSecondary">{p.title}</Typography>
                            <Divider/>
                            <div className="small-margin-top flex">
                                <div className="portfolio-prev flex1">
                                    <img src={p.img} alt="Spider chart preview"/>
                                </div>
                                <div className="flex2">
                                    <Typography variant="subtitle1" color="textSecondary">{p.subTitle}</Typography>
                                    <Typography variant="body1">{p.description}</Typography>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </Grid>
            })}
        </Grid>
    );
};

Whoarewe.propTypes = {};

export default Whoarewe;