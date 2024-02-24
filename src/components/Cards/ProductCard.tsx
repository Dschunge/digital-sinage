import React from "react";

export default function ProductCard() {
  return (
    <div className="container my-24 mx-auto md:px-6">
      <section className="mb-32">
        <img
          src="https://mdbcdn.b-cdn.net/img/new/slides/198.jpg"
          className="mb-6 w-full rounded-lg shadow-lg dark:shadow-black/20"
          alt="image"
        />

        <div className="mb-6 flex items-center">
          <img
            src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img (23).jpg"
            className="mr-2 h-8 rounded-full"
            alt="avatar"
            loading="lazy"
          />
          <div>
            <span>
              {" "}
              Published <u>15.07.2020</u> by{" "}
            </span>
            <a href="#!" className="font-medium">
              Anna Maria Doe
            </a>
          </div>
        </div>

        <h1 className="mb-6 text-3xl font-bold">
          An intriguing title for an interesting article
        </h1>

        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi
          harum tempore cupiditate asperiores provident, itaque, quo ex iusto
          rerum voluptatum delectus corporis quisquam maxime a ipsam nisi quam.
        </p>
      </section>
    </div>
  );
}
