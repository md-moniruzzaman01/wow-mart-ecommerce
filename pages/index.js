import Card from "../components/Card";
import Layout from "../components/Layout";
import HorizontalCard from "../components/sharecomponents/HorizontalCard";
import SectionHead from "../components/sharecomponents/SectionHead";

export default function Home({ data }) {

  const flashDeals = data?.slice(0, 5);
  const NewArrivels = data.slice(3, 7);
  const Bestseller= data.slice(8, 11);
  return (
    <Layout title={"Home page"}>
      <>
        {/* flash deal */}
        <div className="min-h-[60vh] bg-gray-50">
          <SectionHead>Flash Deals</SectionHead>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-5">
            {flashDeals.map(pd => <Card cardProduct={pd} key={pd._id}></Card>)}
          </div>
        </div>
        {/* new arraivel */}
        <div className="gridfour">
          <div className=" bg-gray-50">
            <SectionHead>New Arrivals</SectionHead>
            <div className="mt-5 flex justify-center relative">
              <img className="w-full" src="https://i.ibb.co/R2NTszY/banner3.jpg" alt="" />
              <div className='absolute inset-1/5 md:inset-1/4 text-center text-gray-800 space-y-0 md:space-y-1'>
                <h1 className="text-base md:text-4xl font-semibold">Kitchen Utensils</h1>
                <p className="pb-2 text-xs md:text-base">Itss long established fact that render</p>
                <button className='bg-white px-5 md:px-11 py-0.5 md:py-1.5 font-semibold '>Shop </button>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
              {NewArrivels.map(pd => <Card cardProduct={pd} key={pd._id}></Card>)}
            </div>
          </div>
          {/* best seller */}
          <div className="mt-2 mx-4">
          {Bestseller.map(pd => <HorizontalCard bestsell={pd} key={pd._id}></HorizontalCard>)}
          </div>
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
