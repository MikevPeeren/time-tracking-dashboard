import type { NextApiRequest, NextApiResponse } from "next";

import { timeTrackingJSONData } from "../../lib/timeTrackingJSONData";

const handler = (req: NextApiRequest, res: NextApiResponse): unknown => {
  return res.status(200).json(timeTrackingJSONData);
};

export default handler;
