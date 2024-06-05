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
          <SheetTitle className="text-4xl font-bold my-2">
            {country.name.common}
          </SheetTitle>
          <SheetDescription>
            <img src={country.flags.png} alt={country.flags.alt} />
          </SheetDescription>
        </SheetHeader>
        <div className="flex flex-col gap-4 py-4 w-full overflow-auto ">
          <div>
            <p className="text-xl font-bold my-2">At a glance</p>
            <div className="text-lg">
              <div className="grid grid-cols-2">
                <p>Official Name </p>
                <p>: {country.name.official}</p>
              </div>
              <div className="grid grid-cols-2">
                <p>Capital </p>
                <p>: {country.capital}</p>
              </div>
              <div className="grid grid-cols-2">
                <p>Population </p>
                <p>: {country.population}</p>
              </div>
            </div>
          </div>
          <div>
            <p className="text-xl font-bold my-2">Where in the world</p>
            <div className="text-lg">
              <div className="grid grid-cols-2">
                <p>Continent</p>
                <p>: {country.region}</p>
              </div>
              <div className="grid grid-cols-2">
                <p>Region</p>
                <p>: {country.continents}</p>
              </div>
              <div className="grid grid-cols-2">
                <p>Subregion </p>
                <p>: {country.subregion}</p>
              </div>
            </div>
          </div>
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <Button variant="ghost" className="text-3xl">Explore more</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default CountryDetail;
