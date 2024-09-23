import React from "react";
import prisma from "@/prisma/db";

const Tickets = async () => {
  const tickets = await prisma.ticket.findMany();

  return (
    <div>
      {tickets.map((ticket) => (
        <h1 key={ticket.id}>{ticket.title}</h1>
      ))}
    </div>
  );
};

export default Tickets;
