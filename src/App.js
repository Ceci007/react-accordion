import Accordion from "./components/Accordion/Accordion";
import "./App.css";

const accordionData = [
  {
      header: "Can I Give Milk To My Kitten?",
      paragraph: "If you want to buy milk for your kitten it needs to be lactose-free. However, once kittens are eating solids it’s no longer an essential part of the diet."
  },
  {
      header: "Why Do Cats Have Whiskers?",
      paragraph: "Whiskers are a sort of extension of the sense of touch that you’ll find in animals that hunt or move in low light. Whiskers have sensory receptors at their base that register when the whisker touches something."
  },
  {
      header: "Do Kittens Need Microchips?",
      paragraph: "Cats need permanent identification more than any other pet species."
  }
]

function App() {
  return (
    <div class="container">
      {accordionData.map(accordion => {
        return <Accordion header={accordion.header} paragraph={accordion.paragraph} />
      })}
    </div>
  );
}

export default App;