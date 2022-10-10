import React from 'react';
import '../stylesheets/Notification.css';

import angela from '../assets/images/avatar-angela-gray.webp';
import anna from '../assets/images/avatar-anna-kim.webp';
import jacob from '../assets/images/avatar-jacob-thompson.webp';
import kimberly from '../assets/images/avatar-kimberly-smith.webp';
import mark from '../assets/images/avatar-mark-webber.webp';
import nathan from '../assets/images/avatar-nathan-peterson.webp';
import rizky from '../assets/images/avatar-rizky-hasanuddin.webp';
import picture from '../assets/images/image-chess.webp';

const Notification = ({ name, post, specialText, specialTextType, time, alert, message, image }) => {

  let profilePicture;
  if (name === 'Angela Gray') {
    profilePicture = angela; 
  } else if (name === 'Anna Kim') {
    profilePicture = anna;
  } else if (name === 'Jacob Thompson') {
    profilePicture = jacob;
  } else if (name === 'Kimberly Smith') {
    profilePicture = kimberly;
  } else if (name === 'Mark Webber') {
    profilePicture = mark;
  } else if (name === 'Nathan Peterson') {
    profilePicture = nathan;
  } else if (name === 'Rizky Hasanuddin') {
    profilePicture = rizky;
  }

  if (name === undefined) {
    name = '';
  }
  if (specialText === undefined) {
    specialText = '';
  }
  if (post === undefined) {
    post = '';
  }

  return (
    <article className={alert ? 'container bg-alert' : 'container'}>
      
      <div className='container__img'>
        <img className='profile-picture' src={profilePicture} alt='User' />
      </div>

      <div className='information'>

        <div className='information__container'>

          <p className='information__paragraph'>
            <span className='information__name'>{name + ' '}</span>
            {post + ' '} 
            <span className={specialTextType === 'gray' ? 'information__important' : 'information__link'}>{specialText + ' '}</span> 
            <div className={alert ? 'point' : 'hidden'}></div>
          </p>

          <img className={image ? 'image' : 'hidden'} src={picture} />

        </div>

        <small className='time'>{time}</small>

        <div className={message === undefined ? 'hidden' : 'information__message'}>
          <p className='message'>{message}</p>
        </div>

      </div>
    </article>
  );
};

export default Notification;
