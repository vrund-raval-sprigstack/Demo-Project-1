import React from 'react';

export default function StatusCard({ sender, title, date, sendCount, readCount }) {
    return (
        <div className="card shadow-sm">
            <div className="card-body">
                <div className="d-flex flex-column">
                    {/* Sender name */}
                    <small className="text-muted mb-1">
                        Send By: <span className="text-dark">{sender}</span>
                    </small>

                    {/* Title */}
                    <h6 className="card-title mb-2">{title}</h6>

                    {/* Bottom row with date and metrics */}
                    <div className="d-flex align-items-center justify-content-between">
                        {/* Date */}
                        <small className="text-muted">{date}</small>

                        {/* Status metrics */}
                        <div className="d-flex gap-2">
                            {/* Sent to count */}
                            <div className="px-2 py-1 bg-light rounded-2">
                                <small className="text-primary">
                                    Send to: <span className="fw-bold">{sendCount}</span>
                                    <i className="bi bi-people-fill ms-1"></i>
                                </small>
                            </div>

                            {/* Read by count */}
                            <div className="px-2 py-1 bg-light rounded-2">
                                <small className="text-success">
                                    Read by: <span className="fw-bold">{readCount}</span>
                                    <i className="bi bi-people-fill ms-1"></i>
                                </small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}