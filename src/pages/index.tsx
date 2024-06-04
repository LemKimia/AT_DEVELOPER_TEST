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
      <div className="grid grid-cols-4">
        {countryList.map((country) => (
          <div >
            <img src={country.flags.png} alt={country.flags.alt} />
            <p>{country.name.common}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Homepage;
