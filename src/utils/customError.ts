import { ErrorType, StatusCode } from '../types/enums.js';

class CustomError extends Error {
  status: number;
  type: ErrorType;
  constructor(status: StatusCode, type: ErrorType, message: string) {
    super(message);
    this.status = +status;
    this.type = type;
  }
}

export default CustomError;
