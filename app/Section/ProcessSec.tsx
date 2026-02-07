import Process from "../Components/Process";
import { processSteps } from "../data";



export default function ProcessSec() {
  return (
    <section>
      <Process services={processSteps} />
    </section>
  );
}
