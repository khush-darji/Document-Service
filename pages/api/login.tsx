import { NextApiRequest, NextApiResponse } from "next";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

// Mock user data
const users = [
  {
    id: 1,
    username: "khushdarji",
    password: "$2b$10$L3CAI9VYMm39/pQlOPyvvuj94pXjKcwxYGT7uSl39XoJpZIXHSKpS", // Hashed password: "password"
  },
];

const secretKey = "secret-key";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    const { username, password } = req.body;

    // Find user by username
    const user = users.find((u) => u.username === username);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Compare password with hashed password
    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return res.status(401).json({ message: "Invalid password" });
    }

    // Generate JWT token
    const token = jwt.sign({ userId: user.id }, secretKey, { expiresIn: "1h" });

    res.status(200).json({ token });
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};

export default handler;
