import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import AdminDashboard from "./pages/AdminDashboard.tsx";
import ManageCategory from "./pages/ManageCategory.tsx";
import ManageItem from "./pages/ManageItem.tsx";
import HomePage from "./pages/homePage.tsx";
import UserProfileView from "./pages/UserProfileView.tsx";
import OurMenu from "./pages/ourMenu.tsx";
import ReservationPage from "./pages/reservationUserSide/reservationPage.tsx";
import Payment from "./pages/payment/payment.tsx";
import ContactPage from "./pages/contactPage.tsx";
import EventsPage from "./pages/eventsPages/eventsPage.tsx";
import Cart from "./pages/cart/Cart.tsx";
import EditCategory from "./pages/editCategory.tsx";
import Homedelivery from "./pages/homedelivery.tsx";
import HomeDelivery from "./pages/homedelivery.tsx";
import RatingSection from "./pages/Rating/RatingSection.tsx";
import CustomerPage from "./pages/customerPage.tsx";
import AdminEvent from "./pages/adminEvent.tsx";
import EditItem from "./pages/editItem.tsx";
import EditEvent from "./pages/editEvent.tsx";
import ManageTable from "./pages/reservationAdminSide/ManageTable.tsx";
import ReservedTable from "./pages/reservationAdminSide/ReservedTable.tsx";

import OrderPage from "./pages/orderPage.tsx";
import PaymentManagement from "./pages/payment/paymentManagement.tsx";


const queryClient = new QueryClient();

function App() {
    return (
        <>
            <QueryClientProvider client={queryClient}>
                <RouterProvider router={createBrowserRouter([
                    {path: "/AdminDashboard", element: <AdminDashboard/>},
                    {path: "/ManageCategory", element: <ManageCategory/>},
                    {path: "/EventsPage", element: <EventsPage/>},
                    {path: "/ManageCategory", element: <ManageCategory/>},
                    {path: "/edit/:pk_id", element: <EditCategory/>},
                    {path: "/ManageItem", element: <ManageItem/>},
                    {path: "/editItem/:pk_id", element: <EditItem/>},
                    {path: "/CustomerPage", element: <CustomerPage/>},
                    {path: "/AdminEvent", element: <AdminEvent/>},
                    {path: "/OrderPage", element: <OrderPage/>},
                    {path: "/EditEvent/:pk_id", element: <EditEvent/>},
                    {path: "/", element: <HomePage/>},
                    {path: "/Shop", element: <OurMenu/>},
                    {path: "/ReservationPage", element: <ReservationPage/>},
                    {path: "/ContactPage", element: <ContactPage/>},
                    {path: "/UserProfileView", element: <UserProfileView/>},
                    {path: "/payment", element: <Payment/>},
                    {path: "/payment/:cartTotal", element: <Payment/>},
                    {path: "/homedelivery", element: <Homedelivery/>},
                    {path: "/cart/:parss", element: <Cart/>},
                    {path: "/cart", element: <Cart/>},
                    {path: "/HomeDelivery", element: <HomeDelivery/>},
                    {path:"/Rate",element:<RatingSection/>},
                    {path:"/ManageTable",element:<ManageTable/>},
                    {path:"/ReservedTable",element:<ReservedTable/>},
                    {path:"/Rate",element:<RatingSection/>},


                    // {path:"/f1",element:<ForgotPass1/>},
                    {path:"/PaymentManagement",element:<PaymentManagement/>}
                ])} />
            </QueryClientProvider>
        </>
    )
}

export default App