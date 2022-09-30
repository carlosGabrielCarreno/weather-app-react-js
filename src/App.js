import Cards from './components/Cards';
import { ErrorMessage } from './components/ErrorMessage';
import Nav from './components/Nav';
import { useFetch } from './hooks/useFetch';

const App = () => {
  const { cities, errorMessage, onClose, onErrorMessage, setPlacename } =
    useFetch();

  return (
    <div className="app_container">
      <Nav onSearch={setPlacename} />
      {errorMessage.length === 0 ? (
        <Cards cities={cities} onClose={onClose} />
      ) : (
        <>
          <ErrorMessage
            errorMessage={errorMessage}
            onErrorMessage={onErrorMessage}
          />
        </>
      )}
    </div>
  );
};

export default App;
