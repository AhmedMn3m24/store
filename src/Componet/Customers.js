import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import axios from 'axios';

function Customers() {
  const [data, setData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
  });

  const [customers, setCustomers] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);

  const loadCustomers = async () => {
    try {
      const response = await axios.get('http://localhost:7000/Customers');
      setCustomers(response.data);
    } catch (error) {
      console.error("Error loading customers:", error);
    }
  };

  useEffect(() => {
    loadCustomers();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:7000/Customers', data);
      setCustomers([...customers, { ...data, id: response.data.id }]);
      handleClear();
    } catch (error) {
      console.error("Error adding customer:", error);
    }
  };

  const handleClear = () => {
    setData({
      name: '',
      email: '',
      phone: '',
      password: '',
    });
    setEditingIndex(null);
  };

  const handleEdit = (index) => {
    const customerData = customers[index];
    setData(customerData);
    setEditingIndex(index);
  };

  const handleDelete = async (index) => {
    const customerId = customers[index]?.id;
    try {
      await axios.delete(`http://localhost:7000/Customers/${customerId}`);
      const updatedCustomers = customers.filter((_, i) => i !== index);
      setCustomers(updatedCustomers);
    } catch (error) {
      console.error("Error deleting customer:", error);
    }
  };

  return (
    <div className='Crud'>
      <form onSubmit={handleSubmit}>
        <input style={{ width: "20%", padding: 5 }} type="text" placeholder="name" value={data.name} onChange={(e) => setData({ ...data, name: e.target.value })} required />
        <br />
        <br />
        <input style={{ width: "20%", padding: 5 }} type="email" placeholder="email" value={data.email} onChange={(e) => setData({ ...data, email: e.target.value })} required />
        <br />
        <br />
        <input style={{ width: "20%", padding: 5 }} type="tel" placeholder="phone" value={data.phone} onChange={(e) => setData({ ...data, phone: e.target.value })} required />
        <br />
        <br />
        <input style={{ width: "20%", padding: 5 }} type="password" placeholder="password" value={data.password} onChange={(e) => setData({ ...data, password: e.target.value })} required />
        <br />
        <Button style={{ width: "8%", position: "relative", top: 10, left: 5, background: "green" }} type="submit">{editingIndex !== null ? 'Update' : 'Add'}</Button>
        <Button style={{ width: "8%", position: "relative", top: 10, left: 10, background: "red" }} onClick={handleClear}>{'Clear'}</Button>
      </form>
      <table style={{ borderCollapse: 'collapse', width: '50%', position: "relative", top: "150px" }}>
        <thead >
          <tr style={{ border: '2px solid black', }}>
            <th style={{ border: '2px solid black', padding: '8px' }}>Name</th>
            <th style={{ border: '2px solid black', padding: '8px' }}>Email</th>
            <th style={{ border: '2px solid black', padding: '8px' }}>Phone</th>
            <th style={{ border: '2px solid black', padding: '8px' }}>Action</th>
          </tr>
        </thead>
        <tbody style={{ position: 'relative', top: '23px', color: 'black' }}>
          {customers.map((customer, index) => (
            <tr key={customer.id}>
              <td style={{ border: '2px solid black', padding: '8px' }}>{customer.name}</td>
              <td style={{ border: '2px solid black', padding: '8px' }}>{customer.email}</td>
              <td style={{ border: '2px solid black', padding: '8px' }}>{customer.phone}</td>
              <td style={{ border: '2px solid black', padding: '8px' }}>{customer.Action}</td>
              <div id="btn">
                <Button style={{ marginRight: '5px' }} onClick={() => handleEdit(index)}>Edit</Button>
                <Button style={{ background: "red", marginRight: '5px' }} onClick={() => handleDelete(index)}>Delete</Button>
              </div>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Customers;
