import styles from './About.module.css'

const About = () => {
    return (
        <div className={styles.container}>
            <div className={styles.main_container}>
                <h2 className={styles.title}>Booking car hire in three simple steps</h2>
                <div className={styles.desc_wrapper}>
                    <div className={styles.mini_desc_wrapper}>
                        <img src="https://content.skyscnr.com/m/264b769c3721bfa4/original/Confidence-Panels-01-centred_Confidence-Panels-01-centred.svg" alt="search_img" width="300px" height="300px"/>
                        <span className={styles.text_wrapper}>
                            <h3>Step 1: Search</h3>
                            <p className={styles.text_wrapper_desc}>Enter your location and see what's available. From family-friendly SUVs to luxury convertibles, you’ll get a great price on every type of hire car.</p>
                        </span>
                    </div>
                    <div className={styles.mini_desc_wrapper}>
                        <img src="https://content.skyscnr.com/m/427a434abcb704b7/original/Confidence-Panels-01-centred_Confidence-Panels-02-centred.svg" alt="compare_img" width="300px" height="300px" />
                        <span className={styles.text_wrapper}>
                            <h3>Step 2: Compare</h3>
                            <p className={styles.text_wrapper_desc}>Compare rental cars on fuel policy, mileage, provider rating, flexible booking, cleanliness, customer service and more.</p>
                        </span>
                    </div>
                    <div className={styles.mini_desc_wrapper}>
                        <img src="https://content.skyscnr.com/m/627af4d160010b/original/Confidence-Panels-01-centred_Confidence-Panels-03-centred.svg" alt="book_img" width="300px" height="300px" />
                        <span className={styles.text_wrapper}>
                            <h3>Step 3: Book</h3>
                            <p className={styles.text_wrapper_desc}>We compare car rental prices on 100s of sites for you, so once you've found your ride, you'll be redirected to book with the provider, with no extra fees.</p>
                        </span>
                    </div>
                </div>
            </div>
            <div className={styles.secondary_container}>
                <div className={styles.content_container}>
                    <h2 className={styles.title}>How to find the best car hire deal</h2>
                    <p>We’re frequently named as the most trusted travel search site out there. We're free to use, and we’ll do the hard work for you by searching hundreds of car hire companies, allowing you to instantly compare prices and then book. Here's how to get the most out of your car rental search.</p>
                    <div className={styles.section_wrapper}>
                        <div className={styles.text_section_wrapper}>
                            <svg xmlns="http://www.w3.org/2000/svg" className={styles.icon}>
                                <path d="M24 13.11v1c0 1 0 2.5-1 2.5h-.501a.559.559 0 01-.534-.5 2.89 2.89 0 00-2.97-2.5 2.872 2.872 0 00-2.97 2.5c-.036.274-.256.39-.532.39H8.72a.771.771 0 01-.807-.618 2.896 2.896 0 00-2.93-2.272 2.873 2.873 0 00-2.962 2.457.624.624 0 01-.584.541h-.03a.541.541 0 01-.09-.002C.332 16.61.073 14.981.005 14.124a1.714 1.714 0 01.225-.966l1.658-2.997A1.297 1.297 0 013 9.501h11c1 0 .88-.79.194-1.289a6.749 6.749 0 00-1.596-.924 8.646 8.646 0 00-3.061-.504 14.726 14.726 0 00-3.226.386c-1.39.31-3.24.884-4.401 1.284a.547.547 0 01-.69-.377l-.003-.012a.626.626 0 01.334-.78 31.455 31.455 0 014.52-1.407A15.16 15.16 0 019.49 5.5a10.04 10.04 0 013.5.543 16.83 16.83 0 014.05 2.904 1.13 1.13 0 00.668.287 12.66 12.66 0 014.79 1.376 2.75 2.75 0 011.5 2.5z"></path><path d="M6.986 16.5a2 2 0 01-2 2h-.002a2 2 0 112.002-2.002zm14.01 0a2 2 0 01-2 2 2 2 0 112.002-2.002v.002z"></path>
                            </svg>
                            <div className={styles.mini_text_section_wrapper}>
                                <h3 className={styles.subtitle}>Book now, cancel later</h3>
                                <p className={styles.description}>There are many car and van hire options with flexible booking policies and free cancellation. So you can bag the best deal with total flexibility to change your plans last-minute if you need to. Find flexible car hire.</p>
                            </div>
                        </div>
                        <div className={styles.text_section_wrapper}>
                            <svg xmlns="http://www.w3.org/2000/svg" className={styles.icon}>
                                <path d="M20 8.5H4a1 1 0 00-1 1v8.25A3.25 3.25 0 006.25 21h11.5A3.25 3.25 0 0021 17.75V9.5a1 1 0 00-1-1zm-12.75 9a1.25 1.25 0 111.25-1.25 1.25 1.25 0 01-1.25 1.25zm0-4.5a1.25 1.25 0 111.25-1.25A1.25 1.25 0 017.25 13zM12 17.5a1.25 1.25 0 111.25-1.25A1.25 1.25 0 0112 17.5zm0-4.5a1.25 1.25 0 111.25-1.25A1.25 1.25 0 0112 13zm4.75 0A1.25 1.25 0 1118 11.75 1.25 1.25 0 0116.75 13zM21 6.25a.75.75 0 01-.75.75H3.75A.75.75 0 013 6.25 3.25 3.25 0 016.25 3h11.5A3.25 3.25 0 0121 6.25z"></path>
                                <path d="M6.986 16.5a2 2 0 01-2 2h-.002a2 2 0 112.002-2.002zm14.01 0a2 2 0 01-2 2 2 2 0 112.002-2.002v.002z"></path>
                            </svg>
                            <div className={styles.mini_text_section_wrapper}>
                                <h3 className={styles.subtitle}>Hire cars for a whole month</h3>
                                <p className={styles.description}>Want to rent a car for almost a month? Often, car rental companies avoid costly admin in between pick-ups by hiring out cars for longer periods. So see if monthly car rental is cheaper than the three weeks you need it for by selecting 30 days. Try it now.</p>
                            </div>
                        </div>
                        <div className={styles.text_section_wrapper}>
                            <svg xmlns="http://www.w3.org/2000/svg" className={styles.icon}>
                                <path d="M3 4.48a.813.813 0 01.224-.588A7.798 7.798 0 018.5 2a7.867 7.867 0 015.213 1.867.896.896 0 01.287.675v15.85A1.666 1.666 0 0112.281 22H4.72A1.667 1.667 0 013 20.393zM6 6a1 1 0 00-1 1v2a1 1 0 001 1h5a1 1 0 001-1V7a1 1 0 00-1-1zm10 0a1 1 0 00.2 1.4L19 9.5v5.764a1 1 0 01-2 0V12a1 1 0 00-2 0v3.264a3 3 0 006 0V9.5a2 2 0 00-.8-1.6l-2.8-2.1A1 1 0 0016 6z"></path>
                            </svg>
                            <div className={styles.mini_text_section_wrapper}>
                                <h3 className={styles.subtitle}>Compare fuel policies</h3>
                                <p className={styles.description}>To save money on topping up the tank before you take off, look out for deals with a 'full to full' fuel tank policy. Explore fuel policies.</p>
                            </div>
                        </div>
                        <div className={styles.text_section_wrapper}>
                            <svg xmlns="http://www.w3.org/2000/svg" className={styles.icon}>
                                <path d="M6 5.5C6 3.567 7.57 2 9.506 2a3.507 3.507 0 013.375 2.545h6.676a1.2 1.2 0 011.073.662 3.494 3.494 0 010 3.13l-.067.135a.957.957 0 01-1.711-.854l.067-.134c.161-.322.207-.685.136-1.03H17.16c.059.64-.06 1.294-.355 1.884l-.068.134a.957.957 0 01-1.71-.854l.067-.134c.161-.322.207-.685.136-1.03h-2.35A3.507 3.507 0 019.506 9 3.503 3.503 0 016 5.5zm3.506-1.591a1.591 1.591 0 100 3.182 1.592 1.592 0 000-3.182zM3 13.5v7a1.5 1.5 0 01-3 0v-7a1.5 1.5 0 013 0zm2 .5a2 2 0 012-2h6.6a2 2 0 01.77.154l3.015 1.256a1 1 0 01.615.923v.167a1 1 0 01-1 1h-3.917a.75.75 0 000 1.5h2.371a1 1 0 00.407-.086l6.432-2.86a1 1 0 011.301.467l.044.09a1 1 0 01-.27 1.227l-7.153 5.724a2 2 0 01-1.25.438H7a2 2 0 01-2-2v-6z"></path>
                            </svg>
                            <div className={styles.mini_text_section_wrapper}>
                                <h3 className={styles.subtitle}>Skip the queues</h3>
                                <p className={styles.description}>We call out keyless or self-service pick-up when you search with us. No keys to pick up or paperwork to fill in means no queues. Just turn up at your preferred car hire location, hop in and hit the road.</p>
                            </div>
                        </div>
                        <div className={styles.text_section_wrapper}>
                            <svg xmlns="http://www.w3.org/2000/svg" className={styles.icon}>
                                <path d="M8.5 2a7.798 7.798 0 00-5.276 1.892A.813.813 0 003 4.48v15.913A1.667 1.667 0 004.72 22h7.561A1.666 1.666 0 0014 20.392V4.542a.896.896 0 00-.287-.675A7.867 7.867 0 008.5 2zm3.329 9.299l-3.455 6.048a.2.2 0 01-.374-.1V14a1 1 0 00-1-1H5.345a.2.2 0 01-.174-.299l3.455-6.048a.2.2 0 01.374.1v3.246a1 1 0 001 1h1.655a.2.2 0 01.174.3zM21 9.5v5.764a3 3 0 11-6 0V12a1 1 0 012 0v3.264a1 1 0 102 0V9.5l-2.8-2.1a1 1 0 111.2-1.6l2.8 2.1a2 2 0 01.8 1.6z"></path>
                            </svg>
                            <div className={styles.mini_text_section_wrapper}>
                                <h3 className={styles.subtitle}>Go greener</h3>
                                <p className={styles.description}>Limit your impact on this beautiful planet while you explore it. Filter by electric vehicles, which will be charged up and ready to go when you pick them up, meaning no worries about fuel policies, either.</p>
                            </div>
                        </div>
                        <div className={styles.text_section_wrapper}>
                            <svg xmlns="http://www.w3.org/2000/svg" className={styles.icon}>
                                <path d="M12.001 1a6.001 6.001 0 012.822 11.297c-.768.41-1.767.833-1.822 1.703v8a1.023 1.023 0 01-.969 1 1.08 1.08 0 01-1.031-1v-8c-.058-.87-1.03-1.285-1.8-1.693A6 6 0 0112.001 1z"></path>
                            </svg>
                            <div className={styles.mini_text_section_wrapper}>
                                <h3 className={styles.subtitle}>Look further afield</h3>
                                <p className={styles.description}>If you're on a budget, it's often cheaper to hop on public transport to a car rental pick-up location a little further away.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About