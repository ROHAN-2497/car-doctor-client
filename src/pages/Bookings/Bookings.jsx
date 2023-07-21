import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../components/Providers/authProvider";
import { data } from "autoprefixer";
import BookingRow from "./BookingRow";

const Bookings = () => {
  const { users } = useContext(AuthContext);

  const [bookings, setBookings] = useState([]);

  const url = `http://localhost:5000/booking?email=${users?.email}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setBookings(data));
  }, []);

  return (
    <div>
      <h3 className="text-5xl">Your Bookings: {bookings.length}</h3>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {
              bookings.map(booking => <BookingRow
              key={booking._id}
              booking={booking}
              ></BookingRow>)
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Bookings;
