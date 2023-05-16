import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Sidebar.css'

const Sidebar = () => {

    const [selectedId, setSelectedId] = useState("home")

    const sideBarData = {
        mainTabs: [
            {
                head: "Home",
                icon: "home"
            },
            {
                head: "Explore",
                icon: "explore"
            },
            {
                head: "Shorts",
                icon: "bolt"
            },
            {
                head: "Subscriptions",
                icon: "subscriptions"
            },
        ],
        externalTabs: [
            {
                head: "Library",
                icon: "video_library"
            },
            {
                head: "History",
                icon: "history"
            },
            {
                head: "Your Videos",
                icon: "smart_display"
            },
            {
                head: "Watch Later",
                icon: "browse_gallery"
            },
            {
                head: "Liked Vides",
                icon: "thumb_up_off"
            },
        ],
        channels: [
            {
                "logo": "https://yt3.googleusercontent.com/AhRkgu01vCTifaLymgO4s6vLzjjoUjA_UH18mRTB5EekOE2bK0oqlbUnVUm4lG2Ge0p80Q7XkGg=s176-c-k-c0x00ffffff-no-rj",
                "name": "Subyektiv",
                id: 'Subyektiv'
            },
            {
                "logo": "https://yt3.googleusercontent.com/ytc/AL5GRJXQBawXA6icBn-TCVe9TVfUA3CyI-ukdcyHqxc=s176-c-k-c0x00ffffff-no-rj",
                "name": "Teacher Azam",
                id: 'Teacher Azam'
            },
            {
                "logo": "https://yt3.googleusercontent.com/TUvEtQGB6O8XRY4Vv0CUwJ69SuXkM9vPqEzQJgRuRX-NtqJzg_vjnM7QDx1SR4htua7gSy_-Hw=s176-c-k-c0x00ffffff-no-rj",
                "name": "DAVRONBEK TURD..",
                id: 'DAVRONBEK TURD..'
            },
            {
                "logo": "https://yt3.googleusercontent.com/UA3-foGLMxAW0zCZ78d4jGSOO0Lm8Qh2BY8gXlpcTTOu_5QzCoU5Yww9Hutd9RxI3Xw6MBO24NE=s176-c-k-c0x00ffffff-no-rj",
                "name": "Nas Daily",
                id: 'Nas Daily'
            },
            {
                "logo": "https://yt3.googleusercontent.com/ytc/AL5GRJWK5Cg0y0NB680LyTwh-lmVDP-zBkQRj5_68rHSKA=s176-c-k-c0x00ffffff-no-rj",
                "name": "AbuSolih Fox",
                id: 'AbuSolih Fox'
            },
            {
                "logo": "https://yt3.googleusercontent.com/iXbVpb9SG_knmMh5LVPzf4GtmzA5XHW-LkaVdHEYYMlJbBT0uFti5Z6zZvnqkpvqMx_7rzvL=s176-c-k-c0x00ffffff-no-rj",
                "name": "Joma Shorts",
                id: 'Joma Shorts'
            },
            {
                "logo": "https://yt3.googleusercontent.com/ytc/AL5GRJUfOfVXNfonbB33lrQOb0d5R5FQVBt87N3BFp1D9Q=s176-c-k-c0x00ffffff-no-rj",
                "name": "TEDx Talks",
                id: 'TEDx Talks'
            },
        ],
        explore: [
            {
                head: "Films",
                icon: "theaters"
            },
            {
                head: "Gaming",
                icon: "sports_esports"
            },
            {
                head: "Live",
                icon: "sensors"
            },
            {
                head: "Fashion & Beauty",
                icon: "styler"
            },
            {
                head: "Learning",
                icon: "lightbulb"
            },
            {
                head: "Sports",
                icon: "sports_soccer"
            },
        ],
        moreYoutubes: [
            {
                "logo": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/YouTube_full-color_icon_%282017%29.svg/2560px-YouTube_full-color_icon_%282017%29.svg.png",
                "name": "Youtube Premium"
            },
            {
                "logo": "https://img.utdstc.com/icon/da1/075/da10758eb49eee15e14de4b0d4ac121ad41f44878ef403c6f8af704a8d7b4f49:200",
                "name": "Creator Studio"
            },
            {
                "logo": "https://seeklogo.com/images/Y/youtube-music-logo-50422973B2-seeklogo.com.png",
                "name": "Youtube Music"
            },
            {
                "logo": "https://seeklogo.com/images/Y/youtube-kids-logo-40C22D4579-seeklogo.com.png",
                "name": "Youtube Kids"
            },
            {
                "logo": "https://play-lh.googleusercontent.com/HPyYXe-ToibRPGtFd4Ni4gi7RVfpkj4s8HwtC6fhDPqO7JfkF1-ld2SYFdzOQh-9zXU",
                "name": "Youtube TV"
            },
        ],
        settings: [
            {
                head: "Settings",
                icon: "settings"
            },
            {
                head: "Report History",
                icon: "flag"
            },
            {
                head: "Help",
                icon: "help"
            },
            {
                head: "Send Feedback",
                icon: "sms_failed"
            },
        ]
    }

    return (
        <>
            <div className="sidebarSection close" id='sidebarContainer'>
                <div className="miniSidebar" id='miniSidebar'>
                    {sideBarData.mainTabs.map((tab,i) => {
                        return <div key={i} className={`miniSidebarTab ${tab.icon === selectedId && 'active'}`} onClick={() => setSelectedId(tab.icon)}>
                            <span className='material-symbols-rounded'>{tab.icon}</span>
                            <p>{tab.head}</p>
                        </div>
                    })}
                </div>
                <div className="sidebarContainer" id='sidebarContainer'>
                    <div className="sideBarTabs">
                        <div className="tabContainer">
                            {sideBarData.mainTabs.map((tab,i) => {
                                return <div key={i} className={`sidebarTab ${tab.icon === selectedId && 'active'}`} onClick={() => setSelectedId(tab.icon)}>
                                    <span className='material-symbols-rounded'>{tab.icon}</span>
                                    {tab.head}
                                </div>
                            })}
                        </div>
                        <div className="horizontalLine" style={{ margin: '10px 0' }}></div>
                        <div className="tabContainer">
                            {sideBarData.externalTabs.map((tab,i) => {
                                return <div key={i} className={`sidebarTab ${tab.icon === selectedId && 'active'}`} onClick={() => setSelectedId(tab.icon)}>
                                    <span className='material-symbols-rounded'>{tab.icon}</span>
                                    {tab.head}
                                </div>
                            })}
                        </div>
                        <div className="horizontalLine" style={{ margin: '10px 0' }}></div>
                        <div className="subscriptions">
                            <h2 className='mainSidebarHead'>Subscriptions</h2>
                            {sideBarData.channels.map((tab) => {
                                return <div className="channelTab" key={tab.logo}>
                                    <img src={tab.logo} alt={tab.logo} />
                                    <p>{tab.name}</p>
                                </div>
                            })}
                        </div>
                        <div className="horizontalLine" style={{ margin: '10px 0' }}></div>
                        <div className="explore">
                            <h2 className="mainSidebarHead">Explore</h2>
                            {sideBarData.explore.map((tab) => {
                                return <div className="sidebarTab" key={tab.head}>
                                    <span className='material-symbols-rounded'>{tab.icon}</span>
                                    {tab.head}
                                </div>
                            })}
                        </div>
                        <div className="horizontalLine" style={{ margin: '10px 0' }}></div>
                        <div className="moreYoutube">
                            <h2 className="mainSidebarHead">More on Youtube</h2>
                            {sideBarData.moreYoutubes.map((tab) => {
                                return <div className="youtubeTabs" key={tab.logo}>
                                    <img src={tab.logo} alt={tab.logo} />
                                    <p>{tab.name}</p>
                                </div>
                            })}
                        </div>
                        <div className="horizontalLine" style={{ margin: '10px 0' }}></div>
                        <div className="tabContainer">
                            {sideBarData.settings.map((tab,i) => {
                                return <div key={i} className={`sidebarTab ${tab.icon === selectedId && 'active'}`} onClick={() => setSelectedId(tab.icon)}>
                                    <span className='material-symbols-rounded'>{tab.icon}</span>
                                    {tab.head}
                                </div>
                            })}
                        </div>
                        <div className="horizontalLine" style={{ margin: '10px 0' }}></div>

                        <div className="sidebarBottomLinks">
                            <Link to="/https://www.youtube.com/shorts">About</Link>
                            <Link to="/">Press</Link>
                            <Link to="/">Copyright</Link>
                            <Link to="/">Contact</Link>
                            <Link to="/">Creator</Link>
                            <Link to="/">Advertise</Link>
                            <Link to="/">Developers</Link>
                        </div>
                        <div className="sidebarBottomLinks">
                            <Link to="/">Terms</Link>
                            <Link to="/">Privacy</Link>
                            <Link to="/">Policy &amp; Safety</Link>
                            <Link to="/">How Youtube works</Link>
                            <Link to="/">Test new features</Link>
                            <h3>&copy; Uzakoff</h3>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Sidebar