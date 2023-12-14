import { NextApiRequest, NextApiResponse } from "next";
import formidable from "formidable";

type ProcessedFiles = Record<string, any>;

export async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    return res.status(200).json({
      success: true,
      message: "Hello Working!",
    });
  } catch (err: any) {
    res.status(500).json({ error: err.message, success: false });
  }
}
