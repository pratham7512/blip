import React from 'react';
import Image from 'next/image';
import { BiRepost, BiSolidMessageSquareDetail } from 'react-icons/bi';
import { CiHeart } from 'react-icons/ci';
import { RiSendPlaneFill } from 'react-icons/ri';
const FeedCard: React.FC = () => {
    return (
        <div className="border border-gray-600 border-r-0 borde-l-0 p-3 hover:bg-grey transition-all cursor-pointer">
            <div className="grid grid-cols-12 gap-3">
                <div className="col-span-1">
                    <Image className="rounded-full" src='https://avatars.githubusercontent.com/u/115919176?v=4' alt="user-profile" width={50} height={50}/>
                </div>
                <div className="col-span-11">
                    <h5 className='font-bold'>Prathamesh Desai</h5>
                    <p>
                    Hey, you glorious bastards! First time making a blip here. Strap in, we're about to embark on a cosmic rollercoaster ride of curiosity. Hold on to your brain cells, 'cause we're diving deep into the unknown, Morty! Get ready for a mind-bending experience that'll make your head spin faster than a portal gun on full throttle! Wubba lubba dub dub!
                    </p>
                    <div className="flex justify-between mt-5 text-xl items-center p-2 w-[90%]">
                        <div><BiSolidMessageSquareDetail/></div>
                        <div><BiRepost/></div>
                        <div><CiHeart/></div>
                        <div><RiSendPlaneFill/></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FeedCard;
