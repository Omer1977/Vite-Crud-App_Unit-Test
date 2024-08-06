import { render, screen } from "@testing-library/react";
import { describe, expect } from "vitest";
import App from "./App";
import userEvent from "@testing-library/user-event";

const multiple = (a, b, c) => {
  return a * b * c;
};
describe("Fonksiyon Testleri", () => {
  test("Fonksiyon doğru çalışıyor mu?", () => {
    expect(multiple(10, 2, 3)).toBe(60);
  });

  test("Fonksiyon negatif sayılarda doğru çalışıyor mu?", () => {
    expect(multiple(-10, -2, -3)).toBe(-60);
  });

  test("Fonksiyon 0 ile doğru çalışıyor mu?", () => {
    expect(multiple(-10, 0, -3)).toBe(0);
  });
});

it("Uygulama doğru şekilde çalışyor mu?", async () => {
  const user = userEvent.setup();

  render(<App />);

  const nameInp = screen.getByLabelText("İsim");
  const mailInp = screen.getByLabelText("E-Mail");
  const ageInp = screen.getByLabelText("Yaş");
  const sendBtn = screen.getByRole("button", {
    name: "Kullanıcı Ekle",
  });

  await user.type(nameInp, "Veli");
  await user.type(mailInp, "veli@gmail.com");
  await user.type(ageInp, "32");
  await user.click(sendBtn);

  screen.getByRole("cell", { name: "Veli" });
  screen.getByRole("cell", { name: "veli@gmail.com" });
  screen.getByRole("cell", { name: "32" });
});
