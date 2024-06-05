import { Country } from "@/utils/api-types";
import CountryDetail from "./country-detail";

interface Props {
  country: Country;
}

const CustomCountryCard = (props: Props) => {
  const { country } = props;

  return (
    <div className="flex flex-col m-1 relative hover:bg-slate-200 border-2 rounded-lg shadow-md">
      <div className="grid grid-rows-2 justify-between h-full">
        <CountryDetail country={country} />
        <div className="grid grid-rows-2 p-2">
          <div className="text-2xl font-bold truncate my-1 self-center">
            <p>{country.name.common}</p>
          </div>
          <div className="flex flex-row items-center justify-between text-sm text-right ">
            <p>{country.region}</p>
            <p>{country.subregion}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomCountryCard;
