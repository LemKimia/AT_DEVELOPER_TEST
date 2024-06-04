import { Country } from "@/utils/api-types"


interface Props {
    country: Country
}

const CustomCountryCard = (props: Props) => {
const {country} = props

  return (
    <div className="flex flex-col h-full m-1 shadow-lg ">
      <div className="flex flex-col items-center justify-between h-full">
        <img
          className="h-32 w-60 self-center"
          src={country.flags.png}
          alt={country.flags.alt}
        />
        <div className="text-center">
          <p>{country.name.common}</p>
          <p>{country.name.official}</p>
          <p>{country.region}</p>
        </div>
      </div>
    </div>
  );
}

export default CustomCountryCard