
import './App.css'

function App() {
  
  return (
    <div className="flex  flex-col h-screen w-screen justify-center items-center bg-black">
      <div className="h-64 w-44 bg-[#1d92fe]">
        <div className="flex flex-col justify-end items-center h-64 w-44">
          <div className="w-20 h-20  absolute top-52 left-50% bg-[#69d20d] rounded-full "></div>
          <div className="w-20 h-20  absolute top-60 left-50% bg-[#69d20d] rounded-full "></div>
          <div className="w-20 h-20  absolute top-60 r bg-[#69d20d] rounded-full "></div>
          <div className="w-20 h-20  absolute top-60 l bg-[#69d20d] rounded-full "></div>
          <div className="h-32 w-10 bg-[#421d09]"></div>
        </div>
      </div>
      <div className="h-20 w-44 bg-[#69d20d]"></div>
      <div className="h-28 w-44 bg-[#726003]"></div>
    </div>
  );
}

export default App
