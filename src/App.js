import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <>
    <h2> Sizing Element </h2>
    <h2>Intrinsic Size -  Natural size of an element</h2>
    <img src="https://res.cloudinary.com/djhbxppby/image/upload/v1641796103/Mysore-Palace_h85zwt.jpg"/> 

    <br/>
    <br/>
    
    <p className="border-2 border-solid border-blue-600 mb-2"></p>

    <h2>Extrinsic Size -  Setting a specific size </h2>

    <img src="https://res.cloudinary.com/djhbxppby/image/upload/v1641796103/Mysore-Palace_h85zwt.jpg" className="h-36 w-72"/> 

    <p className="h-36 w-52 border-2 border-solid border-pink-500 p-1 overflow-visible mb-14">
        It is maintained by Meta and a community of individual developers and companies. Wikipedia. It is maintained by Meta and a community of individual developers and companies. 
    </p>
    <p className="h-36 w-52 border-2 border-solid border-pink-500 p-1 overflow-hidden">
        It is maintained by Meta and a community of individual developers and companies. Wikipedia. It is maintained by Meta and a community of individual developers and companies. 
    </p>
    <p className="h-36 w-52 border-2 border-solid border-pink-500 p-1 overflow-scroll">
        It is maintained by Meta and a community of individual developers and companies. Wikipedia. It is maintained by Meta and a community of individual developers and companies. 
    </p>
    <p className="h-36 w-52 border-2 border-solid border-pink-500 p-1 overflow-auto">
        It is maintained by Meta and a community of individual developers and companies. Wikipedia. It is maintained by Meta and a community of individual developers and companies. 
    </p>

    <p className="w-24 mt-7 text-5xl border-2 border-solid border-pink-500">
        overflow
    </p>

    <p className="w-24 mt-7 text-5xl border-2 border-solid border-pink-500 overflow-x-visible ">
        overflow
    </p>
    <p className="w-24 mt-7 text-5xl border-2 border-solid border-pink-500 overflow-x-hidden ">
        overflow
    </p>
    <p className="w-24 mt-7 text-5xl border-2 border-solid border-pink-500 overflow-x-scroll ">
        overflow
    </p>
    <p className="w-24 mt-7 text-5xl border-2 border-solid border-pink-500 overflow-x-auto ">
        overflow
    </p>

    <div className="mt-7 h-36 w-52 border-2 border-solid border-purple-600 overflow-x-scroll">

       <img src="https://res.cloudinary.com/djhbxppby/image/upload/v1641796103/Mysore-Palace_h85zwt.jpg" className="h-36 w-80"/> 

    </div>

    <p className="w-24 mt-7 text-5xl border-2 border-solid border-pink-500 overflow-x-auto ">
        overflow
    </p>

    </>
  );
}

// It is maintained by Meta and a community of individual developers and companies. Wikipedia

export default App;
