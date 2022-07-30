import type { NextApiRequest, NextApiResponse } from "next";
import { ROLES } from "../../const";
import { LoginResponse } from "../../types";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<LoginResponse>
) {
  // Create mock login response with only user role
  res.status(200).json({
    user: {
      email: "john.doe@email.com",
      firstName: "John",
      lastName: "Doe",
      authorities: [{ name: ROLES.USER }],
    },
    token: "jwt",
  });
}
