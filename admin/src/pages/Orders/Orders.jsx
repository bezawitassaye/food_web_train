import React, { useState, useEffect } from 'react';
import "./Orders.css";
import axios from "axios";
import { toast } from 'react-toastify';
import { assets } from '../../assets/assets';

const Orders = () => {
  const backendurl = "http://localhost:4000";
  const [orders, setorders] = useState([]);

  const fetchallorders = async () => {
    try {
      const response = await axios.post(backendurl + "/api/order/listoredrs");
      console.log(response);
      if (response.data.success) {
        setorders(response.data.data);
      } else {
        toast.error("Error");
      }
    } catch (error) {
      console.error(error);
      toast.error("Error fetching orders");
    }
  };

  useEffect(() => {
    fetchallorders();
  }, []);

  console.log(orders);

  return (
    <div className='order add'>
      <h3>Order Page</h3>
      <div className="order-list">
        {
          orders.map((order, index) => {
            return ( // Added return here
              <div key={index} className='order-item'>
                <img src={assets.parcel_icon} alt="" />
                <div>
                  <p className='order-item-food'>
                    {
                      order.items.map((item, index) => {
                        if (index === order.items.length - 1) {
                          return item.name + " x " + item.quantity;
                        } else {
                          return item.name + " x " + item.quantity + ", ";
                        }
                      })
                    }
                  </p>
                  
                </div>
              </div>
            );
          })
        }
      </div>
    </div>
  );
}

export default Orders;
