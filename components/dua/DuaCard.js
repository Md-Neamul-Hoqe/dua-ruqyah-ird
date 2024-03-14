import { Avatar, Box, Card, CardContent, CardHeader, Typography } from '@mui/material';

import Image from 'next/image';

import lafsAlloh from '@/public/lafsAlloh.svg'
import copy from '@/public/copy.svg'
import tips from '@/public/tips.svg'
import share from '@/public/share.svg'
import bookmark from '@/public/bookmark.svg'
import AudioPlay from "@/components/audio/AudioPlay";



const DuaCard = ({ dua }) => {

    return (
        <Card>
            <CardHeader
                avatar={
                    <Avatar sx={{ bgcolor: 'white' }} aria-label="alloh">
                        <Image width={30} height={30} src={lafsAlloh} alt="Alloh" />
                    </Avatar>
                }
                title={`${dua.dua_id}. ${dua.dua_name_en}`}
            />
            <CardContent className="flex flex-col gap-4">
                <Typography variant="body2" color="text.primary">
                    {dua?.top_bn}
                </Typography>
                <Typography variant="body2" color="text.primary">
                    {dua?.dua_arabic && dua?.dua_arabic}
                </Typography>
                <Typography variant="body2" color="text.primary" sx={{ fontStyle: 'italic' }}>
                    transliteration: {dua?.transliteration_bn && dua?.transliteration_bn}
                </Typography>
                <Typography variant="body2" color="text.primary">
                    translation: {dua?.translation_bn && dua?.translation_bn}
                </Typography>
                <Typography variant="body2" color="text.primary">
                    {dua?.bottom_bn && dua?.bottom_bn}
                </Typography>

                <Box>
                    <p className="text-green-600">Reference: </p>
                    <Typography variant="body2" color="text.primary" sx={{ fontStyle: 'italic' }}>
                        {dua?.refference_bn}
                    </Typography>
                </Box>
            </CardContent>
            <Box className="flex justify-between p-4">
                <AudioPlay audioLink={dua?.audio} />

                <Box className="flex gap-5">
                    <Image src={copy} alt={copy} width={20} height={20} />
                    <Image src={bookmark} alt={bookmark} width={20} height={20} />
                    <Image src={tips} alt={tips} width={20} height={20} />
                    <Image src={share} alt={share} width={20} height={20} />
                </Box>
            </Box>
        </Card>
    );
};

export default DuaCard;