import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Monitor, Paintbrush, Rocket } from "lucide-react";

const features = [
  {
    icon: Monitor,
    title: "Responsive Design",
    description: "Deine Website sieht auf allen Geräten perfekt aus",
  },
  {
    icon: Paintbrush,
    title: "Individuelles Design",
    description: "Passe das Design genau an deine Bedürfnisse an",
  },
  {
    icon: Rocket,
    title: "Schnelle Performance",
    description: "Optimierte Ladezeiten für beste Nutzererfahrung",
  },
];

export const FeatureCarousel = () => {
  return (
    <Carousel className="w-full max-w-4xl mx-auto">
      <CarouselContent>
        {features.map((feature, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
            <Card className="border-none shadow-lg">
              <CardContent className="flex flex-col items-center p-6">
                <feature.icon className="w-12 h-12 mb-4 text-primary" />
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-center text-muted-foreground">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};