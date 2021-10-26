import { useState, useEffect } from "react"
import { Box } from "@material-ui/core"
import Sidebar from "../../../components/layout/Sidebar"
import {Table, TablePagination, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton} from '@mui/material';
import LookupIcon from '@mui/icons-material/DriveFileMove';
import { ticketing } from "../../../util/api/ticketing";
import { ticketingTestDataList } from "../../../api/test/ticketingTestDataList";

const TicketingList = () => {

    const [ticketingDataList, setTicketingDataList] = useState<ticketing[]>(ticketingTestDataList)
    const [scheduleNo, setScheduleNo] = useState<number>(-1)
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
    
    useEffect(() => {

    }, [ticketingDataList])    

    return (
        <Box>
            <Sidebar />
            <TableContainer sx={{ margin: '50px auto', width: '80%' }} component={Paper}>
                <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                    <TableHead>
                    <TableRow>
                        <TableCell>스케줄번호</TableCell>
                        <TableCell align="right">영화 제목</TableCell>
                        <TableCell align="right">상영일시</TableCell>
                        <TableCell align="right">상영관</TableCell>
                        <TableCell align="right">예매현황</TableCell>
                        <TableCell align="right" sx={{ paddingRight: 2 }}>예매조회</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {ticketingDataList.map((data, index) => (
                        <TableRow
                        key={data.schedule_no}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                        <TableCell component="th" scope="row">
                            {data.schedule_no}
                        </TableCell>
                        <TableCell align="right">{data.movie_name}</TableCell>
                        <TableCell align="right">{`
                            ${data.run_day?.toISOString().replace('T', ' ').replace(':00.000Z', '')}
                        `}</TableCell>
                        <TableCell align="right">{data.room_no}</TableCell>
                        <TableCell align="right">{data.seat_cnt}</TableCell>
                        <TableCell align="right">
                            <IconButton aria-label="Lookup" sx={{ marginRight: 1 }} onClick={() => setScheduleNo(data.schedule_no)}>
                                <LookupIcon />
                            </IconButton>
                        </TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
                </TableContainer>
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

export default TicketingList