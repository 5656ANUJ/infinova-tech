import { testimonialData } from "../data";
import Testimonial from "../Components/testimonial";


export default function TestimonialSec() {
  return (
    <section>
        <Testimonial items={testimonialData} speed={1} />
    </section>
  )
}