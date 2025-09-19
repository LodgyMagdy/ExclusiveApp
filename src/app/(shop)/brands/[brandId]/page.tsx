import { Card, CardHeader } from "@/components/ui/card"
import { IBrand } from "@/interfaces/brand.interface"
import { getBrandDetails } from "@/services/brands.service"
import Image from "next/image"

export default async function CategoryDetails({ params: { brandId } }: { params: { brandId: string } }) {
  const { data: brand }: { data: IBrand } = await getBrandDetails(brandId)

  return (
    <> 
      <section className="py-20">
        <Card className="w-full max-w-md shadow-lg mx-auto flex flex-col items-center">
          <Image
            src={brand.image}
            alt={brand.slug}
            width={200}
            height={200}
          />
          <CardHeader className="w-full text-center font-bold text-2xl mt-4">
            <h1>{brand.name}</h1>
          </CardHeader>
        </Card>
      </section>
    </>
  )
}
