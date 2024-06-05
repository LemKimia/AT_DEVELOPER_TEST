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
          className="h-full w-full self-center drop-shadow-lg"
          src={country.flags.png}
          alt={country.flags.alt}
        />
      </SheetTrigger>
      <SheetContent className="overflow-y-auto">
        <SheetHeader>
          <SheetTitle className="text-4xl font-bold my-2 xl:text-5xl md:text-center">
            {country.name.common}
          </SheetTitle>
          <SheetDescription>
            <img
              src={country.flags.png}
              alt={country.flags.alt}
              className="drop-shadow-lg"
            />
          </SheetDescription>
        </SheetHeader>
        <div className="flex flex-col gap-4 py-4 w-full overflow-auto ">
          <div>
            <p className="text-xl font-bold my-2 select-none md:text-2xl">
              At a glance
            </p>
            <div className="text-lg">
              <div className="grid grid-cols-2">
                <p className="select-none">Official Name </p>
                <p>: {country.name.official}</p>
              </div>
              <div className="grid grid-cols-2">
                <p className="select-none">Capital </p>
                <p>: {country.capital}</p>
              </div>
              <div className="grid grid-cols-2">
                <p className="select-none">Population </p>
                <p>: {country.population}</p>
              </div>
            </div>
          </div>
          <div>
            <p className="text-xl font-bold my-2 select-none md:text-2xl">
              Where in the world
            </p>
            <div className="text-lg">
              <div className="grid grid-cols-2">
                <p className="select-none">Continent</p>
                <p>: {country.region}</p>
              </div>
              <div className="grid grid-cols-2">
                <p className="select-none">Region</p>
                <p>: {country.continents}</p>
              </div>
              <div className="grid grid-cols-2">
                <p className="select-none">Subregion</p>
                <p>: {country.subregion}</p>
              </div>
            </div>
          </div>
        </div>
        <SheetFooter>
          <SheetClose asChild className="flex flex-auto justify-center my-5">
            <Button
              variant="ghost"
              className="text-3xl select-none transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-gray-500 duration-300"
            >
              Explore more
            </Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default CountryDetail;
