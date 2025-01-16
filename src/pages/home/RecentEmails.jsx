import React from 'react';
import IconCard from '../../components/IconCard';
import RecentEmailCard from '../../components/RecentEmailCard';

export default function RecentEmails() {
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
        <div className="card">
            <div className="card-body">
                {/* Header section */}
                <div className="d-flex justify-content-between align-items-center mb-3">
                    <h5 className="card-title mb-0">Recent Emails</h5>
                    <a href="#" className="text-primary text-decoration-none">View More</a>
                </div>

                {/* Stats section */}
                <div className="d-flex gap-2 mb-4 bg-light p-3 rounded">
                    <IconCard label="Today: " value="10" icon="today" />
                    <IconCard label="This week: " value="50" icon="week" />
                    <IconCard label="This month: " value="100" icon="month" />
                </div>

                {/* Email cards section */}
                <div className="d-flex flex-column gap-2">
                    {emailsList.map((email) => (
                        <RecentEmailCard
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
        </div>
    );
}
