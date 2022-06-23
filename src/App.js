import './App.css'
import {Route, Routes} from "react-router-dom";
import Navbar from './components/navbar'
import AlbumsList from './components/albums-list'
import EditAlbum from './components/edit-album'
import AddAlbum from './components/add-album'
import AddArtist from './components/add-artist'
import ViewAlbum from './components/view-album'
import 'bootstrap/dist/css/bootstrap.min.css'

export default function App() {
  return (
    <div className='container'>
        <Navbar/>
        <Routes>
          <Route path='/' element={<AlbumsList/>}/>
          <Route path='/edit/:id' element={<EditAlbum/>}/>
          <Route path='/add' element={<AddAlbum/>}/>
          <Route path='/artist' element={<AddArtist/>}/>
        </Routes>
    </div>
  )
}
