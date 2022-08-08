import React from 'react'
import nosotrosModule from "./nosotros.module.css"
import Link from 'next/link' 
import Image from 'next/image'

const Nosotros = () => {
  return (
    <section>
        <div className={nosotrosModule.divNosotros}>
            <h1 className={nosotrosModule.h1}>Quienes somos</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa ab repellendus quis tenetur in nesciunt aliquid ut voluptatem distinctio consequatur animi quibusdam, eos provident assumenda nostrum. Placeat delectus commodi aliquam maxime. Tempora, amet vitae! Ab maxime id suscipit adipisci nobis voluptate placeat quod. Reiciendis officia nemo vitae esse ad at?.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At ullam nihil et autem minus quidem quasi. Nihil earum blanditiis sapiente eligendi officia consectetur? Amet, officia dolorem. Magni perferendis at molestiae dolores quae officia fuga repudiandae exercitationem, sunt quisquam quos voluptas aspernatur dolorem. Labore cupiditate nihil iste quidem eveniet repudiandae perferendis?</p> 
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A delectus cum explicabo ducimus deserunt non voluptates itaque odio commodi nobis, voluptatum adipisci rem aliquam officiis exercitationem sint quas nisi labore.</p>
        </div>
        <div>
        <div className={nosotrosModule.divFotos}>
            <Image src="/carrousel/th.jfif" className={nosotrosModule.imagen} alt="imagenes del instituto" width={320} height={300}    />
            <Image src="/carrousel/th1.jfif" className={nosotrosModule.imagen} alt="imagenes del instituto" width={320} height={300}   />
            <Image src="/carrousel/th2.jfif" className={nosotrosModule.imagen} alt="imagenes del instituto" width={320} height={300}   />
            <Image src="/carrousel/tima.jpg" className={nosotrosModule.imagen} alt="imagenes del instituto" width={320} height={300}   />
        </div>
        </div>
        <div className={nosotrosModule.divMasInfo}>
            <Link href="/contacto">
                <a className={nosotrosModule.masInfo}>Más informacion</a>
            </Link>
        </div>
    </section>
  )
}

export default Nosotros