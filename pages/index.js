import Container from "../components/container/Container";


export default function Home({data}) {
  return (
      <Container data={data}/>
  )
}
export async function getServerSideProps() {
  try {
    const res = await fetch('https://restcountries.com/v2/all?fields=name,capital,flags');
    const data = await res.json();
    return { props: { data } }

  } catch (error) {
    console.log(error)
  }
}
