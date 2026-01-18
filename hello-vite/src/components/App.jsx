import Header from "./Header/Header";
import Animals from "./Animals/Animals";
import Footer from "./Footer/Footer";
import './App.css';

function App() {
  return (
    <div className="page">
      <Header />
      <Animals selectedAnimal="dog" />
      <Footer />
    </div>
  )
}

export default App
