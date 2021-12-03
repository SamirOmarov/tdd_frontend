import { render, screen } from "@testing-library/react";
import TodoList from "./TodoList";

describe("TodoList UI Test", () => {
  it("should render an empty message if the List is empty", () => {
    render(<TodoList />);
    expect(screen.getByText(/no task/i)).toBeInTheDocument();
  });

  it("should render a list of todos(titles)", () => {
    const todos = [
      { id: 0, title: "Task A", completed: false },
      { id: 1, title: "Task B", completed: false },
      { id: 2, title: "Task C", completed: false },
    ];
    render(<TodoList todos={todos} />);
    todos.forEach((todo) =>
      expect(screen.getByText(todo.title)).toBeInTheDocument()
    );
  });

  it("should render an input field for new Todo", () => {
    render(<TodoList />);
    const todoInput = screen.getByTestId("input-field");
    expect(todoInput).toBeInTheDocument();
  });

  it("should render an add button for new Todo", () => {
    render(<TodoList />);
    const submitButton = screen.getByTestId("submit-button");
    expect(submitButton).toBeInTheDocument();
  });
});
