import React, { useEffect, useState } from "react";
import './Data.css'
import Aos from "aos";


// Sample Data
const sampleData = [
  { id: 1, name: "SONATA", Title: "Trending Day & Date Functio", price: 4000 },
  { id: 2, name: "Fastrack", Title: "All Black Combo Set of Wayf", price: 1000 },
  { id: 3, name: "Titan", Title: "Volt Analog Wat", price: 5000 },
  { id: 4, name: "Corana", Title: "Analog Watch - For Men", price: 8000},
  { id: 5, name: "Fastrack", Title: "Minimalists Analog Watch", price: 3500},
  { id: 6, name: "Corana", Title: "Original G shoc", price: 4000 },
  { id: 7, name: "ROSEVILLA", Title: "Original G shoc", price: 4500 },
  { id: 8, name: "PROVOGUE", Title: "Trending Premium Quality", price: 2000 },
  { id: 9, name: "Corana", Title: "Stunners 9.0 Analog", price: 2900 },
  { id: 10, name: "Titan", Title: "Bare Basics Analog Watch", price: 2200 },


];

const DataTable = () => {
  const [searchTerm, setSearchTerm] = useState(""); 

  const filteredData = sampleData.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

    useEffect(() => {
      Aos.init({
        duration: 1000, 
        once: true,
      });
    }, []);
  return (
    <div data-aos="zoom-in" className="a-1">
      <h1>Data Table Filter</h1>

      <input
        type="text"
        placeholder="Search by name..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <table border="1" style={{ marginTop: "20px", width: "100%" }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Title</th>
            <th>price</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.length > 0 ? (
            filteredData.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.Title}</td>
                <td>{item.price}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4">No results found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
