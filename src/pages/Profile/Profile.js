import React from 'react';
import images from '../images/bdJobsProfilePic.jpg'

const Profile = () => {
    return (
        <div class="">
            <div class="hero-content text-center">

                <div class="max-w-md">
                    <h1 class="text-5xl font-bold pb-16">My Information</h1>
                    <div class="avatar">

                        <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={images} alt="" />
                        </div>
                    </div>
                    <h1 class="text-2xl font-bold">Name: Amortha Kumar Shill</h1>
                    <h1 class="text-2xl font-bold">Phone: 01829704087</h1>
                    <h3 class="text-1xl font-bold">Email: amitsharma1998K@gmail.com</h3>
                    <h3 class="text-1xl font-bold">Education: Nationnal University(BBS) 3rd Year</h3>
                    <h1 class="text-xl font-bold pt-4">My skill</h1>
                    <p class="">
                        HTML,
                        CSS,
                        BOOTSTRAP,
                        TAILDWINDCSS,
                        JAVASCRIPT,
                        REACJT.JS,
                        NODE.JS,
                        MONGODB,
                    </p>
                    <h1 class="text-xl font-bold pt-4">My Best Project</h1>
                    <p>
                    https://splendorous-selkie-0826f4.netlify.app <br></br>
                    https://dazzling-naiad-e5340b.netlify.app<br></br>
                    https://gentle-praline-6fadae.netlify.app<br></br>
                    https://willowy-entremet-1fc042.netlify.app
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Profile;