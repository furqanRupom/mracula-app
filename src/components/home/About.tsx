
const About = () => {
    return (
        <div>
            <div id="about" className="relative overflow-hidden mt-16 ">
                <div className="max-w-7xl mx-auto">
                    <div className="relative z-10 pb-8  sm:pb-16 md:pb-20 lg:max-w-[40rem] lg:w-full lg:pb-28 xl:pb-32">
                        <svg
                            className="hidden  lg:block absolute right-0 inset-y-0 h-full w-48  transform translate-x-1/2"
                            fill="#"
                            viewBox="0 0 100 100"
                            preserveAspectRatio="none"
                            aria-hidden="true"
                        >
                            <polygon points="50,0 100,0 50,100 0,100" />
                        </svg>
                        <div className="pt-1" />
                        <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28 z-20 ">
                            <div className="sm:text-center px-12 lg:text-left text-white">
                                <h2 className="my-6 text-2xl tracking-tight font-extrabold text-lime-400 sm:text-3xl md:text-4xl">
                                    About Our Horror Website
                                </h2>
                                <p>
                                    Welcome to the heart of darkness. Our horror website is a gateway to
                                    the macabre, a haven for those who revel in the thrill of fear.
                                    Enter a realm where nightmares come to life, where every shadow
                                    conceals a lurking terror waiting to pounce.
                                </p>
                                <p>
                                    Dive into a collection of spine-chilling tales, bone-chilling games,
                                    and eerie artwork that will leave you trembling with excitement. But
                                    be warned: once you enter, there's no turning back. Are you brave
                                    enough to face the horrors that await within?
                                </p>
                            </div>
                        </main>
                    </div>
                </div>
                <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
                    <img
                        className="h-56 w-full object-cover object-top sm:h-72 md:h-96 lg:w-full lg:h-full"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR06M4pzz5PeQWdjAWTd0dqRbUczeMzUb8BaOgkUcVO6w&s"
                        alt=""
                    />
                </div>
            </div>

        </div>
    );
};

export default About;