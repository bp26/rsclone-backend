import { StatusCode } from '../types/enums.js';

class CustomError extends Error {
  status: number;
  constructor(status: StatusCode, message: string) {
    super(message);
    this.status = +status;
  }
}

export default CustomError;
