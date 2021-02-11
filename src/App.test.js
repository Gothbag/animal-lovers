import React from "react";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "./redux/store";
import App from "./App";

beforeAll(() => jest.spyOn(window, "fetch"));

describe("App", () => {
  it("should render as expected", () => {
    window.fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => []
    });

    const { getByText } = render(
      <Provider store={store}>
        <App />
      </Provider>
    );

    expect(getByText("Top Animal Fans")).toBeInTheDocument();
  });

  it("should render as many animal fan elements as animals found", async () => {
    window.fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => [
        {
          id: "5fbfe211d32e20623de48785",
          name: {
            given: "Irma",
            surname: "Mendez"
          },
          points: 28,
          animals: ["cat", "dog"],
          isActive: true,
          age: 20
        }
      ]
    });

    const { getByText } = render(
      <Provider store={store}>
        <App />
      </Provider>
    );

    expect(await screen.findByText("cat")).toBeInTheDocument();
    expect(await screen.findByText("dog")).toBeInTheDocument();
  });
});
