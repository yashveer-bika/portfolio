import Link from "next/link";
import { FaDiscord, FaTwitter } from "react-icons/fa";
import { SiGmail, SiSpotify, SiUmami } from "react-icons/si";

export default function Page() {
  return (
    <div className="flex flex-col gap-10 p-8 lg:p-16 w-full">
      {/* TODO: sync with status */}
      <Link href="https://twitter.com/YashveerBika" target={"_blank"}>
        <div className="flex gap-2 items-center">
          {<FaTwitter />} @YashveerBika
        </div>
      </Link>{" "}
      {/* <div>Discord (connect to status)</div> */}
      <Link
        href="https://discordapp.com/users/535609789858971687"
        target={"_blank"}
      >
        <div className="flex gap-2 items-center">
          {<FaDiscord />} bika
        </div>
      </Link>{" "}
      {/* <div>Email</div> */}
      <Link href="mailto:yashveerbika@gmail.com" target={"_blank"}>
        <div className="flex gap-2 items-center">
          {<SiGmail />} yashveerbika at gmail.com
        </div>
      </Link>{" "}
      {/* <div>Spotify (connect to currently playing)</div> */}
      <Link href="https://open.spotify.com/user/yashubika000?si=007d845b61be41d2" target={"_blank"}>
        <div className="flex gap-2 items-center">
          {<SiSpotify />} yashubika000
        </div>
      </Link>{" "}

      <Link href="https://analytics.us.umami.is/websites/fb9d3543-fc8c-49ca-8e55-33946627e3c3" target={"_blank"}>
        <div className="flex gap-2 items-center">
          {<SiUmami />} Click here to see where site views come from.
        </div>
      </Link>{" "}
      {/* <div>Use umami analytics on site</div> */}
    </div>
  );
}
