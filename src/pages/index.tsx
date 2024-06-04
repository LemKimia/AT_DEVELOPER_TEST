import CustomCountryCard from "@/components/custom-country-card";
import { getCountry } from "@/utils/api";
import { Country } from "@/utils/api-types";
import { useEffect, useState } from "react";
import { toast } from "sonner";

const Homepage = () => {
  const [countryList, setCountryList] = useState<Country[]>([]);

  const fetchCountry = async () => {
    try {
      const response = await getCountry();

      setCountryList(response);
      console.log(countryList);
    } catch (error) {
      toast((error as Error).message.toString());
    }
  };
   
  useEffect(() => {
    fetchCountry();
  }, []);

  return (
    <div>
      <div className="grid grid-cols-2 gap-5">
        {countryList.map((country) => (
          <CustomCountryCard country={country} />
        ))}
      </div>
    </div>
  );
};

export default Homepage;
