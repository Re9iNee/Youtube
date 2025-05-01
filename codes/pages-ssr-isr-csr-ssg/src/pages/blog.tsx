// SSG - Static Site Generation

export async function getStaticProps() {
  // Simulate fetching from CMS/local MDX
  const blog = {
    title: "My Static Blog",
    content: "This is statically generated content.",
  };

  return { props: { blog } };
}

export default function BlogPost({ blog }: any) {
  return (
    <div>
      <h1>{blog.title}</h1>
      <p>{blog.content}</p>
    </div>
  );
}
