import prisma from "./lib/prisma";

interface User {
  id: number;
  first_name: string;
  last_name: string;
}

export default async function Page() {
  const user = await prisma.user.findMany();

  return (
    <p>
      {user[0].first_name}
    </p>
  );
}