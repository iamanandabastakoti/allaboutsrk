import React, { useEffect, useState } from 'react'
import { RxCross1 } from "react-icons/rx";
import { IoMdAdd } from "react-icons/io";
import { MdOutlineDelete } from "react-icons/md";
import axios from 'axios';
import { toast } from 'react-toastify';

const UpdateMovie = ({ setUpdateMovieDialog, newData, movieID, fetchAllMovies }) => {
    const releaseMonths = [
        {
            name: 'January'
        },
        {
            name: 'February'
        },
        {
            name: 'March'
        },
        {
            name: 'April'
        },
        {
            name: 'May'
        },
        {
            name: 'June'
        },
        {
            name: 'July'
        },
        {
            name: 'August'
        },
        {
            name: 'September'
        },
        {
            name: 'October'
        },
        {
            name: 'November'
        },
        {
            name: 'December'
        }
    ];

    //cast data handling
    const [castData, setCastData] = useState([{ name: '', image: '', role: '' }]);
    const addMoreCast = () => {
        setCastData([...castData, { name: '', image: '', role: '' }])
    }
    const deleteCast = (index) => {
        if (castData.length > 1) {
            const newData = [...castData];
            newData.splice(index, 1);
            setCastData(newData);
        }
    }
    const handleCastInput = (index, field, value) => {
        const oldData = [...castData]
        oldData[index] = { ...oldData[index], [field]: value }
        setCastData(oldData)
    }
    // console.log(castData)

    //genre data handling
    const [genreData, setGenreData] = useState([{ name: '' }])
    const addMoreGenre = () => {
        setGenreData([...genreData, { name: '' }]);
    }
    const deleteGenre = (index) => {
        if (genreData.length > 1) {
            const newData = [...genreData];
            newData.splice(index, 1);
            setGenreData(newData);
        }
    }
    const handleGenreInput = (index, field, value) => {
        const oldData = [...genreData]
        oldData[index] = { ...oldData[index], [field]: value }
        setGenreData(oldData)
    }
    // console.log(genreData)

    //producer data handling
    const [producerData, setProducerData] = useState([{ name: '' }])
    const addMoreProducer = () => {
        setProducerData([...producerData, { name: '' }]);
    }
    const deleteProducer = (index) => {
        if (producerData.length > 1) {
            const newData = [...producerData];
            newData.splice(index, 1);
            setProducerData(newData);
        }
    }
    const handleProducerInput = (index, field, value) => {
        const oldData = [...producerData]
        oldData[index] = { ...oldData[index], [field]: value }
        setProducerData(oldData)
    }
    // console.log(producerData)

    //production data handling
    const [productionData, setProductionData] = useState([{ name: '' }])
    const addMoreProduction = () => {
        setProductionData([...productionData, { name: '' }]);
    }
    const deleteProduction = (index) => {
        if (productionData.length > 1) {
            const newData = [...productionData];
            newData.splice(index, 1);
            setProductionData(newData);
        }
    }
    const handleProductionInput = (index, field, value) => {
        const oldData = [...productionData]
        oldData[index] = { ...oldData[index], [field]: value }
        setProductionData(oldData)
    }
    // console.log(productionData)

    const [title, setTitle] = useState(newData.title)
    const [poster, setPoster] = useState(newData.poster)
    const [overview, setOverview] = useState(newData.overview)
    const [director, setDirector] = useState(newData.director)
    const [runtime, setRuntime] = useState(newData.runtime)
    const [releaseDate, setReleaseDate] = useState({
        date: null,
        month: '',
        year: null
    });
    const handleReleaseInputChange = (e) => {
        const { name, value } = e.target;
        setReleaseDate(prevState => ({
            ...prevState,
            [name]: value
        }));
    };
    // console.log(releaseDate)

    const updateMovie = async (movieID) => {
        try {
            const movieData = {
                poster,
                title,
                overview,
                director,
                cast: castData,
                release_date: releaseDate,
                runtime,
                genre: genreData,
                producer: producerData,
                production_company: productionData
            }
            await axios.patch(`http://localhost:5000/movie/update/${movieID}`, movieData);
            console.log("Movie Updated Successfully");
            fetchAllMovies();
            setUpdateMovieDialog(false);
            toast.success("Movie Updated Successfully");
        } catch (error) {
            console.log("Error updating movie", error)
            toast.error("Unable to update the movie!")
        }
    }

    useEffect(() => {
        if (newData && newData.cast) {
            const oldCastData = newData.cast.map(cast => ({
                name: cast.name,
                image: cast.image,
                role: cast.role
            }));
            const oldReleaseData = newData.release_date[0];
            setReleaseDate({
                date: oldReleaseData.date,
                month: oldReleaseData.month,
                year: oldReleaseData.year
            });
            const oldGenreData = newData.genre.map(genre => ({
                name: genre.name,
            }));
            const oldProducerData = newData.producer.map(producer => ({
                name: producer.name,
            }));
            const oldProductionData = newData.production_company.map(production => ({
                name: production.name,
            }));
            setCastData(oldCastData);
            setReleaseDate(oldReleaseData);
            setGenreData(oldGenreData);
            setProducerData(oldProducerData);
            setProductionData(oldProductionData);
        }
    }, [])

    return (
        <>
            <div
                className="fixed top-0 left-0 w-full h-full bg-black opacity-50 z-50"
            ></div>
            <div className='fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1/2 max-h-[100vh] overflow-y-auto z-50 flex flex-col items-center rounded-lg mt-2'>
                <div className='bg-primaryBg text-primaryText overflow-y-auto w-full pb-6'>
                    <div className='flex z-50 sticky top-0 bg-primaryBg justify-between items-center p-2 mb-4 shadow-xl px-6'>
                        <div className='flex justify-center text-xl'>Update the movie details below</div>
                        <span className='p-1 hover:bg-borderColor hover:text- rounded-lg duration-200'>
                            <RxCross1 className='text-xl cursor-pointer' onClick={() => setUpdateMovieDialog(false)} />
                        </span>
                    </div>
                    <form className='flex flex-col gap-6 px-6'>
                        <div className='flex flex-col'>
                            <label className='text-lg' htmlFor="">Title:</label>
                            <input className='px-3 py-2 bg-gray-100 rounded-lg focus:outline-none w-full' type="text" placeholder='Enter the movie title' value={title} onChange={e => setTitle(e.target.value)} />
                        </div>
                        <div className='flex flex-col'>
                            <label className='text-lg' htmlFor="">Poster:</label>
                            <input className='px-3 py-2 bg-gray-100 rounded-lg focus:outline-none w-full' type="text" placeholder='Enter the poster link' value={poster} onChange={e => setPoster(e.target.value)} />
                        </div>
                        <div className='flex flex-col'>
                            <label className='text-lg' htmlFor="">Overview:</label>
                            <textarea className='px-3 py-2 bg-gray-100 rounded-lg focus:outline-none w-full resize-none' rows={4} placeholder='Enter the movie overview' value={overview} onChange={e => setOverview(e.target.value)} />
                        </div>
                        <div className='flex flex-col'>
                            <label className='text-lg' htmlFor="">Director:</label>
                            <input className='px-3 py-2 bg-gray-100 rounded-lg focus:outline-none w-full' type="text" placeholder='Enter the movie director name' value={director} onChange={e => setDirector(e.target.value)} />
                        </div>
                        <div className='flex flex-col gap-1'>
                            <label className='text-lg' htmlFor="">Cast:</label>
                            {
                                castData.map((cast, index) => {
                                    return (
                                        <div key={index} className='flex items-center gap-2'>
                                            <input className='px-3 py-2 bg-gray-100 rounded-lg focus:outline-none w-full' type="text" placeholder='Cast name' value={cast.name} onChange={e => handleCastInput(index, 'name', e.target.value)} />
                                            <input className='px-3 py-2 bg-gray-100 rounded-lg focus:outline-none w-full' type="text" placeholder='Cast photo' value={cast.image} onChange={e => handleCastInput(index, 'image', e.target.value)} />
                                            <input className='px-3 py-2 bg-gray-100 rounded-lg focus:outline-none w-full' type="text" placeholder='Character name' value={cast.role} onChange={e => handleCastInput(index, 'role', e.target.value)} />
                                            <span>
                                                <MdOutlineDelete className='bg-buttonColor text-primaryBg p-1 text-3xl rounded-lg cursor-pointer hover:brightness-90' onClick={() => deleteCast(index)} />
                                            </span>
                                        </div>
                                    )
                                })
                            }
                            <span className='flex justify-end py-1'>
                                <IoMdAdd className='bg-buttonColor text-primaryBg p-1 text-3xl rounded-lg cursor-pointer hover:brightness-90' onClick={addMoreCast} />
                            </span>
                        </div>
                        <div className='flex flex-col'>
                            <label className='text-lg' htmlFor="">Release Date:</label>
                            <div className='flex items-center gap-2'>
                                <input className='px-3 py-2 bg-gray-100 rounded-lg focus:outline-none w-full' type="text" placeholder='Release day' name='date' value={releaseDate.date} onChange={handleReleaseInputChange} />
                                <select className='px-3 py-2 bg-gray-100 rounded-lg focus:outline-none w-full' name='month' value={releaseDate.month} onChange={handleReleaseInputChange}>
                                    <option value="">Release month</option>
                                    {
                                        releaseMonths.map((month, index) => {
                                            return (
                                                <option key={index}>{month.name}</option>
                                            )
                                        })
                                    }
                                </select>
                                <input className='px-3 py-2 bg-gray-100 rounded-lg focus:outline-none w-full' type="text" placeholder='Release year' name='year' value={releaseDate.year} onChange={handleReleaseInputChange} />
                            </div>
                        </div>
                        <div className='flex flex-col'>
                            <label className='text-lg' htmlFor="">Runtime(in minutes):</label>
                            <input className='px-3 py-2 bg-gray-100 rounded-lg focus:outline-none w-full' type="text" placeholder='Enter the runtime in minutes' value={runtime} onChange={e => setRuntime(e.target.value)} />
                        </div>
                        <div className='flex flex-col gap-1'>
                            <label className='text-lg' htmlFor="">Genre:</label>
                            {
                                genreData.map((genre, index) => {
                                    return (
                                        <div key={index} className='flex items-center gap-2'>
                                            <input className='px-3 py-2 bg-gray-100 rounded-lg focus:outline-none w-full' type="text" placeholder='Enter the genre' value={genre.name} onChange={e => handleGenreInput(index, 'name', e.target.value)} />
                                            <span>
                                                <MdOutlineDelete className='bg-buttonColor text-primaryBg p-1 text-3xl rounded-lg cursor-pointer hover:brightness-90' onClick={() => deleteGenre(index)} />
                                            </span>
                                        </div>
                                    )
                                })
                            }
                            <span className='flex justify-end py-1'>
                                <IoMdAdd className='bg-buttonColor text-primaryBg p-1 text-3xl rounded-lg cursor-pointer hover:brightness-90' onClick={addMoreGenre} />
                            </span>
                        </div>
                        <div className='flex flex-col gap-1'>
                            <label className='text-lg' htmlFor="">Producer:</label>
                            {
                                producerData.map((producer, index) => {
                                    return (
                                        <div key={index} className='flex items-center gap-2'>
                                            <input className='px-3 py-2 bg-gray-100 rounded-lg focus:outline-none w-full' type="text" placeholder='Enter the producer name' value={producer.name} onChange={e => handleProducerInput(index, 'name', e.target.value)} />
                                            <span>
                                                <MdOutlineDelete className='bg-buttonColor text-primaryBg p-1 text-3xl rounded-lg cursor-pointer hover:brightness-90' onClick={() => deleteProducer(index)} />
                                            </span>
                                        </div>
                                    )
                                })
                            }
                            <span className='flex justify-end py-1'>
                                <IoMdAdd className='bg-buttonColor text-primaryBg p-1 text-3xl rounded-lg cursor-pointer hover:brightness-90' onClick={addMoreProducer} />
                            </span>
                        </div>
                        <div className='flex flex-col gap-1'>
                            <label className='text-lg' htmlFor="">Production Company:</label>
                            {
                                productionData.map((production, index) => {
                                    return (
                                        <div key={index} className='flex items-center gap-2'>
                                            <input className='px-3 py-2 bg-gray-100 rounded-lg focus:outline-none w-full' type="text" placeholder='Enter the production company name' value={production.name} onChange={e => handleProductionInput(index, 'name', e.target.value)} />
                                            <span>
                                                <MdOutlineDelete className='bg-buttonColor text-primaryBg p-1 text-3xl rounded-lg cursor-pointer hover:brightness-90' onClick={() => deleteProduction(index)} />
                                            </span>
                                        </div>
                                    )
                                })
                            }
                            <span className='flex justify-end py-1'>
                                <IoMdAdd className='bg-buttonColor text-primaryBg p-1 text-3xl rounded-lg cursor-pointer hover:brightness-90' onClick={addMoreProduction} />
                            </span>
                        </div>
                        <div className='flex justify-center gap-6 items-center'>
                            <span className='w-full flex justify-center items-center py-2 px-3 rounded-lg border-2 border-green-600 bg-green-600 text-primaryBg cursor-pointer hover:brightness-75 duration-300' onClick={() => updateMovie(movieID)}>Confirm</span>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default UpdateMovie