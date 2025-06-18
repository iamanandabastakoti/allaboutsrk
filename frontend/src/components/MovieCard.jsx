import { Link } from "react-router-dom"

const MovieCard = ({ props, index }) => {
    return (
        <div>
            <div>
                <Link key={index} to={`/filmography/movie/${props._id}`} className='movie-card flex flex-col items-start gap-2 min-h-60 min-w-36 max-w-36 overflow-hidden rounded-lg'>
                    <img className='rounded-lg object-cover' src={props.poster} alt="" />
                    <span className='px-2 text-sm'>{props.title}</span>
                </Link>
            </div>
        </div>
    )
}

export default MovieCard