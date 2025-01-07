import React, { Fragment } from 'react'
import ImportImages from '../ImportImages'



export default function Header() {
    return (
        <Fragment>
            <div className="container fixed-top"><div className='row'>
                <div className='headerLogoContainer col-4' >
                    <img src={ImportImages.HeaderLogoImage} alt="Logo" className='headerLogoImage' />
                </div>
                <div className="searchContainer col-4 d-flex align-items-center border rounded p-1 bg-white">
                    <img
                        src={ImportImages.SearchIcon}
                        alt="Search Icon"
                        className="searchIcon"
                        style={{ height: '20px', marginRight: '10px' }}
                    />
                    <input
                        type="text"
                        placeholder="Enter Keyword"
                        className="searchInput border-0 bg-transparent flex-grow-1"
                    />
                </div>
                {/* Icon Buttons Section */}
                <div className="col-4 d-flex">
                    <div className="iconButton d-flex flex-column align-items-center me-3">
                        <img
                            src={ImportImages.AddUserIcon}
                            alt="Icon 1"
                            style={{ height: '30px' }}
                        />
                        <span className="mt-1">New Contacts</span>
                    </div>
                    <div className="iconButton d-flex flex-column align-items-center">
                        <img
                            src={ImportImages.phoneBookIcon}
                            alt="Icon 2"
                            style={{ height: '30px' }}
                        />
                        <span className="mt-1">All Contacts</span>
                    </div>
                </div>
                <div className='col-2'>


                    {/* Text and Profile Icon Section */}
                    <div className="col-4 d-flex justify-content-end align-items-center">
                        <span className="me-3">Vrund Raval</span>
                        <img
                            src={ImportImages.personImage}
                            alt="Profile Icon"
                            className="rounded-circle"
                            style={{ height: '40px', width: '40px', objectFit: 'cover' }}
                        />
                    </div>

                </div>
            </div> </div>



        </Fragment>
    )
}
