import type { NextApiRequest, NextApiResponse } from "next";
import path from "path";
import fs from "fs";

type Data = {
  name: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const filePath = path.join(process.cwd(), "storage", "documents.json");
  const jsonData = fs.readFileSync(filePath, "utf8");
  const data = JSON.parse(jsonData);
  const { documentId } = req.query as {
    documentId: string;
  };
  if (documentId) {
    res.status(200).json(data[documentId]);
  }
}
