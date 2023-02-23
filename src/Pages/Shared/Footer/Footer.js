import React from 'react';
import { Link } from 'react-router-dom';
import fb from '../../../assets/icons/fb.png';
import youtube from '../../../assets/icons/youtube.png';
import twitter from '../../../assets/icons/twitter.png';

const Footer = () => {
    return (
        <section className=' bg-neutral  mt-32'>
            <footer aria-label="Site Footer" class="">
                <div class="mx-auto max-w-screen-xl px-4 pt-16 pb-6 sm:px-6 lg:px-8 ">

                    <div
                        class="mt-10 grid grid-cols-1 gap-[331px]   pt-10  md:grid-cols-2 lg:grid-cols-3 mb-20"
                    >
                        <div class="text-center sm:text-left w-[485px] h-[317px]">
                            <h1 className='text-white text-4xl mb-4 font-bold'>Future</h1>
                            <p class="text-lg font-medium text-white">
                                There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words
                            </p>

                            <nav aria-label="Footer About Nav" class="mt-8">
                                <ul class="space-y-4 text-sm">
                                    <li>
                                        <a
                                            class="text-white transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
                                            href="/"
                                        >
                                            Email : info@gmail.com
                                        </a>
                                    </li>

                                    <li>
                                        <a
                                            class="text-white transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
                                            href="/"
                                        >
                                            Phone : 01500 00 00 00
                                        </a>
                                    </li>

                                    <li>
                                        <a
                                            class="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 w-[175px] h-[46px]  text-gray-700  transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
                                            href="/"
                                        >
                                            <img src={fb} alt="" />
                                            <img src={twitter} alt="" />
                                            <img src={youtube} alt="" />
                                        </a>
                                    </li>


                                </ul>
                            </nav>
                        </div>

                        <div class="text-center ml-96 mt-[-70px] w-[325px] h-[204px] sm:text-left md:col-span-4 lg:col-span-2">
                            <p class="text-lg font-medium text-gray-900 dark:text-white">
                                Stay in Touch
                            </p>

                            <div class="mx-auto mt-8 max-w-md sm:ml-0">
                                <p
                                    class="text-center text-xl leading-relaxed text-white dark:text-gray-400 sm:text-left"
                                >
                                    Subscribe
                                </p>

                                <form class="mt-4">
                                    <div
                                        class="flex flex-col gap-4 sm:flex-row lg:flex-col lg:items-start"
                                    >
                                        <label for="email" class="sr-only">Email</label>

                                        <input
                                            class="w-full  rounded-md border bg-zinc-900 px-6 py-3 shadow-sm  "
                                            type="email"
                                            placeholder="Enter your email"
                                        />

                                        <button
                                            class="block rounded-md bg-indigo-500 px-8 py-3 font-medium text-white transition hover:bg-indigo-600"
                                            type="submit"
                                        >
                                            Subscribe
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                </div>
            </footer>

        </section>
    );
};

export default Footer;