import React from "react";
import { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import axios from "axios";

import "./App.css";
import Header from "./Header";
import ServiceTotals from "./components/ServiceTotals";

const BASE_URL =
  "https://api.airtable.com/v0/appBipVvhjiI1uNnZ/Medical%20Expenses";
  

function App() {
  const [records, updateRecords] = useState([]);
  const [fetchRecords, invokeFetch] = useState(true);

  useEffect(() => {
    const getAirtableRecords = async () => {
      const response = await axios.get(`${BASE_URL}?Main%20View`, {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`,
        },
      });
      updateRecords(response.data.records);
      console.log(response.data.records);
    };
    getAirtableRecords();
  }, [fetchRecords]);

  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/">
          <ServiceTotals
            records={records}
            fetchRecords={fetchRecords}
            invokeFetch={invokeFetch}
          />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
