import React from 'react'

const Mapa = () => {
  return (
    <div style={{width:"100%", height:"300px", display:"flex", justifyContent:"center", alignItems:"center"}}>
      <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1908.7381614984752!2d-58.53758382813989!3d-34.695236721017544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2sar!4v1659397702049!5m2!1ses-419!2sar" width="100%" height="300"  allowFullScreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
  )
}

export default Mapa