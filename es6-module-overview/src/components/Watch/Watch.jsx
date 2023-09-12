const Watch = ({ watch }) => {
  const { name, price, brand } = watch;
  return (
    <div>
      <h1>Watch:{name}</h1>
      <h4>{brand}</h4>
      <p>Watch price:{price}</p>
    </div>
  );
};

export default Watch;
