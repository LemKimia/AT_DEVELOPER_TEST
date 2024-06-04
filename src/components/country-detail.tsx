import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { Button } from "./ui/button";
import { Country } from "@/utils/api-types";

interface Props {
  country: Country;
}

const CountryDetail = (props: Props) => {
  const { country } = props;

  return (
    <Sheet>
      <SheetTrigger>
        <img
          className="h-full w-full self-center"
          src={country.flags.png}
          alt={country.flags.alt}
        />
      </SheetTrigger>
      <SheetContent className="overflow-y-auto">
        <SheetHeader>
          <SheetTitle>{country.name.common}</SheetTitle>
          <SheetDescription>
            <img src={country.flags.png} alt={country.flags.alt} />
          </SheetDescription>
        </SheetHeader>
        <div className="flex flex-col gap-4 py-4 w-full overflow-auto">
          <div>
            <p>At a glance</p>
            <p>Official Name : {country.name.official}</p>
            <p>Capital : {country.capital}</p>
            <p>Population : {country.population}</p>
          </div>
          <div>
            <p>Where in the world</p>
            <p>Continent : {country.region}</p>
            <p>Region : {country.continents}</p>
            <p>Subregion : {country.subregion}</p>
          </div>
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <Button variant="ghost">Explore again</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default CountryDetail;
