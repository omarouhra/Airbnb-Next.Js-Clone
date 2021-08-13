import { useRouter } from "next/dist/client/router";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { format } from "date-fns";
import InfoCard from "../components/InfoCard";
import Map from "../components/Map";

function Search({ searchResults }) {
  const router = useRouter();
  const { location, startDate, endDate, noOfGuests } = router.query;
  const formattedStartDate = format(new Date(startDate), "dd MMM yy");
  const formattedEndDate = format(new Date(endDate), "dd MMM yy");
  const rangeDate = `-${formattedStartDate} - ${formattedEndDate}-`;
  return (
    <div>
      <Header
        placeholder={`${location} | ${rangeDate} | ${noOfGuests} guests`}
      />
      <main className='flex'>
        <section className='flex-grow pt-14 px-6'>
          <p className='text-xm'>
            300+ Stays {rangeDate} for {noOfGuests} guests
          </p>
          <h1 className='text-3xl font-semibold mb-6 mt-2'>
            Stays in {location}
          </h1>
          <div className='hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-normal'>
            <button className='button'>Cancellation Flexibility</button>
            <button className='button'>Type of Place</button>
            <button className='button'>Prices</button>
            <button className='button'>Rooms and Beds</button>
            <button className='button'>More filters</button>
          </div>

          <div className='flex flex-col overflow-auto h-[800px]'>
            {searchResults.map(
              ({ img, location, title, description, star, price, total }) => (
                <InfoCard
                  key={title}
                  img={img}
                  location={location}
                  title={title}
                  description={description}
                  star={star}
                  price={price}
                  total={total}
                />
              )
            )}
          </div>
        </section>
        <section className='hidden xl:inline-flex xl:min-w-[600px]'>
          <Map searchResults={searchResults} />
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default Search;

export async function getServerSideProps() {
  const searchResults = await fetch("https://links.papareact.com/isz").then(r =>
    r.json()
  );

  return {
    props: {
      searchResults,
    },
  };
}
