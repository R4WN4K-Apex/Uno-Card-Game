import Card from "./Card";

const PlayerCards = () => {
  return (
    <div className="grid grid-cols-3 grid-rows-9 gap-2">
      <Card color="blue" size="100%" value="+2" />
      <Card color="yellow" size="100%" value="reverse" />
      <Card color="blue" size="100%" value="3" />
      <Card color="red" size="100%" value="6" />
      <Card color="blue" size="100%" value="8" />
      <Card color="blue" size="100%" value="5" />
      <Card color="red" size="100%" value="5" />
      <Card color="red" size="100%" value="+2" />
      <Card color="red" size="100%" value="3" />
      <Card color="blue" size="100%" value="reverse" />
      <Card color="yellow" size="100%" value="skip" />
      <Card color="blue" size="100%" value="skip" />
      <Card color="blue" size="100%" value="9" />
      <Card color="green" size="100%" value="8" />
      <Card color="green" size="100%" value="7" />
      <Card color="green" size="100%" value="5" />
      <Card color="blue" size="100%" value="3" />
      <Card color="red" size="100%" value="4" />
      <Card color="blue" size="100%" value="4" />
      <Card color="blue" size="100%" value="3" />
      <Card color="yellow" size="100%" value="5" />
      <Card color="yellow" size="100%" value="+2" />
      <Card color="green" size="100%" value="reverse" />
      <Card color="blue" size="100%" value="skip" />
      <Card color="red" size="100%" value="skip" />
    </div>
  );
};
export default PlayerCards;
