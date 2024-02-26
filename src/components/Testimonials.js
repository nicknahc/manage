import avatarAli from "../assets/avatar-ali.png";
import avatarRichard from "../assets/avatar-richard.png";
import avatarShanai from "../assets/avatar-shanai.png";
import avatarAnisha from "../assets/avatar-anisha.png";
import "../styles/Testimonials.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/scrollbar";

// import required modules
import { Autoplay, Pagination, Scrollbar } from "swiper/modules";
function Testimonials() {
  const testimonials = [
    {
      name: "Ali Bravo",
      quote:
        "“We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused.”",
      avatar: avatarAli,
    },
    {
      name: "Richard Watts",
      quote:
        "“Manage allows us to provide structure and process. It keeps us organized and focused. I can’t stop recommending them to everyone I talk to!”",
      avatar: avatarRichard,
    },
    {
      name: "Shanai Gough",
      quote:
        "“Their software allows us to track, manage and collaborate on our projects from anywhere. It keeps the whole team in-sync without being intrusive.”",
      avatar: avatarShanai,
    },
    {
      name: "Anisha Li",
      quote:
        "“Manage has supercharged our team’s workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.”",
      avatar: avatarAnisha,
    },
  ];

  return (
    <section className="testimonials">
      <h4 className="section-padding">{`What they've said`}</h4>
      <Swiper
        slidesPerView={3}
        spaceBetween={10}
        loop={true}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        scrollbar={{
          dragable: true,
        }}
        modules={[Pagination, Autoplay, Scrollbar]}
        className="my-swiper"
      >
        {testimonials.map((testimonial) => (
          <SwiperSlide
            className="testimonial swiper-slide"
            key={testimonial.name}
          >
            <img className="avatar" src={testimonial.avatar} alt="avatar"></img>
            <p>{testimonial.name}</p>
            <p>{testimonial.quote}</p>
          </SwiperSlide>
        ))}
      </Swiper>
      <button className="button">Get Started</button>
    </section>
  );
}
export default Testimonials;
