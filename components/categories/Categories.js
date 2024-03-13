'use client'
import useCategories from "@/hooks/useCategories";
import CategoryCard from "../categoryCard/CategoryCard";

const Categories = () => {
    const categories = useCategories()

    return (
        <section className="max-w-7xl mx-auto">
            <h3 className="text-3xl mb-5">Categories of dua</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {
                    categories?.length ? categories?.map(category => <CategoryCard key={category?.id} category={category} />) : 'Loading...'
                }
            </div>
        </section>
    );
};

export default Categories;