/** @format */

import Sidebar from "./components/Sidebar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Product, ViewProduct } from "./pages/Product";
import Profile from "./pages/Profile";
import { Coupons } from "./pages/Coupons";
import { Inventory, ViewInventory } from "./pages/Inventory";
import { CustomerSupport } from "./pages/CustomerSupport";
import { AddAdmins, Admins, ManageAdmins } from "./pages/Admins";
import { Power } from "./pages/Power";
import { Chat } from "./pages/Chat";
import { Blogs, ManageBlogs } from "./pages/Blogs";
import { DictionaryManagement } from "./pages/DictionaryManagement";
import { AddVendors, ManageVendors, Vendors } from "./pages/Vendors";
import { History } from "./pages/History";
import { Dashboard } from "./pages/Dashboard";
import { Cateogory } from "./pages/Cateogory";
import { Banner } from "./pages/Banner";
import { AddProduct } from "./pages/AddProduct";
import { DiscountCoupons } from "./pages/DiscountCoupons";
import { AddBlogs } from "./pages/AddBlog";
import { PdfFile } from "./pages/PdfFile";

function App() {
  return (
    <div>
      <Sidebar />
      <Switch>
        <Route path="/banner" exact component={Banner} />
        <Route path="/category" exact component={Cateogory} />

        <Route path="/history" exact component={PdfFile} />
        <Route path="/vendors" exact component={Vendors} />
        <Route path="/vendors/add" exact component={AddVendors} />
        <Route path="/vendors/manage" exact component={ManageVendors} />
        <Route path="/dictionary" exact component={DictionaryManagement} />
        <Route path="/blogs/manage" exact component={ManageBlogs} />
        <Route path="/blogs/add" exact component={AddBlogs} />
        <Route path="/blogs" exact component={Blogs} />
        <Route path="/chat" exact component={Chat} />
        <Route path="/admins" exact component={Admins} />
        <Route path="/admins/add" exact component={AddAdmins} />
        <Route path="/admins/manage" exact component={ManageAdmins} />
        <Route path="/customersupport" exact component={CustomerSupport} />
        <Route path="/inventory" exact component={Inventory} />
        <Route path="/inventory/view" exact component={ViewInventory} />
        <Route path="/coupons" exact component={Coupons} />
        <Route
          path="/coupons/discountcoupons"
          exact
          component={DiscountCoupons}
        />
        <Route path="/profile" exact component={Profile} />
        <Route path="/products" exact component={Product} />
        <Route path="/products/add" exact component={AddProduct} />
        <Route path="/products/view" exact component={ViewProduct} />
        <Route path="/" exact component={Dashboard} />
      </Switch>
    </div>
  );
}

export default App;
