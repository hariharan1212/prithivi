import React from 'react';

const Navigation = () => {
    return (
        <div className="navigation">
            <ul>
                <li className="list active">
                    <a href="#">
                        <span className="icon">
                            <ion-icon name="home-outline"></ion-icon>
                        </span>
                        <span className="text">Home</span>
                    </a>
                </li>
                <li className="list">
                    <a href="#">
                        <span className="icon">
                            <ion-icon name="person-outline"></ion-icon>
                        </span>
                        <span className="text">Profile</span>
                    </a>
                </li>
                <li className="list">
                    <a href="#">
                        <span className="icon">
                            <ion-icon name="chatbubble-outline"></ion-icon>
                        </span>
                        <span className="text">Message</span>
                    </a>
                </li>
                <li className="list">
                    <a href="#">
                        <span className="icon">
                            <ion-icon name="camera-outline"></ion-icon>
                        </span>
                        <span className="text">Photos</span>
                    </a>
                </li>
                <li className="list">
                    <a href="#">
                        <span className="icon">
                            <ion-icon name="settings-outline"></ion-icon>
                        </span>
                        <span className="text">Settings</span>
                    </a>
                </li>
                <div className="indicator"></div>
            </ul>
        </div>
    );
};

export default Navigation;