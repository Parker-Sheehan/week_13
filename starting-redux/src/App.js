import Counter from './components/Counter';
import Header from './components/Header'
import Auth from './components/Auth'
import { useSelector } from 'react-redux';





function App() {

  // const dispatch = useDispatch()
  const login = useSelector(state => state.auth.isAuthenticated)

  return (
    <>
    <Header/>
    {!login && <Auth/>}
    <Counter />
    </>
  );
}

export default App;
