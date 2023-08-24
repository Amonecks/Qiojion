import HomePage from "../pages/showcasePages/HomePage/HomePage";
import ProductPage from "../pages/showcasePages/ProductPage/ProductPage";
import AboutUsPage from "../pages/showcasePages/AboutUsPage/AboutUsPage";
import NotFoundPage from "../pages/showcasePages/NotFoundPage/NotFoundPage";
import FavoritesPage from "../pages/showcasePages/FavoritesPage/FavoritesPage";
import CartPage from "../pages/showcasePages/CartPage/CartPage";
import ContactsPage from "../pages/showcasePages/ContactsPage/ContactsPage";
import LoginPage from "../pages/showcasePages/LoginPage/LoginPage";
import RegistrationPage from "../pages/showcasePages/RegistrationPage/RegistrationPage";
import AccountPage from "../pages/showcasePages/AccountPage/AccountPage";
import OrderPage from "../pages/showcasePages/OrderPage/OrderPage";
import ComparisonPage from "../pages/showcasePages/ComparisonPage/ComparisonPage";
import CategoriesPage from "../pages/showcasePages/CategoriesPage/CategoriesPage";

export const authRoutes = [
  {
    path: '/registration',
    element: <HomePage />
  },
  {
    path: '/login',
    element: <HomePage />
  },
  {
    path: '/account',
    element: <AccountPage />
  },
  {
    path: '/order',
    element: <OrderPage />
  },
];

export const publicRoutes = [
  {
    path: '/',
    element: <HomePage />
  },
  {
    path: '/product',
    element: <ProductPage />
  },
  {
    path: '/categories',
    element: <CategoriesPage />
  },
  {
    path: '/comparison',
    element: <ComparisonPage />
  },
  {
    path: '/aboutus',
    element: <AboutUsPage />
  },
  {
    path: '/contacts',
    element: <ContactsPage />
  },
  {
    path: '/favorites',
    element: <FavoritesPage />
  },
  {
    path: '/cart',
    element: <CartPage />
  },
  {
    path: '*',
    element: <NotFoundPage />
  },
];

export const notAuthRoutes = [
  {
    path: '/registration',
    element: <RegistrationPage />
  },
  {
    path: '/login',
    element: <LoginPage />
  },
  {
    path: '/account',
    element: <LoginPage />
  },
  {
    path: '/order',
    element: <HomePage />
  }
]