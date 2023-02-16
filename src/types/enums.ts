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
  WELCOME = 'Welcome!',
  USER_ALREADY_EXISTS = 'This login is already in use',
  USER_DOESNT_EXIST = 'This user is not registered',
  USER_WRONG_PASSWORD = 'This password is incorrect',
  USER_NO_TOKEN = 'No token sent',
  WRONG_TOKEN = 'Wrong token',
  NO_PROPS = 'Required properties not passed',
  UNAUTHORIZED = 'User not authorized',
}

export const enum ErrorType {
  CLIENT = 'client',
  SERVER = 'server',
  LOGIN = 'login',
  PASSWORD = 'password',
  AUTH = 'auth',
}

export const enum MessageType {
  CONNECTION = 'CONNECTION',
  MESSAGE = 'MESSAGE',
}
