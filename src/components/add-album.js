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
        .then(res => console.log(res.data))
        window.location = '/'
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
        <div>
            <h3>Add New Album</h3>
            <form onSubmit={addAlbumClicked}>
                <div className='form-group'>
                    <label>Title: </label>
                    <input className='form-control' value={title} onChange={changeTitle} required></input>
                </div>
                <div className='form-group'>
                    <label>Artist: </label>
                    <select className='form-control' required value={artist} onChange={changeArtist}>
                        {
                            artists.map((artist) => {
                                return <option key={artist} value={artist}>{artist}</option>
                            })
                        }
                    </select>
                </div>
                <div className='form-group'>
                    <label>Description: </label>
                    <input className='form-control' value={description} onChange={changeDescription} required></input>
                </div>
                <div className='form-group'>
                    <label>Duration: </label>
                    <input className='form-control' value={duration} onChange={changeDuration} required></input>
                </div>
                <div className='form-group'>
                    <label>Date Released: </label>
                    <DatePicker className='form-control' selected={date} onChange={changeDate} required/>
                </div>
                <div className='form-group'>
                    <button className='btn btn-primary' type='submit' required>Add Album</button>
                </div>
            </form>
        </div>
    )
}