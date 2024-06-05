import CountryDetail from "@/components/country-detail";

import { Country } from "@/utils/api-types";
interface Props {
  country: Country;
}

const CustomCountryCard = (props: Props) => {
  const { country } = props;

  return (
    <div className="flex flex-col m-1 relative hover:bg-gray-200 hover:-translate-y-1 hover:scale-105  rounded-lg drop-shadow-lg shadow-lg">
      <div className="grid grid-rows-2 justify-between h-full">
        <CountryDetail country={country} />
        <div className="grid grid-rows-2 p-2 select-none md:p-5">
          <div className="text-2xl font-bold truncate my-1 self-center md:text-3xl xl:text-4xl">
            <p>{country.name.common}</p>
          </div>
          <div className="flex flex-row items-center justify-between text-sm text-right md:text-md xl:text-lg">
            <p>{country.region}</p>
            <p>{country.subregion}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomCountryCard;
