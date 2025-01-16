// ScheduledEmails.jsx
import React from 'react';
import ScheduledEmailCard from '../../components/ScheduledEmailCard';
const ScheduledEmails = () => {
    const emailsList = [
        {
            id: 1,
            scheduledBy: 'Ayush Jain',
            subject: 'Cybersecurity Risks to Cryptocurrency Exchange Users',
            date: 'Sat',
            day: '21',
            time: '05:00 PM',
            recipients: 100,
            status: 'unsent'
        },
        {
            id: 2,
            scheduledBy: 'Rohit Sharma',
            subject: 'The Future of Blockchain Technology',
            date: 'Sun',
            day: '22',
            time: '03:30 PM',
            recipients: 200,
            status: 'sent'
        },
        {
            id: 3,
            scheduledBy: 'Priya Mehta',
            subject: 'Cloud Computing: Trends and Predictions',
            date: 'Mon',
            day: '23',
            time: '10:00 AM',
            recipients: 150,
            status: 'scheduled'
        },
        {
            id: 4,
            scheduledBy: 'Karan Kapoor',
            subject: 'Best Practices for Remote Work Security',
            date: 'Tue',
            day: '24',
            time: '11:45 AM',
            recipients: 250,
            status: 'draft'
        }
    ];
    return (
        <div className="card">
            <div className="card-body">
                <div className="d-flex justify-content-between align-items-center mb-3">
                    <h5 className="card-title mb-0">Scheduled Emails</h5>
                    <a href="#" className="text-primary text-decoration-none">View More</a>
                </div>

                <div className="d-flex flex-column gap-3">
                    {emailsList.map((email) => (
                        <ScheduledEmailCard
                            key={email.id}
                            email={email}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ScheduledEmails;