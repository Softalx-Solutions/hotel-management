import "./App.css";
import { Admin, Resource, ListGuesser, CustomRoutes } from "react-admin";
import jsonServerProvider from "ra-data-json-server";
import { Route } from "react-router-dom";
import {UserList} from './data'
import { Settings } from "./pages";

const dataProvider = jsonServerProvider("https://jsonplaceholder.typicode.com");


const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource name="users" list={UserList} />
    {/* <Resource name="posts" list={ListGuesser} /> */}
    <CustomRoutes>
      <Route path="/settings" element={<Settings />} />
    </CustomRoutes>
  </Admin>
);

export default App;
