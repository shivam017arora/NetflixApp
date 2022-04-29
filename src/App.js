import logo from './logo.svg';
import './App.css';
import Row from './Row'
import NavBar from './NavBar'
import Banner from './Banner'
import requests from './requests';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD1VQ7rHr46WLqNlchL9IJuGhAdkkoXWv0",
  authDomain: "netflix-clone-342f2.firebaseapp.com",
  projectId: "netflix-clone-342f2",
  storageBucket: "netflix-clone-342f2.appspot.com",
  messagingSenderId: "61887345820",
  appId: "1:61887345820:web:04bbde28e70f0fa4a5e959",
  measurementId: "G-ZFT228K5PL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Row title='Top Rated' fetchURL={requests.fetchTop} isLargeRow />
      <Row title='Trending Now' fetchURL={requests.fetchPop} />
      <Row title='Upcoming' fetchURL={requests.fetchUp} />
      {/* <Row title='Popular' fetchURL={requests.fetchNow} /> */}
    </div>
  );
}

export default App;
