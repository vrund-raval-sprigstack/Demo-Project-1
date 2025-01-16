// ScheduledEmailCard.jsx
import React from 'react';
import ImportImages from '../ImportImages';


export default function ScheduledEmailCard({ email }) {
  const { scheduledBy, subject, date, day, time, recipients } = email;



  return (
    <div className="email-card mb-2">
      {/* Left date section */}
      <div className="date-column gap-2">
        <div className="day-text">{date}</div>
        <div className="date-number">{day}</div>
      </div>

      {/* Main content section */}
      <div className="content-section">
        {/* Scheduled by */}
        <div className="scheduled-by">
          <span className="scheduled-label">Scheduled By:</span>
          <span className="scheduler-name">{scheduledBy}</span>
        </div>

        {/* Subject */}
        <div className="email-subject">
          {subject}
        </div>

        {/* Bottom row */}
        <div className="bottom-row">
          <div className="timestamp">
            Today, {time}
          </div>

          <div className="actions-group">
            {/* Recipients */}
            <div className="recipients-badge">
              <span className="send-to">Send to:</span>
              <span className="recipient-count">{recipients}</span>
              <img
                src={ImportImages.PeopleIcon}
                alt="Logo"
                className="headerLogoImage"
                style={{ height: '14px' }}
              />
            </div>

            {/* Unsend button */}
            <button className="unsend-btn">
              Unsend
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}