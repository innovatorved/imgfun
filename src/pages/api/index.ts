import { makeFunOFImage } from "@/lib/gemini";
import { IncomingForm } from "formidable";
import { NextApiRequest, NextApiResponse } from "next";

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  try {
    const fData = await new Promise<{ fields: any; files: any }>(
      (resolve, reject) => {
        const form = new IncomingForm({
          multiples: false,
          uploadDir: "/tmp",
          keepExtensions: true,
        });
        form.parse(req, (err, fields, files) => {
          if (err) return reject(err);
          resolve({ fields, files });
        });
      },
    );

    const filename = fData.files.image[0].filepath;
    if (!filename) throw new Error(`No images found''`);

    const fun = await makeFunOFImage(filename);

    return res.status(200).json({
      success: true,
      message: fun,
    });
  } catch (err: any) {
    console.log(JSON.stringify(err.response, null, 2));
    return res.status(500).json({ error: err.message, success: false });
  }
}
