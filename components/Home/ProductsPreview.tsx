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
          <div className="bg-gray-50 rounded-lg" key={product.id}>
            <figure className="w-auto flex items-center justify-center relative overflow-hidden transition-all duration-500 ease-linear">
              <Image
                className="img max-w-[90%] mt-6 h-80 transition-all duration-200 ease-linear"
                src={product.image}
                alt={product.name}
              />
              <figcaption className="absolute top-[15%] right-[10%] bg-white text-primary text-sm uppercase py-1.5 px-8 rounded-full">
                {product.category}
              </figcaption>
            </figure>

            <div className="px-8">
              <div className="my-8 flex items-center justify-between">
                <h3 className="text-lg capitalize">{product.name}</h3>
                <p className="text-primary">{product.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};
