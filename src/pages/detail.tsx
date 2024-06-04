import { getCountryDetails } from "@/utils/api";
import { Country } from "@/utils/api-types";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "sonner";

const Details = () => {
  const [countryDetail, setCountryDetail] = useState<Country>();
  const [loading, setLoading] = useState(true)
  const { name } = useParams() as { name: string };

  const fetchDetail = async () => {
    setLoading(true)
    try {
      const response = await getCountryDetails(name!);

      setLoading(false)
      setCountryDetail(response);

      console.log(countryDetail?.region) 
    } catch (error) { 
      toast((error as Error).message.toString());
    }
  };

  useEffect(() => {
    fetchDetail();
  }, []);

  if (loading) return "Loading ..."
  return (
    <div className="grid grid-rows-2 m-5 justify-center">
      {countryDetail && (
        <div>
          <div>
            <p>test</p>
            <p>{countryDetail.continents}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Details;
