import { IBrand } from "@/interfaces/brand.interface"
import { getBrands } from "@/services/brands.service"
import Image from "next/image"
import Link from "next/link"


export default async function BrandsPage() {
  const { data : brands} : {data: IBrand[]} = await getBrands()

  return (
    <>
     <section className="my-10 py-10">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-3">
          {brands &&
            brands.map((brand) => (
              <div
                key={brand._id}
                className="flex flex-col items-center text-center gap-y-3"
              >
                <div className="w-40 h-40 rounded-lg shadow-lg">
                  <Image
                    src={brand.image}
                    alt={brand.slug}
                    width={150}
                    height={150}
                    className="w-full h-full"
                    
                  />
                </div>
                <Link href={`brands/${brand._id}`} className="text-lg font-bold">{brand.name}</Link>
              </div>
            ))}
        </div>
      </div>
    </section>
    </>
  )
}
