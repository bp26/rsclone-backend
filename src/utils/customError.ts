import { StatusCode } from '../types/enums';

class CustomError extends Error {
  status: number;
  constructor(status: StatusCode, message: string) {
    super(message);
    this.status = +status;
  }
}

export default CustomError;
