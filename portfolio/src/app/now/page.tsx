export default function Page() {
  return (
    <div className="flex flex-col gap-10 p-8 lg:p-16 w-full">
      {/* TODO */}

      <div className="flex w-full text-3xl">/now</div>

      <ul className="flex flex-col gap-2">
        <li>Get 50 Minneapolis shops onboarded to TireBob</li>
        <li>Making pretty stuff with React</li>
        <li>
          Playing with{" "}
          <a href="https://reasonml.github.io/" target={"_blank"}>
            Reason
          </a>{" "}
          and{" "}
          <a
            href="https://github.com/dmmulroy/create-melange-app"
            target={"_blank"}
          >
            create-melange-app
          </a>
        </li>
        <li>Getting leaner</li>
      </ul>

      <div className="flex w-full text-3xl">/recently</div>

      <ul className="flex flex-col gap-2">
        <li>
          Built v0 of{" "}
          <a href="https://tirebob.com/" target={"_blank"}>
            tirebob.com
          </a>
        </li>
        <li>Started rucking</li>
      </ul>

      <div className="flex w-full text-3xl">/soon</div>

      <ul className="flex flex-col gap-2">
        <li>Get customers onto TireBob</li>
        <li>Gain some muscle</li>
        <li>Going to India for a few weeks</li>
      </ul>

      <div className="border-b w-full" />

      <div>
        Thanks to{" "}
        <a href="https://jnem.me/" target={"_blank"}>
          Jack Nemitz
        </a>{" "}
        (and{" "}
        <a href="https://sive.rs/" target={"_blank"}>
          Derek Sivers
        </a>
        ) for the idea
      </div>
    </div>
  );
}
