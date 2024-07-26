"use client"

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation'

export default function HomePage() {
  const [referrer, setReferrer] = useState('');
  const [ip, setIp] = useState('');

  const router = useRouter()



  useEffect(() => {
    setReferrer(document.referrer);

 
    fetch('https://api.ipify.org?format=json')
      .then(response => response.json())
      .then(data => setIp(data.ip))
      .catch(error => console.error('Error fetching IP address:', error));
  }, []);



  return (
    <div>
       
      <p>{referrer ? `You came from: ${referrer}` : 'You accessed this page directly.'}</p>
      <p>{ip ? `Your IP address is: ${ip}` : 'Fetching your IP address...'}</p>
    </div>
  );
}
