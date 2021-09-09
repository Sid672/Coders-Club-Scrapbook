import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Home from './pages/home';
import ProfilePage from './pages/profile';
// import { useLocation } from 'react-router-dom';
import { Slide, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AllUsersProfilePage from './pages/allUsersprofile';

function App() {
    // const location = useLocation();
    console.log('Coded by Nishant')
    return (
        <div className='App'>
        <ToastContainer position="top-center"
        autoClose={2500}
        hideProgressBar={false}
        transition={Slide}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
        limit={1}
        />

            <Router>
                    <Route path='/' component={Home} exact />

                    <Route path='/login' component={Login} exact />
                    <Route path='/register' component={Register} exact />
                    <Route path='/profile' component={ProfilePage} exact />
                    <Route path='/user/profile/:username' component={AllUsersProfilePage} exact />
            </Router>
        </div>
    );
}

export default App;
