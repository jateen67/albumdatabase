import './App.css'
import {Route, Routes} from "react-router-dom";
import Navbar from './components/navbar'
import AlbumsList from './components/albums-list'
import EditAlbum from './components/edit-album'
import AddAlbum from './components/add-album'
import AddArtist from './components/add-artist'
import ViewAlbum from './components/view-album'
import ArtistsList from './components/artists-list'
import ViewArtist from './components/view-artist'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    document.title = 'Albumize'
  })
  return (
    <div className='container'>
        <Navbar/>
        <Routes>
          <Route path='/' element={<AlbumsList/>}/>
          <Route path='/edit/:id' element={<EditAlbum/>}/>
          <Route path='/view/:id' element={<ViewAlbum/>}/>
          <Route path='/viewartist/:id' element={<ViewArtist/>}/>
          <Route path='/add' element={<AddAlbum/>}/>
          <Route path='/artist' element={<AddArtist/>}/>
          <Route path='/artists' element={<ArtistsList/>}/>
        </Routes>
    </div>
  )
}
