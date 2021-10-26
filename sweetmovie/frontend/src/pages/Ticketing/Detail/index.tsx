import { useState, useEffect } from "react"
import { Box } from "@material-ui/core"
import Sidebar from "../../../components/layout/Sidebar"
import {Table, TablePagination, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton} from '@mui/material';
import CancelIcon from '@mui/icons-material/Cancel';
import MovieRemoveDialog from "../../../components/modal/MovieRemoveDialog"
import { ticketingState } from "../../../util/api/ticketingState";
import { ticketingStateTestDataList } from "../../../api/test/ticketingStateTestDataList";

const TicketingDetail = () => {
    
    const [ticketingStateDataList, setTicketingStateDataList] = useState<ticketingState[]>(ticketingStateTestDataList)
    const [DialogOpened, setDialogOpened] = useState<boolean>(false)
    const [ticketNo, setTicketNo] = useState<number>(-1)
    const [selectIndex, setSelectIndex] = useState<number>(-1)
    const [page, setPage] = useState(0);
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

    const handleRemove = (ticketNo: number, index: number): void => {
        setTicketingStateDataList(ticketingStateDataList.slice(0, index).concat(ticketingStateDataList.slice(index+1)))
    }
    
    const handleDialog = (): void => {
      if(DialogOpened) setDialogOpened(false)
      else setDialogOpened(true)
    }
    
    useEffect(() => {

    }, [ticketingStateDataList])    

    return (
        <Box>
            <Sidebar />
            <TableContainer sx={{ margin: '50px auto', width: '80%' }} component={Paper}>
                <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                    <TableHead>
                    <TableRow>
                        <TableCell>순서</TableCell>
                        <TableCell align="right">영화 제목</TableCell>
                        <TableCell align="right">상영일시</TableCell>
                        <TableCell align="right">상영관</TableCell>
                        <TableCell align="right">예매자</TableCell>
                        <TableCell align="right">좌석번호</TableCell>
                        <TableCell align="right" sx={{ paddingRight: 2 }}>예매취소</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {ticketingStateDataList.map((data, index) => (
                        <TableRow
                        key={data.ticket_no}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                        <TableCell component="th" scope="row">
                            {index+1}
                        </TableCell>
                        <TableCell align="right">{data.movie_name}</TableCell>
                        <TableCell align="right">{`
                            ${data.run_day?.toISOString().replace('T', ' ').replace(':00.000Z', '')}
                        `}</TableCell>
                        <TableCell align="right">{data.room_no}</TableCell>
                        <TableCell align="right">{data.member_id}</TableCell>
                        <TableCell align="right">{data.seat_no}</TableCell>
                        <TableCell align="right">
                            <IconButton aria-label="Cancel" sx={{ marginRight: 1 }} onClick={() => {
                                setTicketNo(data.ticket_no)
                                setSelectIndex(index)
                                handleDialog()
                            }}>
                                <CancelIcon />
                            </IconButton>
                        </TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
                </TableContainer>
                <MovieRemoveDialog open={DialogOpened} onClose={handleDialog} onRemove={() => handleRemove(ticketNo, selectIndex)} />
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

export default TicketingDetail