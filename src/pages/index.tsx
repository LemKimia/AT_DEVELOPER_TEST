import { useEffect, useState } from "react";
import { toast } from "sonner";

import CustomCountryCard from "@/components/custom-country-card";
import Layout from "@/components/layout";

import { getCountry } from "@/utils/api";
import { Country } from "@/utils/api-types";



const Homepage = () => {
  const [countryList, setCountryList] = useState<Country[]>([]);

  const fetchCountry = async () => {
    try {
      const response = await getCountry();

      setCountryList(response);
    } catch (error) {
      toast((error as Error).message.toString());
    }
  };
   
  useEffect(() => {
    fetchCountry();
  }, []);
 
  return (
    <Layout>
      <div>
        <div className="grid grid-cols-2 gap-3 m-2 md:grid-cols-3 xl:gap-20 xl:grid-cols-5">
          {countryList.map((country) => (
            <CustomCountryCard country={country} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Homepage;
