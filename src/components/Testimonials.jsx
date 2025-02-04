"use client";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

const Testimonials = () => {
  return (
    <section className="bg-light py-5">
      <div className="container text-center">
        <h2 className="mb-4">What Our Clients Say</h2>
        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          pagination={{ clickable: true }}
          modules={[Pagination]}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          <SwiperSlide>
            <div className="p-4 shadow rounded bg-white">
              <p>"Excellent electrician services! Quick and professional work."</p>
              <h5 className="mt-3">- John Doe</h5>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="p-4 shadow rounded bg-white">
              <p>"Highly recommend! They fixed my wiring issues in no time."</p>
              <h5 className="mt-3">- Jane Smith</h5>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="p-4 shadow rounded bg-white">
              <p>"Affordable and reliable. Best electrician service in town!"</p>
              <h5 className="mt-3">- Mike Johnson</h5>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="p-4 shadow rounded bg-white">
              <p>"Affordable and reliable. Best electrician service in town!"</p>
              <h5 className="mt-3">- Tom Johnson</h5>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
