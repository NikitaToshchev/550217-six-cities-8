import MainScreen from '../main-screen/main-screen';

type AppProps = {
  placeCount: number;
}

function App({ placeCount }: AppProps): JSX.Element {
  return (
    <MainScreen placeCount={placeCount} />
  );
}

export default App;
