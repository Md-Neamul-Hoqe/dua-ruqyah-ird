'use client'
import useCategories from "@/hooks/useCategories";
import CategoryCard from "../categoryCard/CategoryCard";
import Loader from "../loader/Loader";

const Categories = () => {
    const categories = useCategories()

    return (
        <section className="max-w-7xl mx-auto my-10">
            <h3 className="text-3xl mb-5">Categories of dua</h3>
            <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-10">
                {
                    categories?.length ? categories?.map(category => <CategoryCard key={category?.id} category={category} />) : <Loader loaderOpen={!!categories?.length} />
                }
            </div>
        </section>
    );
};

export default Categories;