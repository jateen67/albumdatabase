import React, {useState, useEffect, Component} from 'react'
import { Link } from 'react-router-dom' 
import axios from 'axios'

const Album = props => {
    <tr>
        <td>{props.album.title}</td>
        <td>{props.album.artist}</td>
        <td>{props.album.description}</td>
        <td>{props.album.duration}</td>
        <td>{props.album.date.substring(0, 10)}</td>
        <td>
            <Link to={`/edit/${props.album._id}`}>edit</Link> | <a href='#' onClick={() => {props.deleteAlbum(props.album._id)}}>delete</a>
        </td>
    </tr>
}

export default class AlbumsList extends Component {
    constructor(props) {
        super(props)

        this.deleteAlbum = this.deleteAlbum.bind(this)
        this.state = {
            albums: []
        }
    }

    albumsList() {
        return this.state.albums.map(album => {
            return <Album album={album} deleteAlbum={this.deleteAlbum} key={album._id}/>
        })
    }

    deleteAlbum(id) {
        axios.delete(`http://localhost:5000/albums/${id}`)
        .then(res => console.log(res.data))
        this.setState({
            albums: this.state.albums.filter(album => album._id !== id)
        })
    }

    componentDidMount() {
        axios.get('http://localhost:5000/albums')
        .then(res => {
            this.setState({albums: res.data})
        })
        .catch(err => console.log(err))
    }

    render() {
        return (
            <div>
                <h3>Logged Albums</h3>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Artist</th>
                            <th>Description</th>
                            <th>Duration</th>
                            <th>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.albumsList()}
                    </tbody>
                </table>
            </div>
        )
    }
}