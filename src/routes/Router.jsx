import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Landing from "../pages/landing/Landing"
import InfoView from '../pages/infoView/InfoView';
import Layout from '../layouts/layout';
import NoRegistrationAccess from '../pages/noRegistrationAccess/NoRegistrationAccess';
import LoginAccess from '../pages/loginAccess/LoginAccess';
import TheoryView from '../pages/theoryView/TheoryView';
import TipsView from '../pages/tipsView/TipsView';
import CuriositiesView from '../pages/curiositiesView/CuriositiesView';
import LoginView from '../pages/loginView/LoginView'
import SignUpView from '../pages/signUpView/SignUpView'
import Eso1 from'../pages/Eso1/Eso1'

const RouterItem = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Layout/>}>
                    <Route path='/' element={<Landing/>}></Route>
                    <Route path='/InfoView' element={<InfoView/>}></Route>
                    <Route path='/NoRegistrationAccess' element={<NoRegistrationAccess/>}></Route>
                    <Route path='/LoginAccess' element={<LoginAccess/>}></Route>
                    <Route path='/TheoryView' element={<TheoryView/>}></Route>
                    <Route path='/TipsView' element={<TipsView/>}></Route>
                    <Route path='/CuriositiesView' element={<CuriositiesView/>}></Route>
                    <Route path='/LoginView' element={<LoginView/>}></Route>
                    <Route path='/SignUpView' element={<SignUpView/>}></Route>
                    <Route path='/Eso1' element={<Eso1/>}></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default RouterItem;