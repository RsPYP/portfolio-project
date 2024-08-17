import React from "react";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  CardMedia,
  CardActions,
  Button,
} from "@mui/material";

const projects = [
  {
    title: "Project 1",
    description: "Project 1 description...",
    image: "project1.jpg",
    link: "#",
  },
  {
    title: "Project 2",
    description: "Project 2 description...",
    image: "project2.jpg",
    link: "#",
  },
  // 追加プロジェクト
];

const Projects = () => {
  return (
    <div id="projects">
      <Typography variant="h4" gutterBottom>
        Projects
      </Typography>
      <Grid container spacing={4}>
        {projects.map((project, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card>
              <CardMedia
                component="img"
                height="140"
                image={project.image}
                alt={project.title}
              />
              <CardContent>
                <Typography variant="h5" gutterBottom>
                  {project.title}
                </Typography>
                <Typography variant="body2">{project.description}</Typography>
              </CardContent>
              <CardActions>
                <Button size="small" color="primary" href={project.link}>
                  Learn More
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Projects;
