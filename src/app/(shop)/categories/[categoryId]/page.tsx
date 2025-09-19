import { Card, CardHeader } from "@/components/ui/card"
import { ICategory } from "@/interfaces/category.interface"
import { getCategoryDetails } from "@/services/categories.service"
import Image from "next/image"

export default async function CategoryDetails({ params: { categoryId } }: { params: { categoryId: string } }) {
  const { data: category }: { data: ICategory } = await getCategoryDetails(categoryId)

  return (
    <> 
      <section className="py-20">
        <Card className="w-full max-w-md shadow-lg mx-auto flex flex-col items-center">
          <Image
            src={category.image}
            alt={category.slug}
            width={200}
            height={200}
          />
          <CardHeader className="w-full text-center font-bold text-2xl mt-4">
            <h1>{category.name}</h1>
          </CardHeader>
        </Card>
      </section>
    </>
  )
}
