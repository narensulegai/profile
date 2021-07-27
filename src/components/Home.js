import React from 'react';
import {Card, Grid, Typography, CardContent, Divider, ListItemText, ListItem, List} from "@material-ui/core";

const Home = props => {


    const skills = [
        {type: "l", title: "ReactJS", width: 100, subText: "5+ years / primary skill"},
        {type: "l", title: "HTML/CSS", width: 100, subText: "Can match wireframes to the pixel"},
        {type: "l", title: "JavaScript", width: 100, subText: ""},
        {type: "l", title: "NodeJS", width: 70, subText: ""},
        {type: "s", title: "D3JS", width: 70, subText: ""},
        {type: "s", title: "Kubernetes", width: 50, subText: ""},
        {type: "s", title: "AWS", width: 50, subText: ""},
        {type: "s", title: "CI/CD", width: 50, subText: ""}
    ]


    return (
        <Grid container spacing={4}>
            <Grid item xs={6}>
                <Card>
                    <CardContent>
                        <div>
                            <Typography component="h4" variant="h4">Naren Sulegai</Typography>
                            <Typography variant="subtitle1" color="textSecondary">
                                Frontend | Full-Stack | Web Developer | ReactJS | ex-McKinsey
                            </Typography>
                            <div>
                                <a href="https://www.linkedin.com/in/naren-sulegai-4a112425/">LinkedIn</a>&nbsp;|&nbsp;
                                <a href="https://github.com/narensulegai">GitHub</a>
                            </div>
                        </div>
                        <div className="small-margin-top"/>
                        <Divider/>
                        <div className="small-margin-top">
                            <Typography variant="body1">
                                <div>
                                    Skilled Frontend Developer - with focus on building data
                                    visualization web dashboards with <a href="https://reactjs.org/">ReactJS</a>/<a
                                    href="https://nodejs.org/en/">NodeJS</a>. A stickler for clean, modular design
                                    and un-muddled code.
                                </div>
                                <div className="small-margin-top">
                                    Led/architected development and deployment of web applications for over 7+ years
                                    at <a
                                    href="https://www.mckinsey.com/">McKinsey & Company</a> as a Frontend Digital
                                    Specialist
                                    either alone or part of a small team.
                                </div>
                            </Typography>
                        </div>
                        <div className="small-margin-top">
                            <Typography component="h6" variant="h6">Experience</Typography>
                        </div>
                        <div className="small-margin-top">
                            <Typography variant="subtitle1">San Jose State University - MS Software Engineering (GPA
                                3.88)</Typography>
                            <Typography variant="body2" color="textSecondary">
                                <div>Student Assistant - Teaching ReactJS, NodeJS, GraphQL, Kafka to graduate students
                                </div>
                            </Typography>
                            <Typography variant="body1" color="textSecondary">Jan 2020 - Dec 2022</Typography>
                        </div>
                        <div className="small-margin-top">
                            <Divider/>
                        </div>
                        <div className="small-margin-top">
                            <Typography variant="subtitle1">McKinsey & Company - Digital Specialist</Typography>
                            <Typography variant="body2" color="textSecondary">
                                <div>Worked on multiple projects that were part of larger consultancy requests, either
                                    alone or part of a small team.
                                </div>

                            </Typography>
                            <Typography variant="body1" color="textSecondary">Apr 2013 - Jan 2021</Typography>
                        </div>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={6}>
                <Grid item xs={12}>
                    <Card>
                        <CardContent>
                            <Typography variant="subtitle1" color="textSecondary">Portfolio</Typography>
                            <Divider/>
                            <div className="small-margin-top">
                                <Typography component="h6" variant="h6">
                                    <a href="#/samples">
                                        Code Samples/Highlights >
                                    </a>
                                </Typography>
                            </div>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={12}>
                    <Card className="small-margin-top">
                        <CardContent>
                            <Typography variant="subtitle1" color="textSecondary">Skills</Typography>
                            <Divider/>

                            {skills.map(s => {
                                return <>
                                    {s.type === "l" && <div className="flex smaller-margin-top">
                                        <div className="flex2">
                                            <div className="skill-bar" style={{width: `${s.width}%`}}>
                                                <b>{s.title}</b>{s.subText &&
                                            <span>&nbsp;&nbsp;/&nbsp;&nbsp;{s.subText}</span>}
                                            </div>
                                        </div>
                                    </div>}
                                    {s.type === "s" && <div className="flex smaller-margin-top">
                                        <div className="flex2">
                                            <div className="skill-bar small" style={{width: `${s.width}%`}}>
                                                <b>{s.title}</b>
                                            </div>
                                        </div>
                                    </div>}
                                </>
                            })}

                        </CardContent>
                    </Card>
                </Grid>
            </Grid>


        </Grid>
    );
};

Home.propTypes = {};

export default Home;