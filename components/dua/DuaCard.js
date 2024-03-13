import { Box, Card, CardActionArea, CardContent, Divider, Typography } from '@mui/material';
import React from 'react';

const DuaCard = ({ dua }) => {
    const { dua_name_bn, top_bn, audio, refference_bn, translation_bn, transliteration_bn, dua_arabic } = dua
    console.log(dua);

    return (
        <Card className='p-4'>
            <CardContent className='mb-5'>
                <Box sx={{ mb: 2 }}>
                    <Typography component="div" variant="h5">
                        {dua_name_bn}
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary" component="div">

                    </Typography>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                    <Typography>{top_bn}</Typography>
                    <Typography>Arabic: {dua_arabic}</Typography>
                    <Typography>Transliteration: {transliteration_bn}</Typography>
                    <Typography>Translation: {translation_bn}</Typography>
                    <Typography>Reference: {refference_bn}</Typography>
                </Box>
            </CardContent>
            <CardActionArea sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <audio color='blue' src={audio} controls />
            </CardActionArea>
        </Card>
    );
};

export default DuaCard;