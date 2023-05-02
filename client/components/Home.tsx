import React from 'react'
export default function Home() {
  function handleDownLoad() {
    fetch('/files/JOON-YOUNG-JEONG-CV.pdf')
      .then((res) => {
        res
          .blob()
          .then((blob) => {
            const fileURL = window.URL.createObjectURL(blob)
            const alink = document.createElement('a')
            alink.href = fileURL
            alink.download = 'Joon-CV.pdf'
            alink.click()
          })
          .catch((error) => {
            console.log(error)
          })
      })
      .catch((error) => {
        console.log(error)
      })
  }
  return (
    <section id="homeSection">
      <h1>Joon Young Jeong</h1>
      <h2>Full Stack Software Developer</h2>
      <p>Hi I am Joon!</p>
      <button onClick={handleDownLoad}>DOWNLOAD CV</button>
    </section>
  )
}
