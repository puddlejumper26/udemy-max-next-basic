import Link from "next/link";

function ClientsPage() {
  const clients = [
    { id: "max", name: "maximiliam" },
    { id: "min", name: "minimilian" },
  ];
  return (
    <div>
      This is Client Page
      <ul>
        {clients.map((client) => {
          return (
            <li key={client.id}>
              <Link
                href={{
                  pathname: "/clients/[id]",
                  query: { id: client.id },
                }}
              >
                {client.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default ClientsPage;
