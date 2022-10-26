import { useRouter } from "next/router";

function PortfolioProjectPage() {
  const router = useRouter(); // to expose the router and its attributes

  console.log(router.pathname);
  console.log(router.query);

  return <div>The PortfolioProjectPage</div>;
}

export default PortfolioProjectPage;
