import prisma from "@repo/db/client";
import { getServerSession } from "next-auth";
import { authOptions } from "../../lib/auth";
import ProfilePageClient from "components/ProfilePageClient";

export const dynamic = "force-dynamic";

export default async function ProfilePage() {
  const session = await getServerSession(authOptions);
  const userId = session?.user?.id ? Number(session.user.id) : null;

  const userData = userId
    ? await prisma.user.findUnique({
        where: { id: userId },
        select: {
          name: true,
          email: true,
          number: true,
          profileImage: true
        }
      })
    : null;

  return (
    <ProfilePageClient
      initialUserData={userData}
      sessionUserName={session?.user?.name}
      sessionUserEmail={session?.user?.email}
      sessionUserId={session?.user?.id ? String(session.user.id) : ""}
    />
  );
}
