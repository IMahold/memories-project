import React from "react";
import Post1 from "./Post1/Post1";
import useStyles from "./styles";
import { useSelector } from "react-redux";
import { Grid, CircularProgress } from "@material-ui/core";

export default function Posts({ setCurrentId }) {
  const classes = useStyles();
  const posts = useSelector((state) => state.posts);

  console.log("posts", posts);
  return !posts.length ? (
    <CircularProgress />
  ) : (
    <Grid
      className={classes.container}
      container
      alignItems="stretch"
      spacing={3}
    >
      {posts.map((post) => (
        <Grid key={post._id} item xs={12} sm={6}>
          <Post1 post={post} setCurrentId={setCurrentId} />
        </Grid>
      ))}
    </Grid>
  );
}
