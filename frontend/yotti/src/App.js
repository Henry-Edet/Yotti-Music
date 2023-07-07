import "./index.css";

function App() {
  return (
    <div className="flex gap-11">
      <div className="ml-18 container m-10  rounded-xl border bg-gray-200 p-8 shadow">
        <Header />
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="header">
      <p className="text-grey-700 font-blond mb-5 text-3xl">Welcome!</p>
      <p className="text-grey-500 text-lg">React and Tailwind CSS in action</p>
      <ul>
        <li>
          <img src="img1.png" alt="img" />
        </li>
        <li>This project is in production</li>
      </ul>
    </div>
  );
}

export default App;
