// import { render } from "react-dom"
import Sidebar from "../../../components/layout/Sidebar"
import { Box, Button } from '@mui/material';
import { makeStyles } from '@mui/styles';
import RemoveIcon from '@mui/icons-material/Remove';
import MovieAddForm from "../../../components/Form/MovieAddForm";
import { useState } from "react";

const MovieAdd = () => {
    const classes = useStyles();

    const [isSelect, setIsSelect] = useState<boolean>(false)
    const [roomNumber, setRoomNumber] = useState<number>(0)

    const handleClick = (e: any): void => { // React.MouseEvent<HTMLButtonElement> 로 타입 지정을 하는 것이 맞지만 이벤트 위임과 ts가 맞물리지 않아 오류가 나므로 해결법을 찾기 전까지는 any타입 지정
        if(e.target !== e.currentTarget) {
            setIsSelect(true)
            const value: number = parseInt((e.target as HTMLButtonElement).value)
            setRoomNumber(value)
        }
    }

    return (
        <Box>
            <Sidebar />
            <Box className={classes.ButtonBox} onClick={handleClick}>
                <Button color="primary" value={1} sx={{ margin: 3 }}>
                    1&nbsp;관
                </Button>
                <Button color="primary" value={2} sx={{ margin: 3 }}>
                    2&nbsp;관
                </Button>
                <Button color="primary" value={3} sx={{ margin: 3 }}>
                    3&nbsp;관
                </Button>
                <Button color="primary" value={4} sx={{ margin: 3 }}>
                    4&nbsp;관
                </Button>
            </Box>
            { isSelect ? 
            <Box>
                <MovieAddForm roomNumber={roomNumber} />
            </Box> 
            :
            <Box />
            }
        </Box>
    )
}

export default MovieAdd

const useStyles = makeStyles({
    ButtonBox: {
        display: 'flex',
        justifyContent: 'center',
        width: '100%',
        margin: '20px auto'
    }
});