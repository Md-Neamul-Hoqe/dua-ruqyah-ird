'use client'
import audioIcon from '@/public/audio.svg';
import Image from 'next/image';
import { useState } from 'react';
import ReactAudioPlayer from 'react-audio-player';


const AudioPlay = ({ audioLink }) => {
    const [ play, setPlay ] = useState(false)

    console.log(audioLink);
    return (
        <div onClick={() => setPlay(!play)}>
            <Image width={30} height={30} src={audioIcon} alt={audioIcon} />
            {play && <ReactAudioPlayer src={audioLink} autoPlay />}
        </div>
    );
};

export default AudioPlay;