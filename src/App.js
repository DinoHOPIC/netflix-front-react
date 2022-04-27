import "./App.css";
import data from "./assets/data.json";

function App() {
  return (
    <div>
      {data.map((categoryOfmovies, index) => {
        return (
          <div key={index}>
            <h2>{categoryOfmovies.category}</h2>
            {categoryOfmovies.images.map((imagesOfmovies, index) => {
              // console.log(imagesOfmovies);
              return <img key={index} src={imagesOfmovies} alt="" />;
            })}
          </div>
        );
      })}
    </div>
  );
}

export default App;
