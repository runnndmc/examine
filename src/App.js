import React from "react";
import { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";

import "./App.css";
import Header from "./Header";
import axios from "axios";

function App() {
  const [records, updateRecords] = useState([]);
  const [fetchRecords, invokeFetch] = useState(true);

  useEffect(() => {
    const getAirtableRecords = async () => {
      const response = await axios.get(
        `https://api.airtable.com/v0/appBipVvhjiI1uNnZ/Patient?maxRecords=3&view=Main%20View`,
        {
          headers: {
            Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`
          },
        }
      );
      updateRecords(response.data);
      console.log(response);
    };
    getAirtableRecords();
  }, [fetchRecords]);

  return (
    <div className="App">
      <Header />
    </div>
  );
}

export default App;
