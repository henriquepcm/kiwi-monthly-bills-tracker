import App from "./App";
import { render, screen, within } from "@testing-library/react";
import "@testing-library/jest-dom";
import store from "./store/store";
import { Provider } from "react-redux";
import userEvent from "@testing-library/user-event";
import { act } from "react";

describe("App", () => {
     it("should add a bill", async () => {
          render(
               <Provider store={store}>
                    <App />
               </Provider>
          );

          await userEvent.click(
               screen.getByRole("button", { name: /open menu/i })
          );

          expect(screen.getByText(/Add bill/i)).toBeInTheDocument();

          await userEvent.click(screen.getByText(/Add bill/i));

          expect(screen.getByText(/Add bill to pay/i)).toBeInTheDocument();

          await userEvent.type(
               screen.getByPlaceholderText(/Rent/i),
               "Internet Bill"
          );
          await userEvent.type(screen.getByPlaceholderText(/0.00/i), "5000");
          await userEvent.type(screen.getByPlaceholderText(/5/i), "15");
          await userEvent.click(screen.getByRole("button", { name: /save/i }));

          expect(
               screen.getByText(/Internet Bill has been added./i)
          ).toBeInTheDocument();
     });

     it("should read the added bill's data", () => {
          render(
               <Provider store={store}>
                    <App />
               </Provider>
          );
          const internetBill = screen.getByText("Internet Bill");
          const parentDiv = internetBill.closest("div");
          const amount = within(parentDiv!).getByText("$50.00");

          expect(amount).toBeInTheDocument();
          expect(screen.getByText("15th")).toBeInTheDocument();
     });

     it("should delete the bill", async () => {
          render(
               <Provider store={store}>
                    <App />
               </Provider>
          );
          const ellipsisButtons = screen.getAllByLabelText("Open Menu");

          expect(ellipsisButtons.length).toBe(2);

          act(() => {
               ellipsisButtons[1].click();
          });

          await userEvent.click(screen.getByText("Delete bill"));
          await userEvent.click(screen.getByRole("button", { name: /yep/i }));
          expect(
               screen.getByText('"Internet Bill" has been deleted.')
          ).toBeInTheDocument();
     });
});
