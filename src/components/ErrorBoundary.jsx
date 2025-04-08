import React, { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
    };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-zinc-900 flex items-center justify-center p-4">
          <div className="text-center">
            <h1 className="text-2xl md:text-4xl font-syncopate text-white mb-4">
              Something went wrong
            </h1>
            <p className="text-gray-400 mb-8">
              We're sorry, but something unexpected occurred.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="px-6 py-3 bg-white text-zinc-900 font-syncopate text-sm tracking-wider hover:bg-gray-200 transition-colors"
            >
              RELOAD PAGE
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
