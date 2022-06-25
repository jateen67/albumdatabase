import React, { useState, useEffect } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import axios from 'axios'

export default function AddAlbum() {
    //all the state based on hte album model
    const [title, setTitle] = useState('')
    const [artist, setArtist] = useState('')
    const [description, setDescription] = useState('')
    const [duration, setDuration] = useState(0)
    const [date, setDate] = useState(new Date())
    //state purely for this component
    const [artists, setArtists] = useState([])

    const changeTitle = (e) => {
        setTitle(e.target.value)
    }
    const changeArtist = (e) => {
        setArtist(e.target.value)
    }
    const changeDescription = (e) => {
        setDescription(e.target.value)
    }
    const changeDuration = (e) => {
        setDuration(e.target.value)
    }
    const changeDate = (e) => {
        setDate(e)
    }
    const addAlbumClicked = (e) => {
        e.preventDefault()
        const album = {title, artist, description, duration, date}
        axios.post('http://localhost:5000/albums/add', album)
        .then(res => {
            window.location = '/'
        })
        setTitle('')
        setArtist('')
        setDescription('')
        setDuration('')
    }
    useEffect(() => {
        axios.get('http://localhost:5000/artists')
        .then(res => {
            if (res.data) {
                setArtist(res.data[0].artist)
                setArtists(res.data.map(artist => artist.artist))
            }
        })
    }, [])

    return (
        <div className='container'>
            <h2 className='text-light mt-3 mb-5'>Add New Album</h2>
            <form onSubmit={addAlbumClicked}>
            <div className='row mb-3'>
                <div className='col'>
                    <label className='text-light'>Title: </label>
                    <input className='form-control bg-transparent border-light border-4 text-light' value={title} onChange={changeTitle} required></input>
                </div>
                <div className='col'>
                    <label className='text-light'>Artist: </label>
                    <select className='form-control bg-transparent border-light border-4 text-light' required value={artist} onChange={changeArtist}>
                        {
                            artists.map((artist) => {
                                return <option key={artist} value={artist}>{artist}</option>
                            })
                        }
                    </select>
                </div>
            </div>
            <div className='row mb-3'>
                <div className='col'>
                    <label className='text-light'>Duration: </label>
                    <input className='form-control bg-transparent border-light border-4 text-light' value={duration} onChange={changeDuration} maxLength='5' required></input>
                </div>
                <div className='col'>
                    <label className='text-light'>Date Released: </label>
                    <DatePicker className='form-control bg-transparent border-light border-4 text-light' selected={date} onChange={changeDate} required/>
                </div>
            </div>
            <div className='row mb-3'>
                <div className='col-3'></div>
                <div className='col-6'>
                    <label className='text-light'>Description: </label>
                    <textarea className='form-control bg-transparent border-light border-4 text-light' value={description} onChange={changeDescription} rows='5' required></textarea>
                </div>
            </div>
            <div className='text-center'>
                    <button className='btn text-light border-light border-4 mt-3' type='submit' required>Add Album</button>
            </div>
            </form>
        </div>
    )
}