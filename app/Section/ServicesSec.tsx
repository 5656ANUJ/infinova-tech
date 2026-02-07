import Services from "../Components/Services";
import { servicesArray } from "../data";

export default function ServicesSec() {
  return (
    <section>
      <Services services={servicesArray} />
    </section>
  );
}
