import type { NextApiRequest, NextApiResponse } from "next";
import connect from "../../../utils/connectMongo";
import Test from "../../../model/testModel";

interface Test {
  name: string;
  email: string;
}

export default async function addTest(
  req: NextApiRequest,
  res: NextApiResponse<Test>
) {
  const { name, email } = req.body;
  connect();
  const test = await Test.create({ name, email });
  res.json(test);
}
