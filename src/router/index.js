import { Navigate, Route, Routes } from 'react-router-dom';
import GuardRoute from '../components/GuardRoute';
import GuestOnlyRoute from '../components/GuestOnlyRoute';

import Login from '../pages/signin';
import { HomeRoute } from './homeRouter';
import { TalentsRoute } from './talentsRouter';
import { CategoriesRoute } from './categoriesRouter';
import { PaymentRoute } from './PaymentRouter';
import SNavbar from '../components/Navbar';
import { EventsRoute } from './eventRouter';
import { OrdersRoute } from './orderRouter';

export function AppRoutes() {
    return (
        <Routes>
            <Route
                path='login'
                element={
                    <GuestOnlyRoute>
                        <Login />
                    </GuestOnlyRoute>
                }
            />
            <Route
                path='/'
                element={
                    <>
                        <SNavbar />
                        <GuardRoute />
                    </>
                }
            >
                <Route path='dashboard/*' element={<HomeRoute />} />
                <Route path='categories/*' element={<CategoriesRoute />} />
                <Route path='talents/*' element={<TalentsRoute />} />
                <Route path='payments/*' element={<PaymentRoute />} />
                <Route path='events/*' element={<EventsRoute />} />
                <Route path='orders/*' element={<OrdersRoute />} />
                <Route path='' element={<Navigate to='/dashboard' replace={true} />} />
            </Route>
        </Routes>
    );
}