import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
function App() {
  return (
    <>
    
    <Navbar title="TextUtils" about="about"/>
    {/* <Navbar/> */}
    <TextForm heading="Enter your text here" textValue="Enter your text here"/>
    </>
  );
}

export default App;
