import "./App.css"
import { Routes, Route } from "react-router-dom"
import ContactPage from "./pages/contact/contact-page"
import SignUpPage from "./pages/sign-up/sign-up-page"
import CartPage from "./pages/cart/cart-page"
import IndexPage from "./pages/index/index-page"
import AboutUs from "./pages/about-us/about-us-page"
import Tickets from "./pages/ticket/ticket-page"
import LoginPage from "./pages/login/login-page"
import Programming from "./pages/programming/programming"
import EmployeeBoard from "./pages/employee/employee"
import CardContainerArtists from "./pages/employee/artists"
import CardContainerBands from "./pages/employee/bands"
import LogoutPage from "./pages/logout/logout-page"
import AdminPage from "./admin-pages/admin/admin-page";
import RoomManagement from "./admin-pages/room/room-management";
import UserManagement from "./admin-pages/user/user-management";
import EmployeeManagement from "./admin-pages/employee/employee-management";
import DonationList from "./admin-pages/donation/donation-list";
import DonationUserManagement from "./admin-pages/donation/donation-user-management";


function App() {
  return (
    <div className="App">
      <Routes>
        {/* Guest/User section*/}
        <Route path="/" element={<IndexPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="cart" element={<CartPage />} />
        <Route path="aboutus" element={<AboutUs />} />
        <Route path="tickets" element={<Tickets />} />
        {/* Guest only section*/}
        <Route path="signup" element={<SignUpPage />} />
        <Route path="login" element={<LoginPage />} />
        {/* Logged-in user only*/}
        <Route path="logout" element={<LogoutPage/>}/>
        {/*<Route path="seatpicker/:showId" element={<SeatPickerPage />} />*/}
        {/*--------------------*/}
        <Route path="programma" element={<Programming />} />
        <Route path="employee" element={<EmployeeBoard/>}/>
        <Route path="artists" element={<CardContainerArtists/>}/>
        <Route path="bands" element={<CardContainerBands/>}/>
        {/* Admin section */}
        <Route path="admin" element={<AdminPage/>}/>
        <Route path="admin/zalen" element={<RoomManagement/>}/>
        <Route path="admin/gebruikers" element={<UserManagement/>}/>
        <Route path="admin/medewerkers" element={<EmployeeManagement/>}/>
        <Route path="admin/donaties" element={<DonationList/>}/>
        <Route path="admin/donateurs" element={<DonationUserManagement/>}/>
        {/*<Route path="/admin/gebruikers/:id" component={EditUser} />*/}
      </Routes>
    </div>
  )
}

export default App
