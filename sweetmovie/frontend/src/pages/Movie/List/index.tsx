import { useState, useEffect } from "react"
import { Box } from "@material-ui/core"
import Sidebar from "../../../components/layout/Sidebar"
import {Table, TablePagination, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton} from '@mui/material';
import RemoveIcon from '@mui/icons-material/Delete';
import UpdateIcon from '@mui/icons-material/Create';
import { movieScheduleTestDataList } from "../../../api/test/movieScheduleTestDataList";
import { categoryFilter } from "../../../util/filter/categoryFilter";
import MovieRemoveDialog from "../../../components/modal/MovieRemoveDialog"
import { movieSchedule } from "../../../util/api/movieSchedule";

const MovieList = () => {

    const [movieScheduleDataList, setMovieScheduleDataList] = useState<movieSchedule[]>(movieScheduleTestDataList)
    const [DialogOpened, setDialogOpened] = useState<boolean>(false)
    const [scheduleNo, setScheduleNo] = useState<number>(-1)
    const [selectIndex, setSelectIndex] = useState<number>(-1)
    const [page, setPage] = useState(2);
    const [rowsPerPage, setRowsPerPage] = useState(10);
  
    const handleChangePage = (
      event: React.MouseEvent<HTMLButtonElement> | null,
      newPage: number,
    ) => {
      setPage(newPage);
    }
  
    const handleChangeRowsPerPage = (
      event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
      setRowsPerPage(parseInt(event.target.value, 10));
      setPage(0);
    }

    // const { from } = location.state || { from: { pathname: Path.Movie+Path.List } }

    const handleRemove = (scheduleNo: number, index: number): void => {
      setMovieScheduleDataList(movieScheduleDataList.slice(0, index).concat(movieScheduleDataList.slice(index+1)))
    }
    
    const handleDialog = (): void => {
      if(DialogOpened) setDialogOpened(false)
      else setDialogOpened(true)
    }
    
    useEffect(() => {

    }, [movieScheduleDataList])    

    return (
        <Box>
            <Sidebar />
            <TableContainer sx={{ margin: '50px auto', width: '80%' }} component={Paper}>
                <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                    <TableHead>
                    <TableRow>
                        <TableCell>영화 제목</TableCell>
                        <TableCell align="right">스케줄번호</TableCell>
                        <TableCell align="right">장르</TableCell>
                        <TableCell align="right">상영시간</TableCell>
                        <TableCell align="right">상영일시</TableCell>
                        <TableCell align="right">상영관</TableCell>
                        <TableCell align="right" sx={{ paddingRight: 2 }}>수정 및 삭제</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {movieScheduleDataList.map((data, index) => (
                        <TableRow
                        key={data.schedule_no}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                        <TableCell component="th" scope="row">
                            {data.movie_name}
                        </TableCell>
                        <TableCell align="right">{data.schedule_no}</TableCell>
                        <TableCell align="right">{categoryFilter(data.category)}</TableCell>
                        <TableCell align="right">{data.runtime_minute}</TableCell>
                        <TableCell align="right">{`
                            ${data.run_day?.toISOString().replace('T', ' ').replace(':00.000Z', '')}
                        `}</TableCell>
                        <TableCell align="right">{data.room_no}</TableCell>
                        <TableCell align="right">
                            <IconButton aria-label="Update">
                                <UpdateIcon />
                            </IconButton>
                            <IconButton aria-label="Remove" onClick={() => {
                                handleDialog()
                                setScheduleNo(data.schedule_no)
                                setSelectIndex(index)
                            }}>
                                <RemoveIcon />
                            </IconButton>
                        </TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
                </TableContainer>
                <MovieRemoveDialog open={DialogOpened} onClose={handleDialog} onRemove={() => handleRemove(scheduleNo, selectIndex)} />
                <TablePagination
                    component="div"
                    count={100}
                    page={page}
                    onPageChange={handleChangePage}
                    rowsPerPage={rowsPerPage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />       
        </Box>
    )
}

export default MovieList