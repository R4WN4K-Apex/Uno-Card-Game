import Card from "@/components/Card";
import { UnoCard4w, UnoCardWild } from "@/components/Custom/UnoCards";

const page = () => {
  return (
    <div className="flex flex-col bg-zinc-900 justify-center items-center py-36 h-screen">
      {/* <div className="flex items-center">
        <Card value="0" size="md" color="blue" />
        <Card value="1" size="md" color="blue" />
        <Card value="2" size="md" color="blue" />
        <Card value="3" size="md" color="blue" />
        <Card value="4" size="md" color="blue" />
        <Card value="5" size="md" color="blue" />
        <Card value="6" size="md" color="blue" />
        <Card value="7" size="md" color="blue" />
        <Card value="8" size="md" color="blue" />
        <Card value="9" size="md" color="blue" />
        <Card value="skip" size="md" color="blue" />
        <Card value="skip" size="md" color="blue" />
        <Card value="reverse" size="md" color="blue" />
        <Card value="reverse" size="md" color="blue" />
        <Card value="+2" size="md" color="blue" />
        <Card value="+2" size="md" color="blue" />
      </div>
      <div className="flex items-center">
        <Card value="0" size="md" color="blue" />
        <Card value="1" size="md" color="blue" />
        <Card value="2" size="md" color="blue" />
        <Card value="3" size="md" color="blue" />
        <Card value="4" size="md" color="blue" />
        <Card value="5" size="md" color="blue" />
        <Card value="6" size="md" color="blue" />
        <Card value="7" size="md" color="blue" />
        <Card value="8" size="md" color="blue" />
        <Card value="9" size="md" color="blue" />
        <Card value="skip" size="md" color="blue" />
        <Card value="skip" size="md" color="blue" />
        <Card value="reverse" size="md" color="blue" />
        <Card value="reverse" size="md" color="blue" />
        <Card value="+2" size="md" color="blue" />
        <Card value="+2" size="md" color="blue" />
      </div>
      <div className="flex items-center">
        <Card value="0" size="md" color="green" />
        <Card value="1" size="md" color="green" />
        <Card value="2" size="md" color="green" />
        <Card value="3" size="md" color="green" />
        <Card value="4" size="md" color="green" />
        <Card value="5" size="md" color="green" />
        <Card value="6" size="md" color="green" />
        <Card value="7" size="md" color="green" />
        <Card value="8" size="md" color="green" />
        <Card value="9" size="md" color="green" />
        <Card value="skip" size="md" color="green" />
        <Card value="skip" size="md" color="green" />
        <Card value="reverse" size="md" color="green" />
        <Card value="reverse" size="md" color="green" />
        <Card value="+2" size="md" color="green" />
        <Card value="+2" size="md" color="green" />
      </div>
      <div className="flex items-center">
        <Card value="0" size="md" color="green" />
        <Card value="1" size="md" color="green" />
        <Card value="2" size="md" color="green" />
        <Card value="3" size="md" color="green" />
        <Card value="4" size="md" color="green" />
        <Card value="5" size="md" color="green" />
        <Card value="6" size="md" color="green" />
        <Card value="7" size="md" color="green" />
        <Card value="8" size="md" color="green" />
        <Card value="9" size="md" color="green" />
        <Card value="skip" size="md" color="green" />
        <Card value="skip" size="md" color="green" />
        <Card value="reverse" size="md" color="green" />
        <Card value="reverse" size="md" color="green" />
        <Card value="+2" size="md" color="green" />
        <Card value="+2" size="md" color="green" />
      </div>
      <div className="flex items-center">
        <Card value="0" size="md" color="red" />
        <Card value="1" size="md" color="red" />
        <Card value="2" size="md" color="red" />
        <Card value="3" size="md" color="red" />
        <Card value="4" size="md" color="red" />
        <Card value="5" size="md" color="red" />
        <Card value="6" size="md" color="red" />
        <Card value="7" size="md" color="red" />
        <Card value="8" size="md" color="red" />
        <Card value="9" size="md" color="red" />
        <Card value="skip" size="md" color="red" />
        <Card value="skip" size="md" color="red" />
        <Card value="reverse" size="md" color="red" />
        <Card value="reverse" size="md" color="red" />
        <Card value="+2" size="md" color="red" />
        <Card value="+2" size="md" color="red" />
      </div>
      <div className="flex items-center">
        <Card value="0" size="md" color="red" />
        <Card value="1" size="md" color="red" />
        <Card value="2" size="md" color="red" />
        <Card value="3" size="md" color="red" />
        <Card value="4" size="md" color="red" />
        <Card value="5" size="md" color="red" />
        <Card value="6" size="md" color="red" />
        <Card value="7" size="md" color="red" />
        <Card value="8" size="md" color="red" />
        <Card value="9" size="md" color="red" />
        <Card value="skip" size="md" color="red" />
        <Card value="skip" size="md" color="red" />
        <Card value="reverse" size="md" color="red" />
        <Card value="reverse" size="md" color="red" />
        <Card value="+2" size="md" color="red" />
        <Card value="+2" size="md" color="red" />
      </div>
      <div className="flex items-center">
        <Card value="0" size="md" color="yellow" />
        <Card value="1" size="md" color="yellow" />
        <Card value="2" size="md" color="yellow" />
        <Card value="3" size="md" color="yellow" />
        <Card value="4" size="md" color="yellow" />
        <Card value="5" size="md" color="yellow" />
        <Card value="6" size="md" color="yellow" />
        <Card value="7" size="md" color="yellow" />
        <Card value="8" size="md" color="yellow" />
        <Card value="9" size="md" color="yellow" />
        <Card value="skip" size="md" color="yellow" />
        <Card value="skip" size="md" color="yellow" />
        <Card value="reverse" size="md" color="yellow" />
        <Card value="reverse" size="md" color="yellow" />
        <Card value="+2" size="md" color="yellow" />
        <Card value="+2" size="md" color="yellow" />
      </div>
      <div className="flex items-center">
        <Card value="0" size="md" color="yellow" />
        <Card value="1" size="md" color="yellow" />
        <Card value="2" size="md" color="yellow" />
        <Card value="3" size="md" color="yellow" />
        <Card value="4" size="md" color="yellow" />
        <Card value="5" size="md" color="yellow" />
        <Card value="6" size="md" color="yellow" />
        <Card value="7" size="md" color="yellow" />
        <Card value="8" size="md" color="yellow" />
        <Card value="9" size="md" color="yellow" />
        <Card value="skip" size="md" color="yellow" />
        <Card value="skip" size="md" color="yellow" />
        <Card value="reverse" size="md" color="yellow" />
        <Card value="reverse" size="md" color="yellow" />
        <Card value="+2" size="md" color="yellow" />
        <Card value="+2" size="md" color="yellow" />
      </div> */}
      <div className="flex items-center">
        <UnoCard4w size="lg" />
        <UnoCardWild size="lg" />
        <UnoCard4w size="lg" />
        <UnoCardWild size="lg" />
        <UnoCard4w size="lg" />
        <UnoCardWild size="lg" />
        <UnoCard4w size="lg" />
        <UnoCardWild size="lg" />
      </div>
    </div>
  );
};
export default page;
