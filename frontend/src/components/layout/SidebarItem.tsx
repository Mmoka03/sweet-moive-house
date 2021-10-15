import React from "react";
import { makeStyles } from '@material-ui/styles';
import { Typography } from '@material-ui/core'

interface menu {
    name: string,
    path: string
} 

type Props = {
    menu: menu
}

const SidebarItem: React.FC<Props> = ({ menu }) => {
    
  const classes = useStyles();

  return (
      <Typography color="initial" className={classes.text} >{menu.name}</Typography>
  );
}

export default SidebarItem;

const useStyles = makeStyles({
    text: {
        textDecoration: 'none !important',
        color: '#000'
    }
});