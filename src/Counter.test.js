import { render, fireEvent } from "@testing-library/react";
import Counter from "./Counter";

describe(Counter, () => {
  it("counter displays correct initial count", () => {
    const { getByTestId } = render(<Counter initialCount={0}/>);
    const countValue = Number(getByTestId("count").textContent);
    expect(countValue).toEqual(0);
  });
  it("count should increment by 1 if the increment button is clicked", () => {
    const { getByTestId, getByRole } = render(<Counter initialCount={0}/>);
    const incrementBtn = getByRole("button", { name: "Increment" });
    const countValue1 = Number(getByTestId("count").textContent);
    expect(countValue1).toEqual(0);
    fireEvent.click(incrementBtn)
    const countValue2 = Number(getByTestId("count").textContent);
    expect(countValue2).toEqual(1);
  });
  it("count should decrement by 1 if the decrement btn is clicked", () => {
    const { getByTestId, getByRole } = render(<Counter initialCount={0}/>);
    const decrementBtn = getByRole("button", { name: "Decrement" });
    expect(Number(getByTestId("count").textContent)).toEqual(0);
    fireEvent.click(decrementBtn)
    expect(Number(getByTestId("count").textContent)).toEqual(-1);
  })
  it("count should be 0 if the restart button is clicked" , () => {
    const { getByTestId, getByRole }= render(<Counter initialCount={50} />);
    const restartBtn = getByRole("button", { name: "Restart"});
    expect(Number(getByTestId("count").textContent)).toEqual(50);
    fireEvent.click(restartBtn);
    expect(Number(getByTestId("count").textContent)).toEqual(0);
  });
  it("count should invert signs if the switch btn is clicked", () => {
    const { getByTestId, getByRole }= render(<Counter initialCount={50} />);
    const switchBtn = getByRole("button", { name: "Switch Signs"});
    expect(Number(getByTestId("count").textContent)).toEqual(50);
    fireEvent.click(switchBtn)
    expect(Number(getByTestId("count").textContent)).toEqual(-50);

  })
})