import Sidebar from "../../../components/layout/Sidebar"
import { Box } from '@mui/material';
import MovieUpdateForm from "../../../components/Form/MovieUpdateForm"

const MovieAdd = () => {
    return (
        <Box>
            <Sidebar />
            <MovieUpdateForm scheduleNo={1} />
        </Box>
    )
}

export default MovieAdd