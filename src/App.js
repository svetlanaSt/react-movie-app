import {  HashRouter, Route } from 'react-router-dom';
import './App.scss';
import Error from './components/common/Error/Error';
import Header from './components/Header/Header';
import AboutFilm from './components/Movies/AboutFilm/AboutFilm';
import MoviesContainer from './components/Movies/MoviesContainer';
import SavedMovies from './components/Movies/SavedMovies';


function App() {
  return (
    <HashRouter basename={process.env.PUBLIC_URL}>
      <div className='App'>
        <Header />
        <Route path='/' exact render={() => <MoviesContainer />} />
        <Route path='/about/:id' render={() => <AboutFilm />} />
        <Route path='/saved' render={() => <SavedMovies/>} />
        <Route path='/error' render={() => <Error />} />
      </div>
    </HashRouter>
  );
}

export default App;
