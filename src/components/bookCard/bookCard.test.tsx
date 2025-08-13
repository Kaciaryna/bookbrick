import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import BookCard from "@/components/bookCard/BookCard";
import { testBook } from "@/utils/test/test-utils";

describe("BookCard", () => {
  it("renders a book card", () => {
    const { container } = render(<BookCard book={testBook} />);
    expect(container).toMatchSnapshot();
  });
});
