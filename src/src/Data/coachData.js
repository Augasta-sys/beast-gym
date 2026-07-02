import coachImg from "../assets/Images/coachImg.png";

const coachData = [
  {
    id: 1,
    name: "John Snow",
    role: "Body Building Coach",
    age: 29,
    experience: "5Years",
    phone: "+91 9876543210",
    email: "john@Beast.com",
    image: coachImg,

    introduction:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",

    skills: [
      {
        title: "Body Building",
        value: 92,
      },
      {
        title: "Cardio",
        value: 74,
      },
      {
        title: "Weight Training",
        value: 83,
      },
    ],
  },
];

export default coachData;