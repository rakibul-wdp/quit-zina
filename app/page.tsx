import {
  FAQ,
  Hero,
  ImportantSpeech,
  Motivation,
  MotivationalVideo,
  ProductsPreview,
} from "@/components/Home";

export default function Home() {
  return (
    <main>
      <Hero />
      <MotivationalVideo />
      <Motivation />
      <ProductsPreview />
      <ImportantSpeech />
      <FAQ />
    </main>
  );
}
