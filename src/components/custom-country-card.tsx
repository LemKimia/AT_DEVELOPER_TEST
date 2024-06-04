import { Country } from "@/utils/api-types"
import { Link } from "react-router-dom";

interface Props {
    country: Country
}

const CustomCountryCard = (props: Props) => {
const {country} = props

  return (
    <div className="grid grid-rows-2 m-5 justify-center">
      <Link to={`/`}>
        <img
          className="h-40 w-80"
          src={country.flags.png}
          alt={country.flags.alt}
        />
      </Link>
      <div>
        <p>{country.name.common}</p>
        <p>{country.name.official}</p>
        <p>{country.capital}</p>
      </div>
    </div>
  );
}

export default CustomCountryCard