import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
    return (
        <div className='cards'>
            <h1>Check out the amazing tech blogs!</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItem
                            src='images/img-10.png'
                            text='In a week'
                            label='coming soon'
                            path='/blogs'
                        />
                        <CardItem
                            src='images/img-10.png'
                            text='In a week'
                            label='coming soon'
                            path='/blogs'
                        />
                    </ul>
                    <ul className='cards__items'>
                        <CardItem
                            src='images/img-10.png'
                            text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
                            label='Mystery'
                            path='/blogs'
                        />
                        <CardItem
                            src='images/img-10.png'
                            text='Experience Football on Top of the Himilayan Mountains'
                            label='Adventure'
                            path='/blogs'
                        />
                        <CardItem
                            src='images/img-10.png'
                            text='Ride through the Sahara Desert on a guided camel tour'
                            label='Adrenaline'
                            path='/blogs'
                        />
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Cards;