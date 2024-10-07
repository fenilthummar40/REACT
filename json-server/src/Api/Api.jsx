import React, { useEffect, useState } from 'react';
import '../App.css';
import axios from 'axios';

function Api() {
  const [record, setRecord] = useState([]);
  const [title, setTitle] = useState('');
  const [view, setView] = useState('');
  const [selectedId, setSelectedId] = useState(null); 

  useEffect(() => {
    fetchApi();
  }, []);

  const fetchApi = async () => {
    try {
      let response = await axios.get("http://localhost:5000/posts");
      setRecord(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleAdd = async () => {
    try {
    
      let id = record.length + 1
      
      let addData = await axios.post("http://localhost:5000/posts", { id: id.toString() , title, view });
      setRecord([...record, addData.data]);
      setTitle('');
      setView('');
    } catch (error) {
      console.error("Error adding data:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      let data = await axios.delete(`http://localhost:5000/posts/${id}`);
      console.log(data);
      
      setRecord(record.filter((item) => item.id !== id));
    } catch (error) {
      console.error("Error deleting data:", error);
    }
  };

  const handleUpdate = async () => {
    if (selectedId !== null) {
      try {
        let updatedData = await axios.put(`http://localhost:5000/posts/${selectedId}`, { title, view });
        setRecord(record.map(item => item.id === selectedId ? updatedData.data : item));
        setSelectedId(null); 
        setTitle('');
        setView('');
      } catch (error) {
        console.error("Error updating data:", error);
      }
    }
  };

  const handleEdit = (item) => {
    setSelectedId(item.id); 
    setTitle(item.title);
    setView(item.view);
  };

  return (
    <div>
      <center><h1>json-server</h1></center>
      <hr />
      <div className="c-1">
        <div className="c-11">
          <input
            type="text"
            placeholder='title'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            type="text"
            placeholder='view'
            value={view}
            onChange={(e) => setView(e.target.value)}
          />
          <button onClick={selectedId ? handleUpdate : handleAdd}>
            {selectedId ? 'Update' : 'Add'}
          </button>
        </div>
      </div>
      <div className="row a-1">
        <div className='b'>
          <div className="c">
            {record.length > 0 ? (
              record.map((e, i) => {
                return (
                  <div className='b1' key={i}>
                    <p className='bb1'>id = {e.id}</p>
                    <p className='bb1'>title = {e.title}</p>
                    <p className='bb1'>view = {e.view}</p>
                  <div className="d-1">
                      <button onClick={() => handleDelete(e.id)}>delete</button>
                    <button onClick={() => handleEdit(e)}>Edit</button>   
                  </div>
                  </div>
                );
              })
            ) : (
              <p>Loading...</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Api;
