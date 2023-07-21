import React from "react";

const BookingRow = ({ booking }) => {
  const { service_id, price, date, email, img} = booking;

  return (
    <tr>
      <th>
        <label>
          <input type="checkbox" className="checkbox" />
        </label>
      </th>
      <td>
        <div className="avatar">
          <div className="w-24 rounded h-12">
           {img && <img
              src={img}
              alt="Avatar Tailwind CSS Component"
            />}
          </div>
        </div>
      </td>
      <td>{service_id}</td>
      <td>{email}</td>
      <td>${price}</td>
      <td>{date}</td>
      <th>
        <button className="btn btn-ghost btn-xs">details</button>
      </th>
    </tr>
  );
};

export default BookingRow;
