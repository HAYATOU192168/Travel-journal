




import "./App.css";
import Header from "./Components/Header";
import Entry from "./Components/Entry";
import Data from "./Components/Data";
function App() {
  const entryElements = Data.map((entry) => {
    return (
      <Entry
        key={entry.id}
        title={entry.title}
        location={entry.location}
        googleMapsUrl={entry.googleMapsUrl}
        startDate={entry.startDate}
        endDate={entry.endDate}
        description={entry.description}
        imageUrl={entry.imageUrl}
      />
    );
  });
  return (
    <>
      <Header />
      <main>{entryElements}</main>
    </>
  );
}

export default App;