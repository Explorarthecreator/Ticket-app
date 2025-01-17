import UserForm from "@/components/UserForm";
import prisma from "@/prisma/db";
import React from "react";

interface Props {
  params: { id: string };
}
const page = async ({ params }: Props) => {
  const user = await prisma?.user.findUnique({
    where: { id: parseInt(params.id) },
  });

  if (!user) {
    return <p className="text-destructive">User not found</p>;
  }

  user.password = "";
  return <UserForm user={user} />;
};

export default page;
