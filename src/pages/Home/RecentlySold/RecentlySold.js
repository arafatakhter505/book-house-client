import React from "react";
import BookCard from "../../../components/BookCard/BookCard";

const RecentlySold = () => {
  return (
    <section className="container mx-auto my-12 lg:px-0 px-6">
      <h3 className="text-2xl font-semibold mb-4">Recently Sold Books</h3>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6">
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
      </div>
    </section>
  );
};

export default RecentlySold;
