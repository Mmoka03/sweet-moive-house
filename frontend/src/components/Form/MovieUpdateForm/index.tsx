import { useState, useEffect, ReactElement } from "react";
import { createTheme } from '@mui/material/styles';
import { makeStyles } from '@material-ui/styles';
import { Redirect } from "react-router-dom";
import { Box, TextField, Button, Rating, Input, Radio, FormControl, FormLabel, InputLabel, RadioGroup, FormControlLabel, ThemeProvider, Typography, Paper, TableContainer, Table, TableBody, TableCell, TableRow } from '@mui/material';
import './../../../assets/css/font.css'
import { movie } from "../../../util/api/movie";

type Props = {
    scheduleNo: number
}

type FormError = {
  movieNameEmpty: boolean,
  categoryEmpty: boolean,
  runTimeEmpty: boolean,
  runDayEmpty: boolean,
  runStartTimeEmpty: boolean,
  movieInfoEmpty: boolean,
  moviePosterEmpty: boolean,
  runTimeTypeNotMacth: boolean,
  runDayTypeNotMacth: boolean,
}

const FormErrorDefaultValue = {
  movieNameEmpty: false,
  categoryEmpty: false,
  runTimeEmpty: false,
  runDayEmpty: false,
  runStartTimeEmpty: false,
  movieInfoEmpty: false,
  moviePosterEmpty: false,
  runTimeTypeNotMacth: false,
  runDayTypeNotMacth: false,
}

const testData = {
    roomNumber: 3,
    movieName: '언더테일★',
    category: 4,
    runTime: 120,
    runDay: '',
    runStartTime: 'T08:50:00',
    rating: 2,
    moviePoster: 'C:\\Users\\tae gyu\\Pictures\\main.png'
}

const MovieAddForm: React.FC<Props> = ({
    scheduleNo
}) => {
    const classes = useStyles()
    
    const theme = createTheme({
      typography: {
        fontFamily: [
          'Jua',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          'sans-serif',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
        ].join(','),
      },
    });
    
    const defaultData = testData

    const [roomNumber, setRoomNumber] = useState<number>(defaultData.roomNumber)
    const [movieName, setMovieName] = useState<string>(defaultData.movieName)
    const [category, setCategory] = useState<number>(defaultData.category)
    const [runTime, setRunTime] = useState<number>(defaultData.runTime)
    const [runDay, setRunDay] = useState<string>(defaultData.runDay)
    const [runStartTime, setRunStartTime] = useState<string>(defaultData.runStartTime)
    const [rating, setRating] = useState<number | null>(defaultData.rating)
    const [moviePoster, setMoviePoster] = useState<string>(defaultData.moviePoster)
    
    const [isError, setIsError] = useState<boolean>()
    const [error, setError] = useState<FormError>(FormErrorDefaultValue)

    const [isRedirect, setIsRedirect] = useState<boolean>(false)
    
    const handleUpdate = (): void => {
        if(!isErrorCheck()) {
            let movieData: movie
            if(overlapCheck(movieName, category, runTime)) {
            movieData = {
                movie_no: maxMovieNo(),
                movie_name: movieName,
                category: category,
                runtime_minute: runTime,
                movie_img: moviePoster!,
                movie_info: rating!
            }
            } else {
            movieData = getMovieData(movieName)
            }
            const schedule = {
            schedule_no: scheduleNo,
            movie_no: movieData.movie_no,
            run_day: new Date(runDay+runStartTime),
            room_no: roomNumber
            }
            
            // use api

            setIsRedirect(true)
        } else {
            setIsRedirect(false)
        }
      }
  
      const overlapCheck = (movieName: string, category: number, runTime: number): boolean => {
        // api use
        return true
      }
  
      const getMovieData = (movieName: string): movie => {
        //api use
        return {
          movie_no: 2,
          movie_name: '언더테일★',
          category: 4,
          runtime_minute: 120,
          movie_img: 'C:\\Users\\tae gyu\\Pictures\\main.png',
          movie_info: 2
        }
      }
  
      const maxMovieNo = (): number => {
        // api use
        return 3
      }
  
    const handleValidation = () => {
      setError({ ...error,
        movieNameEmpty: !movieName ? true : false,  
        categoryEmpty: !category ? true : false,
        runTimeEmpty: !runTime ? true : false,
        runDayEmpty: !runDay ? true : false,
        runStartTimeEmpty: !runStartTime ? true : false,
        movieInfoEmpty: !rating ? true : false,
        moviePosterEmpty: !moviePoster ? true : false,
      })
    }

    const isErrorCheck = (): boolean => {
      if(error.movieNameEmpty) return true
      else if(error.categoryEmpty) return true
      else if(error.runTimeEmpty) return true
      else if(error.runDayEmpty) return true
      else if(error.runStartTimeEmpty) return true
      else if(error.movieInfoEmpty) return true
      else if(error.moviePosterEmpty) return true
      else if(error.runTimeTypeNotMacth) return true
      else if(error.runDayTypeNotMacth) return true
      return false
    }

    const errorMessageComponent = (error: Error): ReactElement => {
      return <Typography sx={{ color: 'red' }}>{`${error.name}: ${error.message}`}</Typography>
    }

    
    useEffect(() => {
      setIsError(isErrorCheck())
    }, [error])
    
    return (
    isRedirect ? <Redirect to='' /> :
      <ThemeProvider theme={theme}>
        {isError ? 
          <Box className={classes.errorBox}>
            {
              error.movieNameEmpty ? errorMessageComponent(new Error('영화이름이 비어있습니다')) : undefined}{
              error.categoryEmpty ? errorMessageComponent(new Error('장르가 비어있습니다')) : undefined}{
              error.runTimeEmpty ? errorMessageComponent(new Error('상영시간이 비어있습니다')) : undefined}{
              error.runDayEmpty ? errorMessageComponent(new Error('상영일자가 비어있습니다')) : undefined}{
              error.runStartTimeEmpty ? errorMessageComponent(new Error('상영시작시간이 비어있습니다')) : undefined}{
              error.movieInfoEmpty ? errorMessageComponent(new Error('영화평점이 비어있습니다')) : undefined}{
              error.moviePosterEmpty ? errorMessageComponent(new Error('영화포스터가 비어있습니다')) : undefined}{
              error.runTimeTypeNotMacth ? errorMessageComponent(new Error('상영시간이 숫자 데이터가 아닙니다')) : undefined}{
              error.runDayTypeNotMacth ? errorMessageComponent(new Error('상영일자이 날짜 데이터가 아닙니다')) : undefined}{
            }
          </Box>
          :
          undefined
        }
        <Box className={classes.box}>
          {/* <Typography variant="h4" color="initial" className={classes.title}>Movie add</Typography> */}
          <TableContainer className={classes.tableContainer} component={Paper}>
            <Table aria-label="caption table">
              <TableBody> 
                <TableRow>
                  <TableCell align="center"><Typography variant="h6" fontSize={20}>영화관</Typography></TableCell>
                  <TableCell align="center">
                  <FormControl component="fieldset">
                    <FormLabel component="legend">room number</FormLabel>
                    <RadioGroup value={roomNumber} row aria-label="room number" name="room number" onChange={({ target: { value } }) => setRoomNumber(Number.parseInt(value))}>
                      <FormControlLabel value={1} control={<Radio />} label="1&nbsp;관" />
                      <FormControlLabel value={2} control={<Radio />} label="2&nbsp;관" />
                      <FormControlLabel value={3} control={<Radio />} label="3&nbsp;관" />
                      <FormControlLabel value={4} control={<Radio />} label="4&nbsp;관" />
                    </RadioGroup>
                  </FormControl>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align="center"><Typography variant="h6" fontSize={20}>영화제목</Typography></TableCell>
                  <TableCell align="center">
                  <TextField
                    value={movieName}
                    variant='outlined'
                    className={classes.textField}
                    onChange={({ target: { value } }) => setMovieName(value)}
                    type='text'
                    size='small'
                    inputProps={theme.typography}
                    fullWidth
                  />
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align="center"><Typography variant="h6" fontSize={20}>장르</Typography></TableCell>
                  <TableCell align="center">
                  <FormControl component="fieldset">
                    <FormLabel component="legend">category</FormLabel>
                    <RadioGroup value={category} row aria-label="category" name="categoty" onChange={({ target: { value } }) => setCategory(Number.parseInt(value))}>
                      <FormControlLabel value={1} control={<Radio />} label="액션" />
                      <FormControlLabel value={2} control={<Radio />} label="로맨스" />
                      <FormControlLabel value={3} control={<Radio />} label="코미디" />
                      <FormControlLabel value={4} control={<Radio />} label="스릴러" />
                      <FormControlLabel value={5} control={<Radio />} label="애니메이션" />
                    </RadioGroup>
                  </FormControl>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align="center"><Typography variant="h6" fontSize={20}>상영시간</Typography></TableCell>
                  <TableCell align="center">
                  <Input 
                    value={runTime !== 0 ? runTime.toString().replace(/(^0+)/, '') : runTime}
                    type='number'
                    inputProps={{ min: 0, max: 500, step: 10 }}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                      const value = Number.parseInt(event.target.value)
                      
                      // alert(event.currentTarget.value)
                      if(Number.isNaN(value)) {
                        setRunTime(0)
                        setError({ ...error, runTimeEmpty: true })
                      } else {
                        setRunTime(value)
                        setError({ ...error, runTimeEmpty: false })
                      }
                    }}
                    />
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align="center"><Typography variant="h6" fontSize={20}>상영일자</Typography></TableCell>
                  <TableCell align="center">
                  <Input 
                    type='date'
                    value={runDay}
                    onChange={({ target: { value } }) => setRunDay(value)}
                    />
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align="center"><Typography variant="h6" fontSize={20}>상영시작시간</Typography></TableCell>
                  <TableCell align="center">
                  <FormControl component="fieldset">
                    <FormLabel component="legend">time</FormLabel>
                    <RadioGroup row aria-label="category" name="time" onChange={({ target: { value } }) => setRunStartTime(value)}>
                      <FormControlLabel value='T08:50:00' control={<Radio />} label="08:50" />
                      <FormControlLabel value='T11:10:00' control={<Radio />} label="11:10" />
                      <FormControlLabel value='T15:50:00' control={<Radio />} label="15:50" />
                      <FormControlLabel value='T18:00:00' control={<Radio />} label="18:00" />
                    </RadioGroup>
                  </FormControl>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align="center"><Typography variant="h6" fontSize={20}>영화평점</Typography></TableCell>
                  <TableCell align="center">
                    <Rating defaultValue={0} value={rating} size="large" onChange={(event, value) => setRating(value)} />
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align="center"><Typography variant="h6" fontSize={20}>영화포스터</Typography></TableCell>
                  <TableCell align="center">
                  <Typography>{moviePoster}</Typography>
                    <InputLabel className={classes.fileUploadButton} htmlFor='input-file'>
                      <Typography className={classes.fileUploadButtonText}>업로드</Typography>
                    </InputLabel>
                    <Input type='file' id='input-file' inputProps={{ accept: 'image/jpeg, image/png' }} onChange={({ target: { value } }) => setMoviePoster(value)} sx={{ display: 'none' }} />
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align="center" colSpan={2}>
                    <Typography></Typography>
                    <Button variant="contained" className={classes.button} onClick={() => {
                        handleValidation()
                        handleUpdate()}}>
                      영화 등록  
                    </Button> 
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </ThemeProvider>
    );
  }
  
export default MovieAddForm

const useStyles = makeStyles({
  errorBox: {
    display: 'flex',
    alignItems: 'flex-start',
    flexDirection: 'column',
    margin: '0 auto',
    width: '80%' 
  },
  box: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    margin: '0 auto',
    width: '80%' 
  },
  tableContainer: {
    margin: '50px auto', 
    width: '100%' 
  },
  textField: {
    width: 320,
    margin: 20,
    marginBottom: 0
  },
  fileUploadButton: {
    width: 100,
    height: 30,
    margin: '0 auto',
    backgroundColor: '#FF6600',
    borderRadius: '4px',
    color: 'white',
    cursor: 'pointer'
  },
  fileUploadButtonText: {
    padding: 4
  },
  button: {
    width: 140,
    height: 40
  }
})

