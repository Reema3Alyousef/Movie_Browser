import React, {Component} from 'react'; 
import Nav from './Nav';
import SearchArea from './SearchArea';
import MovieList from './MovieList';
import axios from 'axios';

class App extends Component {
  constructor(){
    super()
    this.state= {
      movies: [],
      searchInput: ''
    }
    this.apiKey = "e1956ce6b40aad03cfba8c496b403bdf"
  }

  handleSubmit = (e) => {
    e.preventDefault();
    axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${this.apiKey}&query=${this.searchInput}`)
      .then(res => {
    this.setState({movies: [...res.data.results]})
  })
  }

  handleChange = (e) => {
    this.setState({searchInput: e.target.value})
  }
  
  componentDidMount(){
    alert("Welcome to my movie list")
  }
  
  shouldComponentUpdate(){
    if(this.state.movies != null){
      return true
    }
    else return false
  }
  render() {
    return (
    <div class="row">
      <Nav/>
      <SearchArea handleSubmit={this.handleSubmit} handleChange={this.handleChange}/>
      <MovieList movies={this.state.movies}/>
     </div>
         
    )
  }
}

export default App;