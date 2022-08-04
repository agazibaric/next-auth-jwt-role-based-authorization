import type { NextApiRequest, NextApiResponse } from "next";
import { ROLES } from "../../const";
import { SignInResponse } from "../../types";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<SignInResponse>
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
    token:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImpvaG4uZG9lQGVtYWlsLmNvbSIsImZpcnN0TmFtZSI6IkpvaG4iLCJsYXN0TmFtZSI6IkRvZSIsImF1dGhvcml0aWVzIjoicm9sZXMifQ.piqoZKqLBSggCTrxuES3ATZkhOJzlns8-JxKbNVwnWk",
  });
}
