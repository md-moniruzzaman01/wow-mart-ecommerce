import Card from "../components/Card";
import Layout from "../components/Layout";

export default function Home({data}) {
  
  const flashDeals= data?.slice(0, 5)
  console.log(flashDeals);
  return (
   <Layout title={"Home page"}>
    <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
     
      {
        flashDeals.map(pd=> <Card cardProduct={pd} key={pd._id}></Card>)
      }
    </div>
   </Layout>
  )
}

export async function getServerSideProps() {
  const res = await fetch(`https://obscure-stream-41015.herokuapp.com/products`)
  const data = await res.json()
  return {
    props: {data}, 
  }
}
