import { useRouter } from "next/router";

function BlogPostsPage() {
  const router = useRouter();
  console.log(router.query);
  return <div>The blog posts page</div>;
}
export default BlogPostsPage;
