import Frase from '../components/frase/Frase'
import ImagenesCarrousel from '../components/imagenesCarrousel/ImagenesCarrousel'
import { Layout } from '../components/layout/Layout'
import SeccionForm from '../components/seccionForm/SeccionForm'

export default function Home() {
  return (
    <Layout>
      <ImagenesCarrousel />
      <Frase />
      <SeccionForm />
    </Layout>
  )
}
