import { Box, Grid } from "@mui/material";
import CategoryList from "@/components/categoryList/CategoryList";

export const metadata = {
    title: {
        default: 'Dua Page'
    }
}

/* Dua page layout */
const DuaLayout = ({ children }) => {
    return (
        <Box>
            <Grid container spacing={2}>
                <Grid item sx={{ display: { xs: 'none', md: 'block' } }} xs={0} md={3}>
                    <CategoryList />
                </Grid>
                <Grid item xs={12} md={9}>
                    {children}
                </Grid>
            </Grid>
        </Box>
    )
};

export default DuaLayout;