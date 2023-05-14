import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../system/providers/AuthProvider";

const CheckOut = () => {
  const { user } = useContext(AuthContext);
  const { _id, title, price, img } = useLoaderData();

  const handleCheckOut = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const date = form.date.value;
    const email = user?.email;
    const booking = {
      customerName: name,
      email,
      date,
      img,
      service: title,
      service_id: _id,
      price,
    };

    fetch("https://car-doctor-server-xi-olive.vercel.app/bookings", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert("booking successfully");
        }
      });
  };
  return (
    <div className="my-16 lg:my-28">
      <h2 className="text-center text-3xl font-bold">Book Service: {title}</h2>
      <form onSubmit={handleCheckOut}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              name="name"
              defaultValue={user?.displayName}
              placeholder="name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Date</span>
            </label>
            <input
              type="date"
              name="date"
              placeholder="Date"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              defaultValue={user?.email}
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Due amount</span>
            </label>
            <input
              type="number"
              placeholder="Due amount"
              defaultValue={price}
              className="input input-bordered"
              readOnly
            />
          </div>
        </div>
        <div className="form-control mt-6">
          <input
            className="btn btn-error btn-block"
            type="submit"
            value="Confirm Order"
          />
        </div>
      </form>
    </div>
  );
};

export default CheckOut;
