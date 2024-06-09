import React from 'react';
import Navbar from '../Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FiArrowUpRight } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const AboutPage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Navbar/>
      <div className="flex items-center justify-center h-screen-5px">
        <button className="w-full rounded bg-neutral-900 px-9 py-4 text-xl text-white transition-colors hover:bg-neutral-700 md:w-fit " onClick={() => navigate('/menu-page')}>
          View Menu<FiArrowUpRight className="inline" />
        </button>
      </div>
        <div class="container col-xxl-8 px-4 py-5">
        <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div class="col-10 col-sm-8 col-lg-6">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTft9I-9HVX5SLihr8RO622wVaRwuLVR1WRn7u1FPhPMg&s" class="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy"/>
          </div>
          <div class="col-lg-6">
            <h1 class="display-5 fw-bold text-body-emphasis lh-1 mb-3">About Us - Our rich history and craft.</h1>
            <p class="lead">At React Bakeries, baking isn't just our passion – it's our heritage. Established in 1995 by our founder and master baker, Grandma Betty, Sweet Delights has been serving up irresistible treats and heartfelt memories for over two decades.

            Our bakery is more than just a place to pick up a sweet treat; it's a cozy corner of the community, where neighbors gather, friends reunite, and families create new traditions. From our warm, freshly baked bread to our decadent cakes adorned with intricate designs, each creation is crafted with love and care, using only the finest ingredients and time-honored recipes passed down through generations.</p>
            <div class="d-grid gap-2 d-md-flex justify-content-md-start">
            </div>
          </div>
        </div>
      </div>
      {/* mission */}
      <div class="b-example-divider"></div>
      <div class="px-4 pt-5 my-5 text-center border-bottom">
    <h1 class="display-4 fw-bold text-body-emphasis">Our Mission</h1>
    <div class="col-lg-6 mx-auto">
      <p class="lead mb-4">As a family-owned and operated business, we take pride in being an integral part of our community. From sponsoring local events to donating our surplus baked goods to those in need, giving back is at the heart of everything we do. Because at React Bakeries, we believe that sharing a slice of happiness can make the world a sweeter place for all.</p>
    </div>
    <div class="overflow-hidden" style={{ maxHeight: '30vh' }}>
      <div class="container px-5">
        <img src="https://sharpsheets.io/wp-content/uploads/2022/11/bakery-solutions03-1200x675-cropped.jpeg" class="img-fluid border rounded-3 shadow-lg mb-4" alt="Example" width="700" height="500" loading="lazy"/>
      </div>
    </div>
  </div>
  {/* values */}
  <div class="b-example-divider"></div>
  <div class="container col-xxl-8 px-4 py-5">
        <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div class="col-10 col-sm-8 col-lg-6">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTft9I-9HVX5SLihr8RO622wVaRwuLVR1WRn7u1FPhPMg&s" class="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy"/>
          </div>
          <div class="col-lg-6">
            <h1 class="display-5 fw-bold text-body-emphasis lh-1 mb-3">Our Values</h1>
            <p class="lead">Welcome to React Bakeries, where passion, innovation, and tradition blend to create extraordinary baked goods. Our commitment to excellence drives everything we do, from the meticulous selection of ingredients to the artful presentation of our creations. We embrace innovation while honoring time-honored baking traditions, ensuring each treat is a delightful fusion of old and new.</p>
            <div class="d-grid gap-2 d-md-flex justify-content-md-start">
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center h-screen-5px">
        <button className="w-full rounded bg-neutral-900 px-9 py-4 text-xl text-white transition-colors hover:bg-neutral-700 md:w-fit " onClick={() => navigate('/menu-page')}>
          View Menu<FiArrowUpRight className="inline" />
        </button>
      </div>
  </div>
  
  )
}

export default AboutPage
