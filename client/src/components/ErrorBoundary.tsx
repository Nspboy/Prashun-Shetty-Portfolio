import React, { ReactNode, ErrorInfo } from "react";

interface ErrorBoundaryProps {
  children: ReactNode;
  fallback?: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
}

export class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
    };
  }

  static getDerivedStateFromError(error: Error): Partial<ErrorBoundaryState> {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    console.error("Error caught by boundary:", error, errorInfo);
    this.setState({
      error,
      errorInfo,
    });
  }

  render(): ReactNode {
    if (this.state.hasError) {
      return (
        this.props.fallback || (
          <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-4">
            <div className="max-w-md w-full space-y-6 text-center">
              <div className="space-y-2">
                <div className="text-6xl mb-4">⚠️</div>
                <h1 className="text-3xl font-bold text-gray-900">
                  Oops! Something went wrong
                </h1>
                <p className="text-gray-600">
                  We're sorry, but something unexpected happened. Please try
                  refreshing the page.
                </p>
              </div>

              {process.env.NODE_ENV === "development" && this.state.error && (
                <div className="mt-6 p-4 bg-red-50 border border-red-200 rounded-lg text-left">
                  <p className="font-semibold text-red-900 mb-2">
                    Error Details:
                  </p>
                  <pre className="text-xs text-red-700 overflow-auto max-h-40 whitespace-pre-wrap break-words">
                    {this.state.error.toString()}
                    {this.state.errorInfo?.componentStack}
                  </pre>
                </div>
              )}

              <button
                onClick={() => window.location.reload()}
                className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                Refresh Page
              </button>
              <a
                href="/"
                className="block w-full px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition-colors font-medium"
              >
                Go Home
              </a>
            </div>
          </div>
        )
      );
    }

    return this.props.children;
  }
}
