import { getSinglesIdea } from "@/lib/data";
import EditIdeaPage from "@/components/EditIdeaPage";

const EditPage = async ({ params }) => {
  const { id } = await params;
  const idea = await getSinglesIdea(id);
  return <EditIdeaPage idea={idea} />;
};

export default EditPage;