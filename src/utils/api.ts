import axios from "axios"

import { Country } from "@/utils/api-types";

export const getCountry = async () => {
    try {
        const response = await axios.get("https://restcountries.com/v3.1/all");

        return response.data as Country[]
    } catch (error: any) {
        throw Error(error.response.data.message)   
    }
}

// export const getCountryDetails = async (name: string) => {
//   try {
//     const response = await axios.get(
//       `https://restcountries.com/v3.1/name/${name}`
//     );
//
//     return response.data as Country;
//   } catch (error: any) {
//     throw Error(error.response.data.message);
//   }
// };