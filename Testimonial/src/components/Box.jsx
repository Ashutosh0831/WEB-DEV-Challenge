import Testimonial from "./Testimonial";

const Box = () => {
  const reviews = [
    {
      img: "https://randomuser.me/api/portraits/women/1.jpg",
      name: "Aisha Khan",
      review:
        "Amazing service! The experience was smooth and I would definitely recommend it to others.",
    },
    {
      img: "https://randomuser.me/api/portraits/men/2.jpg",
      name: "Rahul Sharma",
      review:
        "Really impressed with the quality and support. Everything worked exactly as expected.",
    },
    {
      img: "https://randomuser.me/api/portraits/women/3.jpg",
      name: "Emily Johnson",
      review:
        "Great platform! The interface is easy to use and the features are very helpful.",
    },
    {
      img: "https://randomuser.me/api/portraits/men/4.jpg",
      name: "Arjun Patel",
      review: "Good experience overall. Fast performance and very reliable.",
    },
    {
      img: "https://randomuser.me/api/portraits/women/5.jpg",
      name: "Sophia Martinez",
      review:
        "I loved using this! It saved me a lot of time and the results were fantastic.",
    },
  ];

  return (
    <>
      {reviews.map((props, idx) => (
        <Testimonial key={idx} {...props} />
      ))}
    </>
  );
};

export default Box;
