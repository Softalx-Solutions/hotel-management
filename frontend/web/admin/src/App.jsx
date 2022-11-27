import React from "react";
import { Admin, Resource, ListGuesser } from "react-admin";
import jsonServerProvider from "ra-data-json-server";
import {UserList} from './data'
const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');


function App() {
  return (
    <Admin dataProvider={dataProvider}>
      <Resource name='users' list={UserList}/>
    </Admin>
  );
}

export default App;
