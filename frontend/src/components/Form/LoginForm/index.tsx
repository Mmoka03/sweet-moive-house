import { useState } from "react";
import { makeStyles } from '@material-ui/styles';
import { Redirect, useLocation } from "react-router-dom";
import Auth from "../../../auth/Auth";
import Path from "../../../util/path";
import { Box, TextField, Button, Typography } from '@material-ui/core';
import SendIcon from '@mui/icons-material/Send';

type Props = {
    
}

type locationPath = {
  from: { pathname: string }
}

const LoginForm: React.FC<Props> = () => {
    const location = useLocation<locationPath>()

    const classes = useStyles()

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
    
    return (
      Auth.authenticated ? <Redirect to={from} />
    :
      <Box className={classes.box}>
        <Typography variant="h4" color="initial" className={classes.title}>Login</Typography>
        <TextField
          value={email}
          variant='outlined'
          className={classes.textField}
          onChange={({ target: { value } }) => setEmail(value)}
          type='text'
          label='email'
          size='small'
        />
        <TextField
          value={password}
          variant='outlined'
          className={classes.textField}
          onChange={({ target: { value } }) => setPassword(value)}
          type='password'
          label='password'
          size='small'
        />
        <Button variant="contained" endIcon={<SendIcon />} onClick={handleClick} className={classes.button}>
          Login
        </Button>
      </Box>
    );
  }
  
export default LoginForm;

const useStyles = makeStyles({
  title: { 
    fontFamily: 'Roboto Mono, monospace',
    marginTop: 10
  },
  box: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    marginTop: 50
  },
  textField: {
    width: 320,
    margin: 20,
    marginBottom: 0
  },
  button: {
    backgroundColor: '#feffff',
    margin: 20
  }
})

