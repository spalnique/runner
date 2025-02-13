import { useCompetitionById } from "@hooks";

const CompetitionDetails = () => {
  const { competition } = useCompetitionById();

  return (
    <div className="w-[400px] self-stretch bg-amber-500">
      {competition?.name}
    </div>
  );
};
export default CompetitionDetails;
