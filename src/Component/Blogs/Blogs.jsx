import { Helmet } from "react-helmet";

const Blogs = () => {
    return (
        <div>
            <Helmet>
                <title>Blogs</title>
            </Helmet>
            
            <div className="relative flex items-center justify-center py-16 bg-gray-50 sm:py-24 lg:py-32 mb-16">
                <div className="absolute inset-0 bg-gradient-to-r from-teal-500 to-cyan-600 dark:from-neutral-700 dark:to-neutral-800"
                    aria-hidden="true"></div>
                <div className="relative px-4 sm:px-6 lg:px-8">
                    <div className="mx-auto text-lg text-center max-w-4xl">
                        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
                            <span className="block mb-6">I am learning Tailwind Elements</span>
                            <span className="block text-3xl">and it's awesome</span>
                        </h1>
                        <p className="mt-6 text-xl text-teal-50 max-w-3xl mb-6">
                            Tailwind Elements is a fantastic library, offering reusable UI components that save development time, ensure
                            design consistency, and boost productivity. Its seamless integration with Tailwind CSS enables effortless
                            customization.
                        </p>

                        <a role="button" href="https://tailwind-elements.com/learn/te-foundations/basics/introduction/" target="_blank"
                            className="inline-block rounded bg-neutral-50 px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-neutral-800 shadow-[0_4px_9px_-4px_#cbcbcb] transition duration-150 ease-in-out hover:bg-neutral-100 hover:shadow-[0_8px_9px_-4px_rgba(203,203,203,0.3),0_4px_18px_0_rgba(203,203,203,0.2)] focus:bg-neutral-100 focus:shadow-[0_8px_9px_-4px_rgba(203,203,203,0.3),0_4px_18px_0_rgba(203,203,203,0.2)] focus:outline-none focus:ring-0 active:bg-neutral-200 active:shadow-[0_8px_9px_-4px_rgba(203,203,203,0.3),0_4px_18px_0_rgba(203,203,203,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(251,251,251,0.3)] dark:hover:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.1),0_4px_18px_0_rgba(251,251,251,0.05)] dark:focus:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.1),0_4px_18px_0_rgba(251,251,251,0.05)] dark:active:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.1),0_4px_18px_0_rgba(251,251,251,0.05)]">
                            Learn with me
                        </a>

                    </div>
                </div>
            </div>
            <div className="container mx-auto mb-16">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    <div
                        className="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                        <div className="relative overflow-hidden bg-cover bg-no-repeat" data-te-ripple-init data-te-ripple-color="light">
                            <img className="rounded-t-lg" src="https://tecdn.b-cdn.net/img/new/textures/small/1.jpg" alt="" />
                            <a href="#!">
                                <div
                                    className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsla(0,0%,98%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100">
                                </div>
                            </a>
                        </div>
                        <div className="p-6">
                            <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                                Are you ready?
                            </h5>
                            <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                                A great adventure is ahead of us! Get ready for a fascinating journey into the world of web design 🚀
                            </p>
                            <button type="button"
                                className="inline-block rounded bg-primary-100 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-primary-700 transition duration-150 ease-in-out hover:bg-primary-accent-100 focus:bg-primary-accent-100 focus:outline-none focus:ring-0 active:bg-primary-accent-200">
                                Count me in!
                            </button>
                        </div>
                    </div>
                    <div
                        className="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                        <div className="relative overflow-hidden bg-cover bg-no-repeat" data-te-ripple-init data-te-ripple-color="light">
                            <img className="rounded-t-lg" src="https://tecdn.b-cdn.net/img/new/textures/small/103.jpg" alt="" />
                            <a href="#!">
                                <div
                                    className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsla(0,0%,98%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100">
                                </div>
                            </a>
                        </div>
                        <div className="p-6">
                            <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                                UI and UX
                            </h5>
                            <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                                We will explore the unknown lands of creating great interfaces and designing the perfect user experience
                            </p>
                            <button type="button"
                                className="inline-block rounded bg-primary-100 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-primary-700 transition duration-150 ease-in-out hover:bg-primary-accent-100 focus:bg-primary-accent-100 focus:outline-none focus:ring-0 active:bg-primary-accent-200">
                                Oh, I want it too
                            </button>
                        </div>
                    </div>
                    <div
                        className="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                        <div className="relative overflow-hidden bg-cover bg-no-repeat" data-te-ripple-init data-te-ripple-color="light">
                            <img className="rounded-t-lg" src="https://tecdn.b-cdn.net/img/new/textures/small/56.jpg" alt="" />
                            <a href="#!">
                                <div
                                    className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsla(0,0%,98%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100">
                                </div>
                            </a>
                        </div>
                        <div className="p-6">
                            <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                                Future of web dev
                            </h5>
                            <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                                You know the saying that the future is today? There is no need to delay, let's start our journey
                            </p>

                            <button type="button"
                                className="inline-block rounded bg-primary-100 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-primary-700 transition duration-150 ease-in-out hover:bg-primary-accent-100 focus:bg-primary-accent-100 focus:outline-none focus:ring-0 active:bg-primary-accent-200">
                                Let's start!
                            </button>
                        </div>
                    </div>

                </div>
            </div>
           
        </div>
    );
};

export default Blogs;