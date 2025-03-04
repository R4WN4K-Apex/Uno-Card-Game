import { UnoCardBack } from "@/components/Custom/UnoCards";

const CardStack = ({ className }: { className: string }) => {
  return (
    <div className={className}>
      <UnoCardBack color="" size="md" />
    </div>
  );
};
export default CardStack;
