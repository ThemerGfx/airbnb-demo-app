import Header from "../components/Header";
import Banner from "../components/Banner";
import SmallCard from "../components/SmallCard";
import MediumCard from "../components/MediumCard";
import LargeCard from "../components/LargeCard";
import Footer from "../components/Footer";

export async function getStaticProps() {
  const resSmall = await fetch("https://www.jsonkeeper.com/b/4G1G").then(
    (res) => res.json()
  );
  const resMedium = await fetch("https://www.jsonkeeper.com/b/VHHT").then(
    (res) => res.json()
  );
  return {
    props: {
      resSmall,
      resMedium,
    },
  };
}

export default function Home(props: any) {
  return (
    <div className="">
      <Header placeholder={"Start your search"} />
      <Banner />

      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        <section className="pt-6">
          <h2 className="text-4xl font-semibold pb-5">Explore Nearby</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {props?.resSmall?.map((item: any) => (
              <SmallCard
                key={item.img}
                img={item.img}
                distance={item.distance}
                location={item.location}
              />
            ))}
          </div>
        </section>
        <section>
          <h2 className="text-4xl font-semibold py-8">Live Anywhere</h2>
          <div className="flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3">
            {props?.resMedium?.map((item: any) => (
              <MediumCard key={item.img} img={item.img} title={item.title} />
            ))}
          </div>
        </section>
        <LargeCard
          img="https://a0.muscache.com/im/pictures/2da67c1c-0c61-4629-8798-1d4de1ac9291.jpg?im_w=1440"
          title="The Greatest Outdoors"
          description="Wishlists created by Airbnb"
          buttonText="Get Inspired"
        />
      </main>
      <Footer />
    </div>
  );
}
