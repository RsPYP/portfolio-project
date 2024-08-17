import React from "react";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@mui/material";

const blogPosts = [
  {
    title: "Blog Post 1",
    excerpt: "A short description of the blog post...",
    link: "#",
  },
  {
    title: "Blog Post 2",
    excerpt: "A short description of the blog post...",
    link: "#",
  },
  // 追加ブログポスト
];

const Blog = () => {
  return (
    <div id="blog">
      <Typography variant="h4" gutterBottom>
        Blog
      </Typography>
      <Grid container spacing={4}>
        {blogPosts.map((post, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card>
              <CardContent>
                <Typography variant="h5" gutterBottom>
                  {post.title}
                </Typography>
                <Typography variant="body2">{post.excerpt}</Typography>
              </CardContent>
              <CardActions>
                <Button size="small" color="primary" href={post.link}>
                  Read More
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Blog;
