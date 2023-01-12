import axios from "axios";
import { getStateService } from "../src/services/getStateService";
import { responseMock } from "../src/mocks/responseApi";



describe("getStateService", () => {
  beforeEach(() => {
    jest.clearAllMocks()
  });

  test("it should return state", async () => {
    axios.get = jest
      .fn()
      .mockResolvedValue(responseMock)

    const response = await getStateService()

    expect(axios.get).toBeCalled()
    expect(response).toBe(responseMock.uf)

  });

  test("it should log in console when http request is invalid", async () => {
    console.log = jest.fn()
    axios.get = jest.fn()
    .mockImplementation(() => {
      throw new Error("erro na requisição http");
    });

    await getStateService()
    expect(console.log).toHaveBeenCalledWith("erro na requisição http");

  });
  
});
