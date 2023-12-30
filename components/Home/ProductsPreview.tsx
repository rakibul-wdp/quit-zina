import { featureProducts } from "@/public/data";
import { Container } from "@/universal";
import Image from "next/image";

export const ProductsPreview = () => {
  return (
    <Container>
      <div className="mt-24 mb-5 flex flex-col items-center">
        <h1 className="text-3xl font-bold">Our Feature Products</h1>
        <p>
          We also sell religious products, that help a muslim to be more
          religious.
        </p>
      </div>

      <div className="flex items-center justify-between gap-10">
        {featureProducts.map((product) => (
          <div key={product.id}>
            <Image
              src={product.image}
              width={500}
              height={500}
              alt="feature product"
            />
          </div>
        ))}
      </div>
    </Container>
  );
};
