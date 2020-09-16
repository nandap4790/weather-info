import React from "react";
import { render, wait, screen } from "@testing-library/react";

import FieldWithlabel from ".";

beforeEach(() => {
  jest.useFakeTimers();
});

test("default state of field with label when no values are passed", () => {
  const { getByText } = render(<FieldWithlabel />);
  const textElement = getByText(":");
  expect(textElement).toBeInTheDocument();
});

test("state of field with label when wrapper class is passed", () => {
  const { getByText, container } = render(
    <FieldWithlabel wrapperClass="wrapper-class" />
  );
  const wrapperClass = container.querySelector("div").className;
  const textElement = getByText(":");
  expect(wrapperClass).toBe("wrapper-class");
  expect(textElement).toBeInTheDocument();
});

test("state of field with label when all props are passed", async () => {
  const { getByText, container } = render(
    <FieldWithlabel
      wrapperClass="wrapper-class"
      label="Test"
      value1="Value 1"
      value2="Value2"
      value1Class="value-class"
    />
  );

  // wait for appearance
  await wait(() => {
    const spanClass = container.querySelectorAll("span");
    expect(spanClass[0].className).toBe("field-label");
    expect(spanClass[1].className).toBe("value-class");
    expect(spanClass[2].className).toBe("field-val");
    screen.getAllByText((content, node) => {
      const hasText = (node) => node.textContent === content;
      const nodeHasText = hasText(node);
      const childrenDontHaveText = Array.from(node.children).every(
        (child) => !hasText(child)
      );

      return nodeHasText && childrenDontHaveText;
    });
  });
});
