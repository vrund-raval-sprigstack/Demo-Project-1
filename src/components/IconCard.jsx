
// IconCard.jsx
import React from 'react';
import ImportImages from '../ImportImages';

export default function IconCard({ label, value }) {
    return (
        <div className="d-flex align-items-center gap-1 border tw-px-4 tw-py-2 rounded">
            <img
                src={ImportImages.TaskIcon}
                alt={label}
                style={{ width: '14px', height: '14px' }}
            />
            <span className="tw-text-xs tw-font-semibold custom-blue-color-text">{label}</span>
            <span className="tw-text-xs tw-font-semibold primary-color-text">{value}</span>
        </div>
    );
}
