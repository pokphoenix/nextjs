export const getStaticPaths = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();

  // map data to an array of path objects with params (id)
  const paths = data.map(ninja => {
    return {
      params: { id: ninja.id.toString() }
    }
  })

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch('https://jsonplaceholder.typicode.com/users/'+id);
  const data = await res.json();
  return {
      props: { poktest: data}
  }
}



const Details = ({poktest}) => {
  return (
    <div>
      <h1>Details Page</h1>
      <p>{poktest.name}</p>
      <p>{poktest.email}</p>
      <p>{poktest.website}</p>
      <p>{poktest.address.city}</p>
    </div>
  );
}

export default Details;