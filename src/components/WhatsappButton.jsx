import React from 'react'

const WhatsappButton = () => {
  return (
    <a
      href="https://wa.me/+573245110672" // Reemplaza con tu número de WhatsApp
      className="fixed bottom-4 left-4 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-900 transition-all duration-300 z-50 px-2 py-1.5 "
      target="_blank"
      rel="noopener noreferrer"
    ><div className='flex justify-center items-center font-sans'>
      <i className="bi bi-whatsapp text-4xl"></i >+57 3245110672
      </div>
    </a>
  )
}

export default WhatsappButton