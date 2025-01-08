import React from 'react';
import ImportImages from '../ImportImages';

export default function RecentContactCard({ imageUrl, name, company }) {
    return (
        <>
            <div className="d-flex align-items-center px-4 py-3 border border-secendory rounded hover-effect m-2">

                <div
                    className="me-4 d-flex justify-content-center align-items-center"
                    style={{
                        width: '50px',
                        height: '50px',
                        borderRadius: '50%',
                    }}
                >
                    <img
                        src={ImportImages.PersonImage}
                        alt="Profile"
                        className="rounded-circle"
                        style={{ width: '50px', height: '50px' }}
                    />
                </div>
                <div>
                    <p className="mb-1 name-text">{name}</p>
                    <p className="mb-0 text-muted company-text">{company}</p>
                </div>
            </div>
        </>
    );
}
