"use client"
import BlogCard from '@/components/BlogCard';
import useGetBlogs from '@/hooks/api/blog/useGetBlogs';
import { appConfig } from '@/utils/config';

export default function Home(){
  const { data: blogs } = useGetBlogs({});

  return (
    <main className="container mx-auto px-4">
      {/* JUMBOTRON */}
      <section className="text-center mt-10">
        <h1 className="text-4xl font-bold">Food Hub</h1>
        <p className="text-xl">A blog about food, experiences, and recipes</p>
      </section>

      {/* CARDS */}
      <section className="grid grid-cols-3">
        {blogs.map((blog, index) => {
          return (
            <BlogCard
              key={index}
              title={blog.title}
              author={blog.user.fullName}
              category={blog.category}
              description={blog.description}
              imageUrl={appConfig.baseUrl + `/assets${blog.thumbnail}`}
              createdAt={new Date(blog.createdAt)}
            />
          );
        })}
      </section>
    </main>
  );
}
