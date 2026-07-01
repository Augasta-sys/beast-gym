import blog1 from "../assets/Images/blog1.png";
import blog2 from "../assets/Images/blog2.png";
import blog3 from "../assets/Images/blog3.png";

function Blog() {
  const blogs = [
    {
      image: blog1,
      title: "Build yourself in hours of exercise everyday for 6 months",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere voluptatibus alias magni hic magnam nostrum itaque facilis doloribus, quas amet.",
    },
    {
      image: blog2,
      title: "Fat burning cardio workout to keep yourself in shape",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere voluptatibus alias magni hic magnam nostrum itaque facilis doloribus, quas amet.",
    },
    {
      image: blog3,
      title: "Crossfit guide for beginners: 10 things you must know",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere voluptatibus alias magni hic magnam nostrum itaque facilis doloribus, quas amet.",
    },
  ];

  return (
    <section id="blog" className="translate-y-90 lg:translate-y-130 lg:translate-x-5 py-24 bg-white text-white">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-red-600 text-4xl font-bold uppercase">
            BLOG
          </h2>
          <p className="text-gray-400 leading-10 uppercase mt-3 tracking-widest">
            READY TO STAY IN SHAPE 
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {blogs.map((blog, index) => (
            <div
              key={index}
              className="group bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-red-600/30 transition-all duration-500 hover:-translate-y-2"
            >

              {/* Image Section */}
              <div className="relative overflow-hidden">

                <img
                  src={blog.image}
                  alt=""
                  className="w-full h-[auto] object-cover transition duration-500 group-hover:scale-110 group-hover:brightness-75"
                />

                {/* 22 NOV TOP RIGHT INSIDE */}
                <div className="absolute top-3 right-3 bg-red-600 text-white text-md px-4 py-3 shadow-md">
                  22 NOV
                </div>

              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="font-bold text-lg group-hover:text-red-500 transition">
                  {blog.title}
                </h3>
                <p className="text-gray-400 mt-3 text-sm">
                  {blog.desc}
                </p>
              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default Blog;