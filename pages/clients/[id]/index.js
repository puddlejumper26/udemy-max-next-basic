import { useRouter } from "next/router";

function ClientProjectsPage() {
  const router = useRouter();
  function loadProjectHandler() {
    //... load data
    router.push("/clients/max/projecta"); // to navigate to a new page
  }
  return (
    <div>
      The Projects of a client
      <button onClick={loadProjectHandler}>Load Project A</button>
    </div>
  );
}
export default ClientProjectsPage;
