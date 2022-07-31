import React, {useState} from 'react'
import axios from 'axios'

export default function AddArtist() {
        //all the state based on hte album model
        const [artist_name, setArtist] = useState('')
        //state purely for this component
    
        const changeArtist = (e) => {
            setArtist(e.target.value)
        }
        const addArtistClicked = async (e) => {
            e.preventDefault()
            const artistAdded = {artist_name}
            axios.post('/artists/', artistAdded)
            .then(res => {
                console.log(res.data)
            })
            window.location = '/artists'
        }

    return (
        <div className='container'>
            <h2 className='text-light mt-3 mb-5'>Add New Artist</h2>
            <form onSubmit={addArtistClicked}>
                <div className='row mb-3'>
                    <div className='col-3'></div>
                    <div className='col-6'>
                        <label className='text-light'>Artist: </label>
                        <input className='form-control bg-transparent border-light border-4 text-light' value={artist_name} onChange={changeArtist} maxLength='40' required></input>
                    </div>
                </div>
                <div className='text-center'>
                    <button className='btn text-light border-light border-4 mt-3' type='submit'>Add Artist</button>
                </div>
            </form>
        </div>
    )
}