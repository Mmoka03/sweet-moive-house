import { useState } from "react";
import { Redirect, useHistory, useLocation } from "react-router-dom";
import Auth from "../auth/Auth";
import Path from "../util/path";
import { makeStyles } from '@material-ui/styles';
import { Box } from '@material-ui/core';

type Props = {
    
}

type locationPath = {
  from: { pathname: string }
}

const LoginForm: React.FC<Props> = () => {
    const location = useLocation<locationPath>()

    const classes = useStyles();

    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
  
    const { from } = location.state || { from: { pathname: Path.Movie+Path.List } }

    const handleClick = () => {
      try {
        Auth.login(email, () => setEmail(''))
      } catch (e) {
        alert("Failed to login")
        setEmail('')
      }
    }

    const handleLogout = () => {
      try {
        Auth.logout()
      } catch (e) {
        alert("Failed to logout")
        setEmail('')
      }
    }
    
    
    return (
      Auth.authenticated ? <Redirect to={from} />
    :
      <Box className={classes.Box}>
        <h1>Login</h1>
        <input
          value={email}
          onChange={({ target: { value } }) => setEmail(value)}
          type="text"
          placeholder="email"
        />
        {/* <input
          value={password}
          onChange={({ target: { value } }) => setPassword(value)}
          type="password"
          placeholder="password"
        /> */}
        <button onClick={handleClick}>Login</button>
        <button onClick={handleLogout}>Logout</button>
      </Box>
    );
  }
  
  export default LoginForm;
  
  const useStyles = makeStyles({
    Box: {
      backgroundColor: 'red'
    }
  });

