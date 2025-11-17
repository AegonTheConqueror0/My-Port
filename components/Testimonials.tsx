import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
const ssg3 = "/images/ssg3.jpg";
const ssg1 = "/images/ssg1.jpg";
const ssg6 = "/images/ssg6.jpg";
const ssg5 = "/images/ssg5.jpg";
const ssg7 = "/images/ssg7.jpg";
const ssg8 = "/images/ssg8.jpg";

export function AnimatedTestimonialsDemo() {
  const testimonials = [
    {
      quote:
        "I found my passion for photography in high school, and watching too many Peter McKinnon videos inspired me to create short films, portraits, and landscapes.",
      name: "Found My Passion in Photography",
      designation: "The beginning of my journey",
        src: ssg3,
    },
    {
      quote:
        "My involvement in the Supreme Student Government began in 2022 with the Technical Committee. In 2023, I was invited to join the Media Team by a friend who was the running president at the time and went on to serve two terms. I served on the Media Team for two years, until 2024.",
      name: "My Journey as a Student Leader",
      designation: "Supreme Student Government of the Holy Cross of Davao College",
        src: ssg1,
    },
    {
      quote:
        "During events, this was the team I could always count on. We were constantly racing against the clock, whether it was to catch a photo-op or fulfill a request for a picture. We also worked under pressure to deliver same-day video edits, a task my team and I took on together. ",
      name: "Media Team",
      designation: "Media Team and the OG Volunteers",
        src: ssg6,
    },
    {
      quote:
        "This team was truly exceptional; they brought their amazing abilities to every task we were assigned. We consistently worked together, seamlessly collaborating to ensure the smooth execution of every event and, most importantly, the safety and well-being of all students. Their dedication was instrumental in our success.",
      name: "Supreme Student Government Batch 2023-2024",
      designation: "Met these amazing people with different skills",
        src: ssg5,
    },
    {
      quote:
        "I was really lucky for being chosen to represent the Supreme Student Government in the PACSA 2023 Student Leadership Summit. I am so grateful for this opportunity to represent my college and the Philippine Association of Campus Student Advisers.",
      name: "The Philippine Association of Campus Student Advisers (PACSA)",
      designation: "I am one of the delegates from Holy Cross of Davao College who attended the event at Baguio City.",
        src: ssg7,
    },
    {
      quote:
        "These are the people who stood by me through every challenge, every setback, and now, we stand together in our victories.",
      name: "The Team I Always Count On",
      designation: "My Capstone Buddies",
        src: ssg8,
    },
  ];
  return <AnimatedTestimonials testimonials={testimonials} />;
}