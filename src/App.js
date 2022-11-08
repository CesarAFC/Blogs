import { HashRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider, AuthRoute } from './auth'
import { Menu } from './Menu';
import { BlogPage } from './BlogPage';
import { HomePage } from './HomePage';
import { BlogPost } from './BlogPost';
import { ProfilePage } from './ProfilePage';
import { LoginPage } from './LoginPage';
import { LogoutPage } from './LogoutPage';

function App() {

  //En los links y browser debemos usar /#/ 
  //En las rutas se usa el * por si el link no lo encuentra

  return (
    <>
      <HashRouter>
        <AuthProvider>

       <Menu/>

        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/blog' element={<BlogPage />} />
          <Route path='/blog/:slug' element={<BlogPost />} />
          <Route path='/login' element={<LoginPage />} />
          
          <Route 
            path='/logout' 
            element={
            <AuthRoute>
              <LogoutPage />
            </AuthRoute>
          } />

          <Route
            path='/profile' 
            element={
              //La validacion se hace en el componente AuthRoute. 
            <AuthRoute>
              <ProfilePage />
            </AuthRoute> 
            } />

          <Route path='*' element={<p>Not found</p>} />
        </Routes>

        </AuthProvider>
     </HashRouter>

    </>
  );
}

export default App;
