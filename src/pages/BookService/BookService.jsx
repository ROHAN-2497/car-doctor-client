import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../components/Providers/authProvider";
import { data } from "autoprefixer";

const BookService = () => {
  const service = useLoaderData();
  const { price, title, _id, img } = service;
  const { users } = useContext(AuthContext);
  const handleBookService = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const date = form.date.value;
    const email = users?.email;
    const booking = {
      customarName: name,
      email,
      date,
      img,
      service: _id,
      service_id: title,
      price,
    };
      fetch('http://localhost:5000/booking',{
        method: 'POST',
        headers:{
          'content-type':'application/json'
        },
        body: JSON.stringify(booking)
      })
      .then(res => res.json())
      .then(data =>{
        console.log(data)
        if(data.insertedId){
          alert('service book successfully')
        }
      })

    console.log(booking);
  };

  return (
    <div>
      <h3 className="text-center text-3xl">Book Service: {title}</h3>{" "}
      <form onSubmit={handleBookService}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              name="name"
              defaultValue={users?.displayName}
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Date</span>
            </label>
            <input type="date" name="date" className="input input-bordered" />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="text"
              name="email"
              defaultValue={users?.email}
              placeholder="email"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Due Amount</span>
            </label>
            <input
              type="text"
              name="duo"
              defaultValue={"$" + price}
              className="input input-bordered"
            />
          </div>
        </div>
        <div className="form-control mt-6">
          <input
            className="btn btn-primary btn-btn-block"
            type="submit"
            value="Order Confirm"
          />
        </div>
      </form>
      <div className="card-body "></div>
    </div>
  );
};

export default BookService;
