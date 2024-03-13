
import { Box, Card, CardActionArea, CardContent, Divider, Typography } from '@mui/material';
import Image from 'next/image';

/* Import images */
import duar_gurutto from '/public/duar_gurutto.svg';
import dua_kobuler_somoy from '/public/dua_kobuler_somoy.svg';
import sokal_sondha from '/public/sokal_sondha.svg';
import jader_dua_kobul_hoy from '/public/jader_dua_kobul_hoy.svg';
import toilet from '/public/toilet.svg';
import zikirer_fozilot from '/public/zikirer_fozilot.svg';
import bari from '/public/bari.svg';
import poshak from '/public/poshak.svg';
import ghum from '/public/ghum.svg';
import azan_ikamot from '/public/azan_ikamat.svg';

const images = {
    duar_gurutto,
    dua_kobuler_somoy,
    sokal_sondha,
    jader_dua_kobul_hoy,
    toilet,
    zikirer_fozilot,
    bari,
    poshak,
    ghum,
    azan_ikamot
}

{/* Home page category cards */ }
const CategoryCard = ({ category }) => {
    const { id, cat_name_en, no_of_subcat, no_of_dua, cat_icon } = category;

    return (
        <Card sx={{ display: 'flex' }}>
            <CardActionArea href={`/duas/${cat_name_en.replace(' ', '-')}?cat=${id}`} sx={{ display: 'flex', p: 3 }}>
                <CardContent sx={{ display: 'flex', flex: '1 0 auto', gap: 2 }}>
                    <Image height={60} width={60} src={images[ cat_icon ]} alt={cat_icon} />
                    <Box sx={{ flex: 1 }}>
                        <Typography component="div" variant="h5">
                            {cat_name_en}
                        </Typography>
                        <Typography variant="subtitle1" color="text.secondary" component="div">
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