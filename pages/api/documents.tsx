import type { NextApiRequest, NextApiResponse } from "next";
import path from "path";
import fs from "fs";

type Data = {
  name: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  const filePath = path.join(process.cwd(), "storage", "documents.json");
  const jsonData = fs.readFileSync(filePath, "utf8");
  res.status(200).json(JSON.parse(jsonData));
}
