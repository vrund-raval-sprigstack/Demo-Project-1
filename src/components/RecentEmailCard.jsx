
// RecentEmailCard.jsx
import React from 'react';
import ImportImages from '../ImportImages';

export default function RecentEmailCard({ sender, title, date, sendCount, readCount }) {
    return (
        <div className="p-3 bg-white rounded">
            <div className="d-flex flex-column">
                {/* Sender */}
                <div className="mb-1">
                    <span className="text-muted" style={{ fontSize: '14px' }}>Send By: </span>
                    <span style={{ fontSize: '14px' }}>{sender}</span>
                </div>

                {/* Title */}
                <h6 className="mb-2">{title}</h6>

                {/* Bottom row */}
                <div className="d-flex justify-content-between align-items-center">
                    <span className="text-muted" style={{ fontSize: '14px' }}>{date}</span>

                    <div className="d-flex gap-3">
                        <div>
                            <span className="text-primary d-flex align-items-center gap-1" style={{ fontSize: '14px' }}>
                                Send to: {sendCount}
                                <img
                                    src={ImportImages.PeopleIcon}
                                    alt="Logo"
                                    className="headerLogoImage"
                                    style={{ height: '14px' }}
                                />
                            </span>
                        </div>
                        <div>
                            <span className="text-success d-flex align-items-center gap-1" style={{ fontSize: '14px' }}>
                                Read by: {readCount}
                                <img
                                    src={ImportImages.PeopleIcon}
                                    alt="Logo"
                                    className="headerLogoImage"
                                    style={{ height: '14px' }}
                                />
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}