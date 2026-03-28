import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { render } from "@testing-library/react";

test("renders app", () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
});
