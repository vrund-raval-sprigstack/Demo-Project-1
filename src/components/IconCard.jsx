
// IconCard.jsx
import React from 'react';
import ImportImages from '../ImportImages';

export default function IconCard({ label, value }) {
    return (
        <div className="d-flex align-items-center gap-1 border px-2 rounded">
            <img
                src={ImportImages.TaskIcon}
                alt={label}
                style={{ width: '14px', height: '14px' }}
            />
            <span className="text-primary" style={{ fontSize: '14px' }}>{label}</span>
            <span className="fw-medium" style={{ fontSize: '14px' }}>{value}</span>
        </div>
    );
}
