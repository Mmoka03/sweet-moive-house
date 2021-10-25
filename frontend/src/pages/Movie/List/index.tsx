// import { render } from "react-dom"
import { Box } from "@material-ui/core"
import Sidebar from "../../../components/layout/Sidebar"
import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton} from '@mui/material';
import RemoveIcon from '@mui/icons-material/Remove';
import { movieScheduleTestDataList } from "../../../api/test/movieScheduleTestDataList";
import { categoryFilter } from "../../../util/filter/categoryFilter";

const MovieList = () => {

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
                        <TableCell align="right" sx={{ paddingRight: 3 }}>삭제</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {movieScheduleTestDataList.map((data) => (
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
                            <IconButton aria-label="Remove">
                                <RemoveIcon />
                            </IconButton>
                        </TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
                </TableContainer>       
        </Box>
    )
}

export default MovieList