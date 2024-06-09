//
// imports
//
import { NextApiRequest, NextApiResponse } from "next";
import constants from "@app/constants";
import api from "@app/api";

//
// route
//
export default async function genericApiHandler(req: NextApiRequest, res: NextApiResponse<any>) {
  //
  // constants
  //
  const env = constants.appEnv;
  let responseType = "info";
  let service;

  try {
    const options: any = {
      uri: "/health",
      params: {
        include: "database",
      },
    };

    service = await api.get(options);
  } catch (error: any) {
    const status =
      error.service?.data?.statusCode ||
      error.service?.status ||
      error.statusCode ||
      error.status ||
      500;
    const url = `${error.config?.baseURL || ""}${error.config?.url || ""}`;

    responseType = "error";

    service = {
      url,
      status,
      notFound: status === 404 || error.code === "ERR_NETWORK",
      message: error.message,
      ...(error.service?.data || {}),
    };

    if (service.extra && !Object.keys(service.extra).length) {
      service.extra = error.service?.extra || error.extra || {};
    }
  }

  res.status(200).json({
    environment: env,
    real_environment: process.env.NODE_ENV,
    name: process.env.APP_NAME,
    description: process.env.APP_DESCRIPTION,
    version: process.env.APP_VERSION,
    api: process.env.API_URL,
    [responseType]: {
      "api": service,
    },
  });
}
