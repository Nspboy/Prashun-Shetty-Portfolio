import { Request, Response, NextFunction } from "express";

export class ApiError extends Error {
  constructor(
    public statusCode: number,
    message: string,
    public details?: unknown,
  ) {
    super(message);
    this.name = "ApiError";
  }
}

export function errorHandler(
  err: Error | ApiError,
  req: Request,
  res: Response,
  next: NextFunction,
) {
  console.error("Error:", err);

  if (err instanceof ApiError) {
    return res.status(err.statusCode).json({
      error: err.message,
      details: err.details,
    });
  }

  // Default error response
  res.status(500).json({
    error: "Internal server error",
    message: process.env.NODE_ENV === "development" ? err.message : undefined,
  });
}

export function asyncHandler(
  fn: (req: Request, res: Response, next: NextFunction) => Promise<void>,
) {
  return (req: Request, res: Response, next: NextFunction) => {
    Promise.resolve(fn(req, res, next)).catch(next);
  };
}
