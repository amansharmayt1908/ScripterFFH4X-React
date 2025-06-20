import React from 'react'
import './YoutubeLinks.css'
import { Link } from 'react-router-dom'


const YoutubeLinks = () => {
    const SocialButton = ({ icon, text }) => (
        <div style={{ display: 'inline-flex', alignItems: 'center' }}>
            <img 
                src={icon} 
                alt="Social Icon" 
                style={{ width: '20px', marginRight: '8px' }}
            />
            {text}
        </div>
    );

    const links = [
        {
            url: "https://www.youtube.com/@scripterffh4x",
            type: "youtube",
            icon: "https://www.youtube.com/favicon.ico",
            text: "Scripter FFH4X Channel"
        },
        {
            url: "https://www.instagram.com/scripter.js/",
            type: "instagram",
            icon: "https://www.instagram.com/static/images/ico/favicon.ico/36b3ee2d91ed.ico",
            text: "Scripter FFH4X Instagram"
        },
        {
            url: "https://just2earn.com/fps_boost_files",
            type: "other",
            icon: "https://cdn-icons-png.flaticon.com/512/4906/4906292.png",
            text: "FPS Booster Files"
        },
        {
            url: "https://just2earn.com/mouse_enhance_2",
            type: "other",
            icon: "https://cdn-icons-png.flaticon.com/512/4906/4906292.png",
            text: "Mouse Enhance Files"
        },
        {
            url: "https://www.mediafire.com/file/3uxq4tfqngfvhq8/PCOptimizer.rar/file",
            type: "other",
            icon: "https://cdn-icons-png.flaticon.com/512/4906/4906292.png",
            text: "Optimizer - Mediafire"
        },
        {
            url: "https://www.mediafire.com/file/0w7m90j70huyo0s/fILEs%25282%2529.rar/file",
            type: "other",
            icon: "https://cdn-icons-png.flaticon.com/512/4906/4906292.png",
            text: "Latest Video Files - Mediafire"
        },
        {
            url: "https://www.mediafire.com/file/8lpuy0msrfln9pa/BlueStacks_App_Player_v4.240.15.1005.rar/file",
            type: "other",
            icon: "https://cdn-icons-png.flaticon.com/512/4906/4906292.png",
            text: "Bluestacks 4 best version - Mediafire"
        },
        {
            url: "https://www.mediafire.com/file/1y9ii3b894awaam/bsPriority.rar/file",
            type: "other",
            icon: "https://cdn-icons-png.flaticon.com/512/4906/4906292.png",
            text: "Bluestacks Priority bat file - Mediafire"
        }
    ];

    return (
        <div className="youtube-links-container">
            <h1>Files Links</h1>
            <div className="yt-links">
                {links.map((link, index) => (
                    <Link
                        key={index}
                        to={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <SocialButton 
                            icon={link.icon}
                            text={link.text}
                        />
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default YoutubeLinks
