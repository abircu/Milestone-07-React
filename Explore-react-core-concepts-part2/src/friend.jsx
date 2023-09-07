import Friends from "./friends";

export default function Friend({ friend }) {
  const { name, email, address, phone } = friend;
  console.log(friend);
  return (
    <div className="box">
      <h4>Name: {name} </h4>
      <p>Email: {email} </p>
      <p>Adress: {address.street} </p>
      <p>Phone: {phone} </p>
    </div>
  );
}
