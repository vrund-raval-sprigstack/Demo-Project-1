import React from 'react';
import ImportImages from '../ImportImages';

export default function RecentContactCard({ imageUrl, name, company }) {


    // Generate a random background color only once
    const randomBgColor = React.useMemo(() => getRandomColor(), []);

    function getRandomColor() {
        const colors = ['#FFB3BA', '#FFDFBA', '#FFFFBA', '#BAFFC9', '#BAE1FF'];


        return colors[Math.floor(Math.random() * colors.length)];
    }

    const hasImage = Boolean(imageUrl);


    return (
        <>
            <div className="d-flex align-items-center px-4 py-2 border tw-border-gray-200 tw-rounded-lg hover-effect m-2">
                <div
                    className="me-4 d-flex justify-content-center align-items-center"

                    style={{
                        width: '50px',
                        height: '50px',
                        borderRadius: '50%',
                        backgroundColor: hasImage ? 'transparent' : randomBgColor,
                        // margin: '0 auto',
                        // display: 'flex',
                        // alignItems: 'center',
                        // justifyContent: 'center',
                        // overflow: 'hidden',
                    }}
                >
                    {hasImage ? (
                        <img
                            src={imageUrl}
                            alt="Profile"
                            className="rounded-circle"
                            style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                            }}
                        // style={{ width: '50px', height: '50px' }}
                        />
                    ) : (
                        <span style={{ color: 'gray', fontSize: '20px' }}>{name[0]}</span>
                    )}
                </div>
                {/* <div
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
                </div> */}
                <div>
                    <p className="mb-1 text-muted name-text tw-text-sm">{name}</p>
                    <p className="mb-0 text-muted company-text tw-text-sm">{company}</p>
                </div>
            </div>
        </>
    );
}
