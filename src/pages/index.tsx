import CustomCountryCard from "@/components/custom-country-card";
import { getCountry } from "@/utils/api";
import { Country } from "@/utils/api-types";
import React, { useEffect, useState } from "react";
import { toast } from "sonner";

const Homepage = () => {
  const [countryList, setCountryList] = useState<Country[]>([]);

  useEffect(() => {
    const fetchCountry = async () => {
      try {
        const response = await getCountry();

        setCountryList(response);
      } catch (error) {
        toast((error as Error).message.toString());
      }
    };

    fetchCountry();
  }, []);

  return (
    <div>
      <div className="grid grid-cols-3">
        {countryList.map((country) => (
          <CustomCountryCard 
          country={country}
          />
        ))}
      </div>
    </div>
  );
};

export default Homepage;
