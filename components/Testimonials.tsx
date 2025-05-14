import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import ssg3 from "@/assets/ssg3.jpg";
import ssg1 from "@/assets/ssg1.jpg";
import ssg6 from "@/assets/ssg6.jpg";
import ssg5 from "@/assets/ssg5.jpg";
import ssg7 from "@/assets/ssg7.jpg";
import ssg8 from "@/assets/ssg8.jpg";

export function AnimatedTestimonialsDemo() {
  const testimonials = [
    {
      quote:
        "I found my passion for photography in high school, and watching too many Peter McKinnon videos inspired me to create short films, portraits, and landscapes.",
      name: "Found My Passion in Photography",
      designation: "The beginning of my journey",
      src: ssg3.src,
    },
    {
      quote:
        "My involvement in the Supreme Student Government began in 2022 with the Technical Committee. In 2023, I was invited to join the Media Team by a friend who was the running president at the time and went on to serve two terms. I served on the Media Team for two years, until 2024.",
      name: "My Journey as a Student Leader",
      designation: "Supreme Student Government of the Holy Cross of Davao College",
      src: ssg1.src,
    },
    {
      quote:
        "During events, this was the team I could always count on. We were constantly racing against the clock, whether it was to catch a photo-op or fulfill a request for a picture. We also worked under pressure to deliver same-day video edits, a task my team and I took on together. ",
      name: "Media Team",
      designation: "Media Team and the OG Volunteers",
      src: ssg6.src,
    },
    {
      quote:
        "This team was truly exceptional; they brought their amazing abilities to every task we were assigned. We consistently worked together, seamlessly collaborating to ensure the smooth execution of every event and, most importantly, the safety and well-being of all students. Their dedication was instrumental in our success.",
      name: "Supreme Student Government Batch 2023-2024",
      designation: "Met these amazing people with different skills",
      src: ssg5.src,
    },
    {
      quote:
        "I was really lucky for being chosen to represent the Supreme Student Government in the PACSA 2023 Student Leadership Summit. I am so grateful for this opportunity to represent my college and the Philippine Association of Campus Student Advisers.",
      name: "The Philippine Association of Campus Student Advisers (PACSA)",
      designation: "I am one of the delegates from Holy Cross of Davao College who attended the event at Baguio City.",
      src: ssg7.src,
    },
    {
      quote:
        "These are the people who stood by me through every challenge, every setback, and now, we stand together in our victories.",
      name: "The Team I Always Count On",
      designation: "My Capstone Buddies",
      src: ssg8.src,
    },
  ];
  return <AnimatedTestimonials testimonials={testimonials} />;
}