import React from 'react';
import './App.css';
import Dashboard from './components/Dashboard'

function App() {
  
  return (
    <React.Fragment>
      <Dashboard/>
    </React.Fragment>
  );
}

export default App;


// function App() {
//   const [info, setInfo] = useState(null)

//   const getdata = async () => {
//       let response = await axios.get('https://api.github.com/repos/jardon/toppel')
//       setInfo(response.data)
//   }
//   console.log(info)
//   return(
//     <React.Fragment>
//       <Button variant="contained" color="primary" onClick={getdata}>
//         Hello World
//       </Button>
//       <pre>{info}</pre>
//     </React.Fragment>
//   );

// }

// export default App;
