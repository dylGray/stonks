import { prisma } from "../lib/prisma";

export default async function Page() {
  const user = await prisma.user.findMany();

  return (
    <p>
      {user[0].first_name}
    </p>
  ); 
}