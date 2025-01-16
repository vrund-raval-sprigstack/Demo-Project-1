// ScheduledEmailCard.jsx
import React from 'react';
import ImportImages from '../ImportImages';


export default function ScheduledEmailCard({ email }) {
  const { scheduledBy, subject, date, day, time, recipients } = email;



  return (
    <div className="email-card mb-2 tw-rounded-md">
      {/* Left date section */}
      <div className="date-column gap-2">
        <div className="day-text tw-font-semibold tw-text-xl">{date}</div>
        <div className="date-number tw-font-semibold tw-text-2xl">{day}</div>
      </div>

      {/* Main content section */}
      <div className="tw-flex-1 tw-py-3 tw-px-5">
        {/* Scheduled by */}
        <div className="scheduled-by tw-mb-2">


          <span className="tw-text-xs tw-font-medium tw-text-gray-500 tw-me-1">Scheduled By:</span>
          <span className="tw-text-xs tw-font-medium">{scheduledBy}</span>
        </div>

        {/* Subject */}
        <div className="tw-mb-2">
          {subject}
        </div>

        {/* Bottom row */}
        <div className="bottom-row">
          <div className="tw-text-xs tw-font-medium tw-text-gray-500">
            Today, {time}
          </div>

          <div className="actions-group">
            {/* Recipients */}
            <div className='tw-me-3'>
              <span className="tw-text-xs tw-font-medium d-flex align-items-center gap-1">
                <span className='custom-blue-color-text tw-font-semibold'>

                  Send to:

                </span>

                <span>
                  {recipients}
                </span>
                <img
                  src={ImportImages.PeopleIcon}
                  alt="Logo"
                  className="headerLogoImage"
                  style={{ height: '12px' }}
                />
              </span>
            </div>

            {/* Unsend button */}
            <button className="tw-bg-gray-400/70 tw-text-white tw-border-0 tw-py-2 tw-px-10 tw-rounded-md tw-text-xs tw-font-normal tw-transition-all tw-duration-200 tw-ease-in-out">
              Unsend
            </button>

            {/* <button className="">
              Unsend
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
}