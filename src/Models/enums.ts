/* eslint-disable no-magic-numbers */

export enum StatusCodes {
  OK = 200,
  BadRequest = 400,
  Unauthorized,
  PaymentRequired,
  Forbidden,
  NotFound,
  InternalServerError = 500,
  BadGateway = 502,
  ServerUnavailable = 503,
}

export enum Gender {
  male = 1,
  female = 2,
}
