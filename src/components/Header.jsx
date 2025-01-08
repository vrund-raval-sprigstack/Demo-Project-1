import React, { Fragment } from 'react';
import ImportImages from '../ImportImages';

export default function Header() {
    return (
        <Fragment>
            <div className="fixed-top">
                <div className="bg-light">
                    <div className="row align-items-center p-2">

                        {/* Logo Section */}
                        <div className="col-auto d-flex align-items-center justify-content-start">
                            <img
                                src={ImportImages.HeaderLogoImage}
                                alt="Logo"
                                className="headerLogoImage"
                                style={{ height: '35px' }}
                            />
                        </div>

                        {/* Search Bar Section */}
                        <div className="col">
                            <div className="row justify-content-center " style={{ height: '38px' }}>
                                <div className="input-group">
                                    <span className="input-group-text bg-white border-end-0">
                                        <img
                                            src={ImportImages.SearchIcon}
                                            alt="Search Icon"
                                            className="searchIcon"
                                            style={{ height: '16px', marginRight: '10px' }}
                                        />
                                    </span>
                                    <input
                                        type="text"
                                        className="form-control border-start-0 ps-0 mySearchField"
                                        placeholder="Enter Keywords"
                                        aria-label="Search"
                                    />



                                </div>
                            </div>
                        </div>
                        {/* <div className="col-4 d-flex align-items-center justify-content-start">
                            <div className="searchContainer w-100 d-flvex align-items-center border rounded p-2 bg-white">
                                <img
                                    src={ImportImages.SearchIcon}
                                    alt="Search Icon"
                                    className="searchIcon"
                                    style={{ height: '16px', marginRight: '10px' }}
                                />
                                <input
                                    type="text"
                                    placeholder="Enter Keyword"
                                    className="searchInput border-0 bg-transparent flex-grow-1"
                                />
                            </div>
                        </div> */}

                        {/* Icon Buttons Section */}
                        <div className="col-2 d-flex justify-content-start">
                            <div className="iconButton d-flex flex-column align-items-center me-4">
                                <img
                                    src={ImportImages.AddUserIcon}
                                    alt="New Contacts"
                                    style={{ height: '20px' }}
                                />
                                <span className="mt-1" style={{ fontSize: '12px', color: '#3659A3', }}>New Contacts</span>
                            </div>
                            <div className="iconButton d-flex flex-column align-items-center">
                                <img
                                    src={ImportImages.PhoneBookIcon}
                                    alt="All Contacts"
                                    style={{ height: '20px' }}
                                />
                                <span className="mt-1" style={{ fontSize: '12px', color: '#3659A3', }}>All Contacts</span>
                            </div>
                        </div>

                        {/* Profile Section */}
                        <div className="col-3 d-flex justify-content-end align-items-center">
                            <span className="me-3 text-dark">Florida Manager</span>
                            <img
                                src={ImportImages.PersonImage}
                                alt="Profile Icon"
                                className="rounded-circle"
                                style={{
                                    height: '35px',
                                    width: '35px',
                                    objectFit: 'cover',
                                }}
                            />
                        </div>
                    </div>
                </div>
                <div className="bg-light border-top p-3">
                    <div className="d-flex justify-content-evenly align-items-center">
                        {/* Task History with Dropdown */}
                        <div className="dropdown">
                            <div
                                className="d-flex align-items-center dropdown-toggle"
                                id="taskHistoryDropdown"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                                style={{ cursor: 'pointer' }}
                            >
                                <img
                                    src={ImportImages.TaskHistoryIcon}
                                    alt="Task History"
                                    style={{ height: '18px', marginRight: '5px' }}
                                />
                                <span style={{ fontSize: '14px' }}>Task History</span>
                            </div>
                            <ul className="dropdown-menu border-0" aria-labelledby="taskHistoryDropdown">
                                <li><a className="dropdown-item" href="#">Task/History</a></li>
                                <li><a className="dropdown-item" href="#">Calendar</a></li>
                            </ul>
                        </div>

                        {/* Other Menu Items */}
                        <div className="d-flex align-items-center">
                            <img
                                src={ImportImages.ContactsIcon}
                                alt="Contact"
                                style={{ height: '18px', marginRight: '5px' }}
                            />
                            <span style={{ fontSize: '14px', cursor: 'pointer' }}>Contact</span>
                        </div>
                        <div className="d-flex align-items-center">
                            <img
                                src={ImportImages.ListsIcon}
                                alt="Lists"
                                style={{ height: '18px', marginRight: '5px' }}
                            />
                            <span style={{ fontSize: '14px', cursor: 'pointer' }}>Lists</span>
                        </div>
                        <div className="d-flex align-items-center">
                            <img
                                src={ImportImages.QueryIcon}
                                alt="Query"
                                style={{ height: '18px', marginRight: '5px' }}
                            />
                            <span style={{ fontSize: '14px', cursor: 'pointer' }}>Query</span>
                        </div>

                        {/* Marketing with Dropdown */}
                        <div className="dropdown">
                            <div
                                className="d-flex align-items-center dropdown-toggle"
                                id="marketingDropdown"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                                style={{ cursor: 'pointer' }}
                            >
                                <img
                                    src={ImportImages.MarketingIcon}
                                    alt="Marketing"
                                    style={{ height: '18px', marginRight: '5px' }}
                                />
                                <span style={{ fontSize: '14px' }}>Marketing</span>
                            </div>
                            <ul className="dropdown-menu border-0" aria-labelledby="marketingDropdown">
                                <li><a className="dropdown-item" href="#">Dashboard</a></li>
                                <li><a className="dropdown-item" href="#">Meta Data</a></li>
                                <li><a className="dropdown-item" href="#">Send Email</a></li>
                            </ul>
                        </div>


                        <div className="d-flex align-items-center">
                            <img
                                src={ImportImages.PipelineIcon}
                                alt="Pipeline"
                                style={{ height: '18px', marginRight: '5px' }}
                            />
                            <span style={{ fontSize: '14px', cursor: 'pointer' }}>Pipeline</span>
                        </div>


                        {/* Admin with Dropdown */}
                        <div className="dropdown">
                            <div
                                className="d-flex align-items-center dropdown-toggle"
                                id="adminDropdown"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                                style={{ cursor: 'pointer' }}
                            >
                                <img
                                    src={ImportImages.AdminIcon}
                                    alt="Admin"
                                    style={{ height: '18px', marginRight: '5px' }}
                                />
                                <span style={{ fontSize: '14px' }}>Admin</span>
                            </div>
                            <ul className="dropdown-menu border-0" aria-labelledby="adminDropdown">
                                <li><a className="dropdown-item" href="#">Users and Accounts</a></li>
                                <li><a className="dropdown-item" href="#">Data Configuration</a></li>
                                <li><a className="dropdown-item" href="#">Account Settings</a></li>
                            </ul>
                        </div>
                        <div className="d-flex align-items-center">
                            <img
                                src={ImportImages.ReportsIcon}
                                alt="Reports"
                                style={{ height: '18px', marginRight: '5px' }}
                            />
                            <span style={{ fontSize: '14px', cursor: 'pointer' }}>Reports</span>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}
