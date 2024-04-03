import {BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import { ResetPage } from './pages/auth/reset';
import { SignupPage } from './pages/auth/register';
import { SigninPage } from './pages/auth/signin';
import { DashboardHome } from './pages/home';
import { OverviewPage } from './pages/app/overview';
function App() {

  return (
      <Router>
          <Routes>
            <Route path="app">
              <Route  path="/app/home" element={ <DashboardHome/>}/>
              <Route  path="/app/:action/overview" element={ <OverviewPage/>}/>
            </Route>
            <Route path="auth">
              <Route path="/auth/signin" element={ <SigninPage/>}/>
              <Route path="/auth/signup" element={ <SignupPage/>}/>
              <Route path="/auth/reset_password" element={ <ResetPage/>}/>
            </Route>
          </Routes>
      </Router>

  )
}

export default App
