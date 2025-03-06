import { UnoCardBack } from "@/components/Custom/UnoCards";

const CardStack = ({ className }: { className: string }) => {
  return (
    <div className={className}>
      <UnoCardBack value="+2" color="blue" size="md" />
    </div>
  );
};
export default CardStack;
