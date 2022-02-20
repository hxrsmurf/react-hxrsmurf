import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './pages/Navigation';
import Homepage from './pages/Homepage';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Links from './pages/Links';

import { Quotes } from './pages/Quotes';
import { Books } from './pages/quotes/Books';
import { Movies } from './pages/quotes/Movies';
import { People } from './pages/quotes/People';
import { TV } from './pages/quotes/TV'
import { Random } from './pages/quotes/Random'
import { VideoGames } from './pages/quotes/VideoGames'


function App() {
  return (    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigation/>}>
          <Route index element={<Homepage/>} />
          <Route path="/links" element= {<Links/>}/>
          <Route path="/quotes" element= {<Quotes/>}/>
          <Route path={`/quotes/book`} element= {<Books/>}/>
          <Route path={`/quotes/movie`} element= {<Movies/>}/>
          <Route path={`/quotes/people`} element= {<People/>}/>
          <Route path={`/quotes/tv`} element= {<TV/>}/>
          <Route path={`/quotes/random`} element= {<Random/>}/>
          <Route path={`/quotes/video-game`} element= {<VideoGames/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
