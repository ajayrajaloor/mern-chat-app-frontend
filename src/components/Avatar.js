import React from 'react';
import { PiUserCircle } from 'react-icons/pi';
import { useSelector } from 'react-redux';

const Avatar = ({ userId, name, imageUrl, width, height }) => {
  const onlineUser = useSelector((state) => state?.user?.onlineUser);

  let avatarName = '';

  if (name) {
    const splitName = name?.split(' ');

    if (splitName.length > 1) {
      avatarName = splitName[0][0] + splitName[1][0];
    } else {
      avatarName = splitName[0][0];
    }
  }

  const bgColor = [
    'bg-slate-200',
    'bg-teal-200',
    'bg-red-200',
    'bg-green-200',
    'bg-yellow-200',
    'bg-gray-200',
    'bg-cyan-200',
    'bg-sky-300',
    'bg-blue-200',
  ];

  const randomNumber = Math.floor(Math.random() * 9);

  const isOnline = onlineUser.includes(userId);

  return (
    <div
      className="relative flex items-center justify-center"
      style={{ width: width + 'px', height: height + 'px' }}
    >
      {/* Avatar Image */}
      <div
        className={`rounded-full overflow-hidden`}
        style={{ width: width + 'px', height: height + 'px' }}
      >
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={name}
            className="w-full h-full object-cover"
          />
        ) : name ? (
          <div
            className={`flex items-center justify-center text-lg font-bold ${bgColor[randomNumber]}`}
            style={{ width: '100%', height: '100%' }}
          >
            {avatarName}
          </div>
        ) : (
          <PiUserCircle size={width} />
        )}
      </div>

      {/* Online Indicator */}
      {isOnline && (
        <div
          className="absolute bg-green-700 border-2 border-white rounded-full"
          style={{
            width: '11px',
            height: '11px',
            bottom: '2px',
            right: '2px',
          }}
        ></div>
      )}
    </div>
  );
};

export default Avatar;
