import { Box, Grid } from "@mui/material";
import CategoryList from "@/components/categoryList/CategoryList";

export async function generateStaticParams() {
    const res = await fetch('http://localhost:5000/api/v1/categories')
    const duasCategories = await res.json();
    const slugs = duasCategories.map(category => { return { slug: category?.cat_name_en.replace(' ', '-') } })

    console.log(slugs);
    return slugs
}

const CategoriesLayout = ({ children }) => {
    return (
        <Box>
            <Grid container spacing={2}>
                <Grid item xs={3}>
                    <CategoryList />
                </Grid>
                <Grid item xs={9}>
                    {children}
                </Grid>
            </Grid>
        </Box>
    )
};

export default CategoriesLayout;