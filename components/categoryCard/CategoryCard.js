
'use client'
import { Box, Card, CardActionArea, CardContent, Divider, Typography } from '@mui/material';
import Image from 'next/image';
import { images } from '../ExportedImages/ExportedImages';
import { useContext, useEffect } from 'react';
import { AuthContext } from '@/providers/AuthProvider';

/* Import images */


{/* Home page category cards */ }
const CategoryCard = ({ category }) => {
    const { setCat } = useContext(AuthContext)
    const { id, cat_id, cat_name_en, no_of_subcat, no_of_dua, cat_icon } = category;

    useEffect(() => {
        setCat(cat_id)
    }, [ setCat, cat_id ])

    console.log(cat_id);

    return (
        <Card sx={{ display: 'flex', borderRadius: 2 }}>
            <CardActionArea href={`/duas/${cat_name_en.replace(' ', '-')}?cat=${cat_id}`} sx={{ display: 'flex', p: 1 }}>
                <CardContent sx={{ display: 'flex', flex: '1 0 auto', gap: 2 }}>
                    <Image height={60} width={60} src={images[ cat_icon ]} alt={cat_icon} />
                    <Box sx={{ flex: 1 }}>
                        <Typography component="div" variant="h3" sx={{ fontSize: { xs: '1rem', md: '1.2rem' } }}>
                            {cat_name_en}
                        </Typography>
                        <Typography variant="subtitle1" color="text.secondary" component="div" sx={{ fontSize: { xs: '0.8rem', md: '1rem' } }}>
                            Subcategory: {no_of_subcat}
                        </Typography>
                    </Box>
                </CardContent>
                <Divider orientation="vertical" flexItem />
                <Box sx={{ display: 'flex', width: 100, flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                    <h3 className='text-2xl font-bold'>{no_of_dua}</h3>
                    <p>Duas</p>
                </Box>
            </CardActionArea>
        </Card>
    );
};

export default CategoryCard;