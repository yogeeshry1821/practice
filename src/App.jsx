
function App() {
  const handleNameChange=(e)=>{
    e.preventDefault();
  }
  const handleSubmit=()=>{
    
  }
  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="type input" onChange={handleNameChange}></input>
        </form>
      </div>
    </>
  )
}

export default App
