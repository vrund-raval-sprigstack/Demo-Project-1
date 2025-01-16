import React from 'react';
import { AlertCircle } from 'lucide-react';

const ErrorFallback = ({ error, resetErrorBoundary }) => {
    const errorMessage = error?.message || 'An unexpected error occurred';

    return (
        <div className="tw-w-full tw-max-w-md tw-mx-auto tw-mt-8 tw-bg-white tw-rounded-lg tw-shadow-lg tw-p-6">
            {/* Error Header */}
            <div className="tw-flex tw-items-center tw-gap-2 tw-mb-6 tw-bg-red-50 tw-p-4 tw-rounded-lg tw-text-red-700">
                <AlertCircle className="tw-h-5 tw-w-5" />
                <div>
                    <h3 className="tw-font-semibold">Error</h3>
                    <p className="tw-text-sm">Something went wrong</p>
                </div>
            </div>

            {/* Error Content */}
            <div className="tw-space-y-4">
                <div className="tw-text-sm tw-text-gray-500">
                    Error Details:
                </div>
                <pre className="tw-bg-gray-50 tw-p-4 tw-rounded-lg tw-text-sm tw-overflow-auto tw-max-h-40 tw-whitespace-pre-wrap">
                    {errorMessage}
                </pre>

                <p className="tw-text-sm tw-text-gray-600">
                    Please try again or contact support if the problem persists.
                </p>
            </div>

            {/* Action Buttons */}
            <div className="tw-flex tw-justify-end tw-gap-4 tw-mt-6">
                <button
                    onClick={() => window.location.reload()}
                    className="tw-px-4 tw-py-2 tw-text-sm tw-font-medium tw-text-gray-700 tw-bg-gray-100 tw-rounded-md hover:tw-bg-gray-200 tw-transition-colors"
                >
                    Refresh Page
                </button>
                <button
                    onClick={resetErrorBoundary}
                    className="tw-px-4 tw-py-2 tw-text-sm tw-font-medium tw-text-white tw-bg-blue-600 tw-rounded-md hover:tw-bg-blue-700 tw-transition-colors"
                >
                    Try Again
                </button>
            </div>
        </div>
    );
};

export default ErrorFallback;