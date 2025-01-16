
// RecentEmailCard.jsx
import React from 'react';
import ImportImages from '../ImportImages';

export default function RecentEmailCard({ sender, title, date, sendCount, readCount }) {
    return (
        <div className="p-3 bg-white rounded">
            <div className="d-flex flex-column">
                {/* Sender */}
                <div className="mb-2">
                    <span className="tw-text-xs tw-font-medium tw-text-gray-500">Send By: </span>
                    <span className="tw-text-xs tw-font-medium">{sender}</span>
                </div>

                {/* Title */}
                <div className="mb-2 tw-text-base">{title}</div>

                {/* Bottom row */}
                <div className="d-flex justify-content-between align-items-center">
                    <span className="tw-text-xs tw-font-medium tw-text-gray-500">{date}</span>

                    <div className="d-flex gap-3">
                        <div>
                            <span className="tw-text-xs tw-font-medium d-flex align-items-center gap-1">
                                <span className='custom-blue-color-text tw-font-semibold'>

                                    Send to:

                                </span>

                                <span>
                                    {sendCount}
                                </span>
                                <img
                                    src={ImportImages.PeopleIcon}
                                    alt="Logo"
                                    className="headerLogoImage"
                                    style={{ height: '12px' }}
                                />
                            </span>
                        </div>
                        <div>
                            <span className="d-flex align-items-center gap-1 tw-text-xs tw-font-medium">

                                <span className='custom-green-color-text tw-font-semibold'>
                                    Read by:
                                </span>
                                <span>
                                    {readCount}
                                </span>

                                <img
                                    src={ImportImages.PeopleIcon}
                                    alt="Logo"
                                    className="headerLogoImage"
                                    style={{ height: '12px' }}
                                />
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}