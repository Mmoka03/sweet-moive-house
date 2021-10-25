import { makeStyles } from '@mui/styles';
import { Box } from "@mui/material"
import Sidebar from "../../components/layout/Sidebar"
import LoginForm from "../../components/Form/LoginForm"

const Login = () => {
    const classes = useStyles()

    return (
        <Box className={classes.fullSize}>
            <Sidebar />
            <Box className={classes.form}>  
                <LoginForm />    
            </Box>
        </Box>
    )
}

export default Login


const useStyles = makeStyles({
    fullSize: {
        width: '100vw',
        height: '100vh'
    },
    form: {
        width: '100%',
        height: 'auto',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }
});