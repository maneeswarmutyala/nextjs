import React, { useEffect, useState } from 'react'

function index() {

    const getWeatherInfo = async (lat, long) => {
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'b461d365d2msh28d7821371b9282p1461c9jsn6e1ade0df168',
                'X-RapidAPI-Host': 'weatherbit-v1-mashape.p.rapidapi.com'
            }
        };
        const data = await fetch(`https://weatherbit-v1-mashape.p.rapidapi.com/forecast/3hourly?lat=${lat}&lon=${long}`, options);
        const response = await data.json();
    }
    const handleLocationPermission = () => {
        let geoSettings = {
            enableHighAccuracy: false,
            maximumAge: 30000,
            timeout: 20000
        };
        const positionDenied = () => {
            console.log('positionDenied');
        }
        const revealPosition = (position) => {
            // getWeatherInfo(position?.coords?.latitude, position?.coords?.longitude)
        }
        navigator.permissions.query({ name: 'geolocation' }).then((result) => {
            if (result.state === 'granted') {
                navigator.geolocation.getCurrentPosition(revealPosition, positionDenied, geoSettings);
            } else if (result.state === 'prompt') {
                navigator.geolocation.getCurrentPosition(revealPosition, positionDenied, geoSettings);
            } else if (result.state === 'denied') {
                console.error('denied');
            }
        });
    }
    useEffect(() => {
        handleLocationPermission();
    }, [])

    return (
        <div className="container">

        </div>
    )
}

export default index;