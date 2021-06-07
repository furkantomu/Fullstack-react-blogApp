import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'fixed',
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

export default function LoadingProgress() {
  const classes = useStyles();

  


  return (
    <div className={classes.root}>
      <LinearProgress color="secondary" style={{background:"#203040"}} />
    </div>
  );
}
