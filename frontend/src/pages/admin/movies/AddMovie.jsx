import React from 'react'

const AddMovie = ({ setAddMovieDialog }) => {
    return (
        <div className='fixed top-0 left-0 w-full h-full flex justify-center items-center backdrop-brightness-50'>
            <div className='bg-brandColor text-primaryBg w-3/5 min-h-[80%] rounded-lg p-2'>
                <form>
                    <div>Title</div>
                    <div>Poster</div>
                    <div>Overview</div>
                    <div>Director</div>
                    <div>Cast</div>
                    <div>Release Date</div>
                    <div>Runtime</div>
                    <div>Genre</div>
                    <div>Producer</div>
                    <div>Production Company</div>
                    <div className='flex justify-center gap-6 items-center'>
                        <span className='flex justify-center items-center py-2 px-3 w-32 rounded-lg border-2 border-green-600 bg-green-600 cursor-pointer hover:scale-110 duration-300'>Confirm</span>
                        <span className='flex justify-center items-center py-2 px-3 w-32 rounded-lg border-2 border-red-600 bg-red-600 cursor-pointer hover:scale-110 duration-300' onClick={() => setAddMovieDialog(false)}>Cancel</span>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AddMovie