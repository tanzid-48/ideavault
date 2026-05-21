import { getSinglesIdea } from "@/lib/data";
import EditIdeaPage from "@/components/EditIdeaPage";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

const EditPage = async ({ params }) => {
  const { id } = await params;

  const tokenData = await auth.api.getToken({
    headers: await headers(),
  });

  const token = typeof tokenData === "string" ? tokenData : tokenData?.token;
  const idea = await getSinglesIdea(id, token);

  return <EditIdeaPage idea={idea} />;
};

export default EditPage;
