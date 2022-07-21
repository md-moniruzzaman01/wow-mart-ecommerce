import Ads1 from "../components/Ads/Ads1";
import Card from "../components/Card";
import Carosol from "../components/Carosol/Carosol";
import Layout from "../components/Layout";
import Recomendetion from "../components/Recommendetion/Recomendetion";
import HorizontalCard from "../components/sharecomponents/HorizontalCard";
import SectionHead from "../components/sharecomponents/SectionHead";
import TreindingNavbar from "../components/Treinding/TreindingNavbar";

export default function Home({ data }) {

  const flashDeals = data?.slice(0, 5);
  const NewArrivels = data.slice(3, 7);
  const Bestseller= data.slice(8, 11);
  const recommend= data.slice(4, 14)
  return (
    <Layout title={"Home page"}>
      <>
      <Carosol></Carosol>
      <TreindingNavbar></TreindingNavbar>
      <Ads1></Ads1>
        {/* flash deal */}
        <div className="min-h-[60vh] bg-gray-50 my-11">
          <SectionHead>Flash Deals</SectionHead>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-5 mx-2">
            {flashDeals.map(pd => <Card cardProduct={pd} key={pd._id}></Card>)}
          </div>
        </div>
        {/* new arraivel */}
        <div className="gridfour my-11">
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
         <div className="bg-gray-50">
         <SectionHead>Best Seller</SectionHead>
          <div className="mt-2 mx-4">
          {Bestseller.map(pd => <HorizontalCard bestsell={pd} key={pd._id}></HorizontalCard>)}
          </div>
         </div>
        </div>

        <div className="bg-gray-50 min-h-[60vh] px-2">
          <SectionHead>Recommended for you</SectionHead>
          <Recomendetion recommend={recommend}></Recomendetion>
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
