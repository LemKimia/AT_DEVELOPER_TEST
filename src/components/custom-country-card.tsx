import { Country } from "@/utils/api-types";
import CountryDetail from "./country-detail";

interface Props {
  country: Country;
}

const CustomCountryCard = (props: Props) => {
  const { country } = props;

  return (
    <div className="flex flex-col h-full m-1 relative hover:bg-slate-200 border-2 rounded-lg shadow-md">
      <div className="grid grid-rows-2 justify-between h-full">
        <CountryDetail country={country} />
        <div className=" p-2">
          <div className="text-2xl my-2">
            <p>{country.name.common}</p>
          </div>
          <div>
            <p>Capital : {country.capital}</p>
            <p>Continents : {country.region}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomCountryCard;
