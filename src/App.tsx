import './App.css'
import RippleListener from './components/Ripple'

function App() {

  return (
    <>
      <button className='md-ripples ripples-dark' style={{ padding: 0, borderRadius: "999px", overflow: "hidden" }} onClick={() => { console.log("clicked");
      }}>
        <span style={{ width: "200px", height: "100px", display: "flex", justifyContent: "center", alignItems: "center", userSelect: "none" }}>Click me</span>
      </button>
      <RippleListener />
    </>
  )
}

export default App
