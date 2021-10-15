import React, { useState } from "react";
import { Link } from "react-router-dom";
import { makeStyles } from '@mui/styles';
import { Box, SwipeableDrawer, Button, List, ListItem, ListItemIcon, ListItemText, Divider } from '@mui/material';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import MovieIcon from '@mui/icons-material/Movie';
import ListAltIcon from '@mui/icons-material/ListAlt';
import AddToPhotosIcon from '@mui/icons-material/AddToPhotos';
import MenuIcon from '@mui/icons-material/Menu';
import SidebarItem from "./SidebarItem";
import Path from "../../util/path";
import Auth from "../../auth/Auth";

type Props = {
    
}

const Sidebar: React.FC<Props> = () => {
    const classes = useStyles()
    
    const menus = [
        { name: localStorage.getItem('isAuth') ? "로그아웃" : "로그인", path: Path.Login },
        { name: "영화 리스트", path: Path.Movie + Path.List },
        { name: "신규 영화 등록", path: Path.Movie + Path.Detail },
        { name: "예매 현황 보기", path: Path.Movie + Path.Detail }
    ];
      
    const [menuOpened, setMenuOpened] = useState<boolean>(false);

    const toggleDrawer =
      (open: boolean) =>
      (event: React.KeyboardEvent | React.MouseEvent) => {
        if (
          event &&
          event.type === 'keydown' &&
          ((event as React.KeyboardEvent).key === 'Tab' ||
            (event as React.KeyboardEvent).key === 'Shift')
        ) {
          return;
        }
  
        setMenuOpened(open);
    }
  
    const list = () => (
      <Box
        sx={{ width: 250 }}
        role="presentation"
        onClick={toggleDrawer(false)}
        onKeyDown={toggleDrawer(false)}
      >
        <List>
          {menus.map((menu, index) => (
            
            <Link to={menu.path} key={index} className={classes.listItemLink} onClick={() => { if(index === 0) Auth.logout() }}>
              <ListItem button key={menu.name} style={{ borderBottom: index ===  0 ? '1px solid #ddd' : 'none' }}>
                <ListItemIcon> 
                  {index === 0 ? localStorage.getItem('isAuth') ? <LogoutIcon /> : <LoginIcon /> : 
                  index === 1 ? <ListAltIcon /> : 
                  index === 2 ? <AddToPhotosIcon /> : 
                  index === 3 ? <MovieIcon /> : undefined 
                  }
                </ListItemIcon>
                <ListItemText primary={
                      <SidebarItem
                          menu={menu}
                      />
                } />
              </ListItem>
            </Link>
          ))}
        </List>
        <Divider />
      </Box>
    )

    return (
        <div className="sidebar">
            <div>
            <Button onClick={toggleDrawer(true)}><MenuIcon />&nbsp;menu</Button>
            <SwipeableDrawer
                anchor={'left'}
                open={menuOpened}
                onClose={toggleDrawer(false)}
                onOpen={toggleDrawer(true)}
            >
                {list()}
            </SwipeableDrawer>
            </div>
        </div>
    )
}

export default Sidebar;
  
const useStyles = makeStyles({
    listItemLink: {
        outline: 'none',
        textDecoration: 'none !important'
    }
})

