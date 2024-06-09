//
// imports
//
import { omit } from "lodash";
import { NextApiRequest, NextApiResponse } from "next";
import api from "@app/api";

//
// route
//
export default async function genericApiHandler(req: NextApiRequest, res: NextApiResponse<any>) {
  //
  // constants
  //
  const { path } = req.query;
  const uri = `/${Array.isArray(path) ? path.join("/") : path}`;
  let response;

  try {
    const options: any = {
      uri,
      params: omit(req.query, ["path"]),
      data: req.body,
    };

    response = await (api as any)[(req.method || "get").toLowerCase()](options);

    return res.status(200).json(response);
  } catch (error: any) {
    const status =
      error.response?.data?.statusCode ||
      error.response?.status ||
      error.statusCode ||
      error.status ||
      500;
    response = {
      status,
      notFound: status === 404 || error.code === "ERR_NETWORK",
      message: error.message,
      ...(error.response?.data || {}),
    };

    if (response.extra && !Object.keys(response.extra).length) {
      response.extra = error.response?.extra || error.extra || {};
    }

    return res.status(status).json(response);
  }
}
