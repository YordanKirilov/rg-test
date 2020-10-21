import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Users from './components/Users';

function App() {
  const [loading, setLoading] = useState([false]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // TODO:(yk) add network error handling
    const fetchUsers = async () => {
      setLoading(true);
      const res = await axios.get('https://hiring.rewardgateway.net/list', {
        auth: {
          username: 'medium',
          password: 'medium',
        },
      });
      setUsers(res.data);
      setLoading(false);
    };

    fetchUsers();
  }, []);
  console.log(users);

  return (
    <div className="App">
      <Users loading={loading} users={users} />
    </div>
  );
}

export default App;
