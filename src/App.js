import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Users from './components/Users';
import Pagination from './components/Pagination';

function App() {
  const [loading, setLoading] = useState([false]);
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage, setUsersPerPage] = useState(20);

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

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
      <Users loading={loading} users={currentUsers} />
      <Pagination
        usersPerPage={usersPerPage}
        totalUsers={users.length}
        paginate={paginate}
      />
    </div>
  );
}

export default App;
