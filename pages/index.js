import Link from "next/link";
import Card from "../components/Card";
import Layout from "../components/Layout";
import { IoIosArrowForward } from "react-icons/io";
export default function Home({ data }) {

  const flashDeals = data?.slice(0, 5)

  return (
    <Layout title={"Home page"}>
      <>
        <div className="flex justify-between items-center py-2 mx-2 border-b">
          <h2 className="text-3xl">Flash Deals</h2>
          <Link href="/products"><a><button className="flex items-center">View All <span className="ml-1 text-xl"><IoIosArrowForward /></span></button></a></Link>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {flashDeals.map(pd => <Card cardProduct={pd} key={pd._id}></Card>)}
        </div>
      </>
    </Layout>
  )
}

export async function getServerSideProps() {
  const res = await fetch(`https://obscure-stream-41015.herokuapp.com/products`)
  const data = await res.json()
  return {
    props: { data },
  }
}
