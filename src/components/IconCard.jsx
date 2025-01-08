import React from 'react';
import ImportImages from '../ImportImages';

export default function IconCard({ label, value }) {
    return (
        <div className="d-flex justify-content-start align-items-center px-2 border rounded  m-1">
            {/* Icon container */}
            <div className="me-1 d-flex align-items-center">
                <img
                    src={ImportImages.AdminIcon}
                    alt={label}
                    style={{
                        width: '14px',
                        height: '14px',
                        objectFit: 'contain',
                    }}
                />
            </div>

            {/* Text container */}
            <div>
                <p className="mb-0" style={{ fontSize: '0.75rem', display: 'inline' }}>{label}</p>
                <h5 className="mb-0" style={{ fontSize: '0.9rem', display: 'inline' }}>{value}</h5>
            </div>
        </div>
    );
}
