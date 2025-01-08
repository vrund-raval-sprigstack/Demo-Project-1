import React from 'react';
import RecentContactCard from '../../components/RecentContactCard'

export default function RecentContacts() {
    const recentContactsData = [
        {
            name: 'Vrund',
            organization: 'Sprigstack',
            imageUrl: 'https://via.placeholder.com/50',
        },
        {
            name: 'Sneh',
            organization: 'Sprigstack',
            imageUrl: 'https://via.placeholder.com/50',
        },
        {
            name: 'Jon Doe',
            organization: 'Google',
            imageUrl: 'https://via.placeholder.com/50',
        },
        {
            name: 'Jane Doe',
            organization: 'Microsoft',
            imageUrl: 'https://via.placeholder.com/50',
        },
        {
            name: 'Lance',
            organization: 'Fedco',
            imageUrl: 'https://via.placeholder.com/50',
        },
    ];

    return (
        <>
            {recentContactsData.map((contact, index) => (
                <RecentContactCard
                    key={index}
                    // imageUrl={contact.imageUrl}
                    name={contact.name}
                    company={contact.organization}
                />
            ))}
        </>
    );
}
