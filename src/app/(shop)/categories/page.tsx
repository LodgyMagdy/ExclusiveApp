import { ICategory } from "@/interfaces/category.interface"
import { getCategories } from "@/services/categories.service"
import Image from "next/image"
import Link from "next/link"

export default async function CategoriesPage() {

  const { data : categories} : {data: ICategory[]} = await getCategories()

  return (
    <>
     <section className="my-10 py-10">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {categories &&
            categories.map((category) => (
              <div
                key={category._id}
                className="flex flex-col items-center text-center gap-y-3"
              >
                <div className="w-55 h-55 overflow-hidden rounded-full shadow-lg">
                  <Image
                    src={category.image}
                    alt={category.slug}
                    width={150}
                    height={150}
                    className="object-cover w-full h-full"
                  />
                </div>
                <Link href={`categories/${category._id}`} className="mt-4 text-lg font-bold">{category.name}</Link>
              </div>
            ))}
        </div>
      </div>
    </section>
    </>
  )
}
