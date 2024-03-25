import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";
// import Product from "./pages/Product/Product";
// import Pricing from "./pages/Pricing/Pricing";
// import HomePage from "./pages/HomePage/HomePage";
// import PageNotFound from "./pages/PageNotFound/PageNotFound";
// import AppLayout from "./pages/AppLayout/AppLayout";
// import Login from "./pages/Login/Login";

const Product = lazy(() => import("./pages/Product/Product"));
const Pricing = lazy(() => import("./pages/Pricing/Pricing"));
const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const PageNotFound = lazy(() => import("./pages/PageNotFound/PageNotFound"));
const AppLayout = lazy(() => import("./pages/AppLayout/AppLayout"));
const Login = lazy(() => import("./pages/Login/Login"));

import CityList from "./components/CityList/CityList";
import CountryList from "./components/CountryList/CountryList";
import City from "./components/City/City";
import Form from "./components/Form/Form";
import { CitiesProvider } from "./contexts/CitiesContext";
import { AuthProvider } from "./contexts/AuthContext";
import ProtectedRoute from "./pages/ProtectedRoute/ProtectedRoute";
import SpinnerFullPage from "./components/SpinnerFullPage/SpinnerFullPage";

const App = () => {
  return (
    <AuthProvider>
      <CitiesProvider>
        <BrowserRouter>
          <Suspense fallback={<SpinnerFullPage />}>
            <Routes>
              <Route index element={<HomePage />} />

              <Route path="product" element={<Product />} />
              <Route path="pricing" element={<Pricing />} />
              <Route
                path="app"
                element={
                  <ProtectedRoute>
                    <AppLayout />
                  </ProtectedRoute>
                }
              >
                <Route index element={<Navigate replace to="cities" />} />
                <Route path="cities" element={<CityList />} />

                <Route path="cities/:id" element={<City />} />
                <Route path="countries" element={<CountryList />} />
                <Route path="form" element={<Form />} />
              </Route>
              <Route path="login" element={<Login />} />
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </CitiesProvider>
    </AuthProvider>
  );
};
export default App;
