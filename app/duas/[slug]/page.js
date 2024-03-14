import { getBaseURL } from "@/utils/getBaseURL";

import DuaCard from "@/components/dua/DuaCard";

export async function generateStaticParams() {
    const categories = await fetch(`${getBaseURL}/categories`).then(res => res.json()).catch(error => console.error(error))

    const slugs = categories?.map(category => { return { slug: category?.cat_name_en.replace(' ', '-'), cat: category?.cat_id } })

    return slugs
}
console.log(getBaseURL);

export default async function DuasPage({ params, searchParams }) {
    console.log(params, searchParams);

    const res = await fetch(searchParams?.subcat ? `https://dua-ruqyah-ird-orpin.vercel.app/dua/${params?.slug}?cat=${searchParams?.cat}&subcat=${searchParams?.subcat}` : `https://dua-ruqyah-ird-orpin.vercel.app/dua/${params?.slug}?cat=${searchParams?.cat}`)
    const dua = await res.json()


    return (
        <div className="flex flex-col gap-5">
            {dua?.length && dua?.map(dua => (
                <DuaCard key={dua.id} dua={dua} />
            ))}
        </div>
    );
};
