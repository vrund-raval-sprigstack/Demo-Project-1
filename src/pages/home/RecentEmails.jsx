import React from 'react';
import IconCard from '../../components/IconCard';
import StatusCard from '../../components/RecentEmailCard';

export default function RecentEmails() {
    // Mock data for emails
    const emailsList = [
        {
            id: 1,
            sender: "Ayush Jain",
            title: "Cybersecurity Risks to Cryptocurrency Exchange Users",
            date: "28-08-2024, 05:00 PM",
            sendCount: "100",
            readCount: "60"
        },
        {
            id: 2,
            sender: "James Brown",
            title: "Cybersecurity Risks to Cryptocurrency Exchange Users",
            date: "28-08-2024, 02:00 PM",
            sendCount: "100",
            readCount: "60"
        },
        {
            id: 3,
            sender: "Emma Miller",
            title: "Cybersecurity Risks to Cryptocurrency Exchange Users",
            date: "27-08-2024, 08:00 PM",
            sendCount: "100",
            readCount: "60"
        },
        {
            id: 4,
            sender: "Jane Robinson",
            title: "Cybersecurity Risks to Cryptocurrency Exchange Users",
            date: "27-08-2024, 05:00 PM",
            sendCount: "100",
            readCount: "60"
        }
    ];

    return (
        <div className="container-fluid p-3">
            {/* Top section with stats */}
            <div className="d-flex justify-content-between mb-3">
                <div>Recent Emails</div>
                <div>View More</div>
            </div>

            <div className="d-flex justify-content-start flex-wrap mb-4">
                <IconCard label="Today: " value={0} />
                <IconCard label="This Week: " value={5} />
                <IconCard label="This Month: " value={12} />
            </div>

            {/* Email cards section - now in list view */}
            <div className="d-flex flex-column gap-2">
                {emailsList.map((email) => (
                    <StatusCard
                        key={email.id}
                        sender={email.sender}
                        title={email.title}
                        date={email.date}
                        sendCount={email.sendCount}
                        readCount={email.readCount}
                    />
                ))}
            </div>
        </div>
    );
}