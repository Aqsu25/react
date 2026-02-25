import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./components/Home"
import Shop from "./components/Shop"
import Product from './components/Product/Product';
import Cart from './components/Cart/Cart';
import Checkout from './components/Cart/Checkout/Checkout';
import Contact from './components/Contact';
import Login from './components/Admin/Login';
import { ToastContainer, toast } from 'react-toastify';
import Dashboard from './components/Admin/Dashboard';
import { Adminrequireauth } from './components/Admin/Adminrequireauth';
import ShowCategory from './components/Admin/Category/ShowCategory';
import CreateCategory from './components/Admin/Category/CreateCategory';
import EditCategory from './components/Admin/Category/EditCategory';
import Showbrand from './components/Admin/Brand/Showbrand';
import Createbrand from './components/Admin/Brand/Createbrand';
import Editbrand from './components/Admin/Brand/Editbrand';
import ProductCreate from './components/Admin/Product/ProductCreate';
import ProductShow from './components/Admin/Product/ProductShow';
import ProductEdit from './components/Admin/Product/ProductEdit';
import Register from './components/Register';
import UserLogin from './components/UserLogin';
import { Userrequireauth } from './components/User/Userrequireauth';
import UserDashboard from './components/User/UserDashboard';
import OrderConfirmation from './components/User/OrderConfirmation';
import ShowOrder from './components/Admin/Order/ShowOrder';



function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* user routes */}
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/cart" element={<Cart />} />
          {/* <Route path="/checkout" element={<Checkout />} /> */}
          <Route path="/product/:id" element={<Product />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/register" element={<Register />} />
          <Route path="/admin/login" element={<Login />} />
          <Route path="/login" element={<UserLogin />} />

          <Route
            path="/user/dashboard"
            element={
              <Userrequireauth>
                <UserDashboard />
              </Userrequireauth>
            }
          />
          {/* checkout */}
          <Route
            path="/checkout"
            element={
              <Userrequireauth>
                <Checkout />
              </Userrequireauth>
            }
          />
          {/* confirmation */}
          <Route
            path="/order/confirmation/:id"
            element={
              <Userrequireauth>
                <OrderConfirmation />
              </Userrequireauth>
            }
          />

          {/* admin routes */}
          <Route
            path="/admin/dashboard"
            element={
              <Adminrequireauth>
                <Dashboard />
              </Adminrequireauth>
            }
          />
          {/* category-Routes */}
          <Route
            path="/admin/categories"
            element={
              <Adminrequireauth>
                <ShowCategory />
              </Adminrequireauth>
            }
          />

          <Route
            path="/admin/categories/create"
            element={
              <Adminrequireauth>
                <CreateCategory />
              </Adminrequireauth>
            }
          />

          <Route
            path="/admin/categories/edit/:id"
            element={
              <Adminrequireauth>
                <EditCategory />
              </Adminrequireauth>
            }
          />
          {/* brand-Routes */}

          <Route
            path="/admin/brands"
            element={
              <Adminrequireauth>
                <Showbrand />
              </Adminrequireauth>
            }
          />
          <Route
            path="/admin/brands/create"
            element={
              <Adminrequireauth>
                <Createbrand />
              </Adminrequireauth>
            }
          />
          <Route
            path=
            "/admin/brands/:id/edit"
            element={
              <Adminrequireauth>
                <Editbrand />
              </Adminrequireauth>
            }
          />
          {/* product-Routes */}
          <Route
            path="/products"
            element={
              <Adminrequireauth>
                <ProductShow />
              </Adminrequireauth>
            }
          />
          <Route
            path="/products/create"
            element={
              <Adminrequireauth>
                <ProductCreate />
              </Adminrequireauth>
            }
          />
          <Route
            path=
            "/products/:id/edit"
            element={
              <Adminrequireauth>
                <ProductEdit />
              </Adminrequireauth>
            }
          />
          {/* orders */}
          <Route
            path="/orders"
            element={
              <Adminrequireauth>
                <ShowOrder />
              </Adminrequireauth>
            }
          />
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </>
  )
}

export default App
