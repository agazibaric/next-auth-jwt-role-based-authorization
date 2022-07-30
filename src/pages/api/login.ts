import type { NextApiRequest, NextApiResponse } from "next";
import { ROLES } from "../../const";
import { LoginResponse } from "../../types";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<LoginResponse>
) {
  const { email, password } = req.body;
  const roles = [{ name: ROLES.USER }];

  if (email === "admin@email.com" && password === "admin") {
    roles.push({ name: ROLES.ADMIN });
  }

  res.status(200).json({
    user: {
      email,
      firstName: "John",
      lastName: "Doe",
      authorities: roles,
    },
    token: "jwt",
  });
}
