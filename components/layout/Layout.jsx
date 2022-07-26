import Head from 'next/head'
import React from 'react'
import Header from '../header/Header'

export const Layout = (({children}) => {
  return (
    <>
        <Head>
            <title>Instituto hyde english</title>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="author" content="Matias centorbi" />
            <meta name="title" content="Instituto hyde english" />
            <meta name='description' content="Hyde english cuenta con mas de 5 años de experiencia en la materia. Cursos, clases particulares, preparacion a examenes oficiales" />
            <meta property="og:title" content="Instituto hyde englishs" />
            <meta property="og:description" content="Instituto hyde english con mas de 5 años de experiencia en la materia. Cursos, clases particulares, preparacion a examenes oficiales" />
        </Head>
        <Header />
        <main>
            {children}
        </main>
    </>
  )
})