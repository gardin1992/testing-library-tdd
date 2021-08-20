import { axiosHttpClient } from "services/http/AxiosHttpClient";
import { HttpStatusCode } from "services/http/HttpClient";

export async function PokemonApi() {
  const data = await axiosHttpClient({
    method: "get",
    url: "pokemon",
  });

  expect(data.statusCode).toBe(HttpStatusCode.ok);
}

it("should test request axions", async () => {
  await PokemonApi();
});
