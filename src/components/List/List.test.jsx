import { render, screen, within } from "@testing-library/react";
import List from ".";

const testUsers = [
  {
    name: "Mehmet",
    mail: "mehmet60@gmail.com",
    age: 60,
  },

  {
    name: "Ayşe",
    mail: "ayse@gmail.com",
    age: 20,
  },

  {
    name: "Ali",
    mail: "alihttp@gmail.com",
    age: 30,
  },
];

it("Gönderilen her isim için ekrana satır basılır", () => {
  render(<List users={testUsers} />);

  const body = screen.getByTestId("table-body");

  const rows = within(body).getAllByRole("row");

  expect(rows).toHaveLength(testUsers.length);
});

it("Her kullanıcı için isim, email ve yaş hücreleri bulunur", () => {
  render(<List users={testUsers} />);

  for (const user of testUsers) {
    screen.getByRole("cell", { name: user.name });
    screen.getByRole("cell", { name: user.mail });
    screen.getByRole("cell", { name: user.age });
  }
});
