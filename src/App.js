import "./App.css";
import Clock2 from "./components/Clock2.js";
// import Clock from "./components/Clock";

const cities = [
  {
    region: "Australia",
    city: "Sydney",
  },
  {
    region: "Asia",
    city: "Seoul",
  },
  {
    region: "Europe",
    city: "London",
  },
  {
    region: "America",
    city: "New_York",
  },
];

function App() {
  return (
    <div className="App">
      <ul>
        {cities.map((city, index) => (
          <li key={index}>
            <Clock2 region={city.region} city={city.city} />
          </li>
        ))}
      </ul>
      {/* <div>
        <Clock city={"Sydney"} />
        <Clock city={"Seoul"} />
      </div>
      <div>
        <Clock city={"London"} />
        <Clock city={"New York"} />
      </div> */}
    </div>
  );
}

export default App;
