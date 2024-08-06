import { render, screen } from "@testing-library/react";
import Form from ".";
import userEvent from "@testing-library/user-event";
import { expect, vi } from "vitest";

test("Formu gönderince 'addUser' doğru parametrelerle çalışıyor mu?", async () => {
  const mockFn = vi.fn();

  const user = userEvent.setup();

  render(<Form addUser={mockFn} />);

  const nameInp = screen.getByLabelText("İsim");
  const mailInp = screen.getByLabelText("E-Mail");
  const ageInp = screen.getByPlaceholderText("Ör: 35");
  const sendBtn = screen.getByRole("button");

  await user.click(nameInp);
  await user.keyboard("Fırat");

  await user.type(mailInp, "firat@gmail.com");

  await user.type(ageInp, "28");

  await user.click(sendBtn);

  expect(mockFn).toHaveBeenCalledWith({
    name: "Fırat",
    mail: "firat@gmail.com",
    age: "28",
  });

  expect(nameInp.value).toBe("");
  expect(mailInp.value).toBe("");
  expect(ageInp.value).toBe("");
});
