// import { render } from "react-dom"
import { Redirect } from "react-router"
import Path from "../../util/path"

const Home = () => {

    return (
        <Redirect to={Path.Movie + Path.List} />
    )
}

export default Home