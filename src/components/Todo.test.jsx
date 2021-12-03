import { render, screen } from "@testing-library/react";
import Todo from "./Todo";

describe("Todo UI Test", () => {
  const todos = [
    { id: 0, title: "Task A", completed: false },
    { id: 1, title: "Task B", completed: false },
    { id: 2, title: "Task C", completed: false },
  ];
  it("should render todo item with corresponding title", () => {
    render(<Todo todo={todos[0]} />);
    const todoTitle = screen.getByText(todos[0].title);
    expect(todoTitle).toBeInTheDocument();
  });

  it("should render todo item with complete button", () => {
    render(<Todo todo={todos[0]} />);
    const completeButton = screen.getByTestId("complete-button");
    expect(completeButton).toBeInTheDocument();
  });
});
