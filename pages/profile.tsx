import React from 'react';
import Image from 'next/image';

export const Profile = () => {
  return (
    <div className="container mx-auto text-gray-800 font-sans tracking-wider">
      <Image src="/assets/profile/me0.jpg" className='rounded-full border border-gray-100 shadow-sm' alt="Sota Lab Profile" width={200} height={200} />
      <div className='mt-4'>
        Sota Masuda
      </div>
      <br />
      Likes: Coffee, Programming, Reading, Music, etc.
      <br />
      <ul>
        <li>GitHub: <a className='underline' href="https://github.com/sota0121">@sota0121</a></li>
        <li>Twitter: <a className='underline' href="https://twitter.com/__masso__">@masso</a></li>
        <li>Qiita: <a className='underline' href="https://qiita.com/masso">@masso</a></li>
        <li>Zenn: <a className='underline' href="https://zenn.dev/masso">@masso</a></li>
      </ul>
    </div>
  )
};

export default Profile;