export const enum StatusCode {
  OK = '200',
  BAD_REQUEST = '400',
  UNAUTHORIZED = '401',
  FORBIDDEN = '403',
  NOT_FOUND = '404',
  CONFLICT = '409',
  SERVER_ERROR = '500',
}

export const enum ResponceMessage {
  USER_ALREADY_EXISTS = 'This login is already in use',
  USER_DOESNT_EXIST = 'This user is not registered',
  USER_WRONG_PASSWORD = 'This password is incorrect',
}
