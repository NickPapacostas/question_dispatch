import React from "react";
import { render, act } from "react-dom/test-utils";
import QueueSidebar from "../../../app/javascript/components/QueueSidebar";



let container = null;

const mockSetState = jest.fn();

jest.mock('react', () => ({
  useState: initial => [initial, mockSetState]
}));


beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

it("renders a list of queue buttons", () => {
  act(() => {
    render(<QueueSidebar />, container);
  })

  const queueButtonTest = ["AQ", "QQ", "IA", "RQ"]
  queueButtonTest
    .forEach( bt => expect(container.textContent)
    .toMatch(bt))
})