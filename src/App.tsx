import Button from "./Button";
import { Text } from "./Text";

const App = () => {
  return (
    <div>
      <Button name="Click" num={1} />
      <Button name="Submit" num={2} />
      <Text as="h1" children="Hello" />
      <Text as="a" href="https://Sahas001.github.io" children="What's Up?" />
      <Text as="h1" color="red">I am Good</Text>
    </div>
  );
};

export default App;
