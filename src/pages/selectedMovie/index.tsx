import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import loadSelectedMovieAsyncAction from "../../store/reducers/selectedMovieReducer/actions"
import { selectedMovieSelector } from "../../store/selectors/selectors"

export const SelectedMovie = () => {
    const { id } = useParams()
    const movie = useSelector(selectedMovieSelector)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(loadSelectedMovieAsyncAction(id!))
    }, [id])
    return (
<div></div>
    )
}

export default SelectedMovie