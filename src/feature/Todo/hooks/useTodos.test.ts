import { renderHook } from "@testing-library/react";
import { useTodos } from "./useTodos"; // Assuming the hook is in './useTodos.js'
import { act } from "react-dom/test-utils";
import { uuid } from "@/feature/common/utils";

jest.mock("@/feature/common/utils", () => ({
  uuid: jest.fn().mockReturnValue("mock-uuid"),
}));

describe("useTodos", () => {
  test("should create todo correctly", () => {
    const { result } = renderHook(() => useTodos());
    const actions = result.current.actions;

    act(() => {
      actions.create("새로운 할 일");
    });

    expect(result.current.todos).toEqual([
      { id: 1, content: "밥 먹기", isComplete: false },
      { id: 2, content: "잠 자기", isComplete: false },
      { id: 3, content: "", isComplete: false },
      { id: uuid(), content: "새로운 할 일", isComplete: false },
    ]);
  });

  test("should toggle completeness correctly", () => {
    const { result } = renderHook(() => useTodos());
    const actions = result.current.actions;

    act(() => {
      actions.toggleComplete(1);
    });

    expect(result.current.todos).toEqual([
      { id: 1, content: "밥 먹기", isComplete: true },
      { id: 2, content: "잠 자기", isComplete: false },
      { id: 3, content: "", isComplete: false },
    ]);
  });

  test("should remove todo correctly", () => {
    const { result } = renderHook(() => useTodos());
    const actions = result.current.actions;

    act(() => {
      actions.remove(2);
    });

    expect(result.current.todos).toEqual([
      { id: 1, content: "밥 먹기", isComplete: false },
      { id: 3, content: "", isComplete: false },
    ]);
  });
});
