// SSR - Server-Side Rendering
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Label } from "@/components/ui/label";

const weatherAPIUrl =
  "https://api.open-meteo.com/v1/forecast?latitude=52.1326&longitude=5.2913&current=temperature_2m,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m";

type APIResponse = {
  current_units: {
    temperature_2m: "°C" | "°F";
  };
  current: {
    temperature_2m: number;
  };
};

export async function getServerSideProps() {
  const res = await fetch(weatherAPIUrl);
  const data: APIResponse = await res.json();

  return { props: { data } };
}

type Props = {
  data: APIResponse;
};
export default function Weather({ data }: Props) {
  return (
    <div className="grid place-items-center min-h-screen">
      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Weather</CardTitle>
          <CardDescription>SSR - Server Side Rendering</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label>Location</Label>
              <p>Netherland</p>
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label>Current Temperature</Label>
              <p>
                {data.current.temperature_2m}{" "}
                {data.current_units.temperature_2m}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
