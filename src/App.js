
import './App.css';
import Countries from './components/Countries/Countries';
import Header from './components/Header/Header';
// import Person from './components/Person/Person';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Countries></Countries>
      {/* <Person></Person> */}
    </div>
  );
}

// function LoadCountries(){
//   const [countries, setCountries] = useState([]);
//   useEffect( () =>{
//     fetch('https://restcountries.com/v2/all')
//     .then(res => res.json())
//     .then(data => setCountries(data))
//   },[])
//   return(
//     <div>
//       <h2>Visit every country in the  world!!</h2>
//       <h2>Country:{countries.length}</h2>
//       {
//         countries.map(country => <Country name={country.name} population={country.population}></Country> )
        
//       }
//     </div>
//   )
// }
// function Country(props){
//   return(
//     <div>
//       <h3>{props.name}</h3>
//       <p>{props.population}</p>
//     </div>
//   )
// }
export default App;
