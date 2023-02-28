import { ApiErrorModel } from '../models/common/ApiErrorModel';

function generalError(status: number): (message: string) => ApiErrorModel {
  return function (message: string): ApiErrorModel {
    return {
      status: status,
      message: message,
    };
  };
}

export const badRequestError = generalError(400);
