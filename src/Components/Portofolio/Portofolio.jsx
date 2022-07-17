import {React,useState} from 'react'
import portoStyle from './portofolioStyle.module.css'




export default function Portofolio() {
  const [display, setdisplay] = useState("none")
  const [image, setimage] = useState("")

  function openLayer(setImage) {
    setimage(setImage)
    setdisplay("flex") 
  }
  function closeImage()
  {
    setdisplay("none") 

  }

  return (
    <>
      <div className={`imageSelected ${portoStyle.itemselected} justify-content-center align-items-center `} style={{display:display}}>
        <div className="image w-50 position-relative bg-black">
        <img src={image} alt="" className='w-100'/>
        <i className={`fa-solid fa-xmark  ${portoStyle.ImageIcon} ` } onClick={closeImage}></i>

        </div>
      </div>


      <div className='container mt-5 pt-5 text-center'>

        <h2 className='pt-5 '>Portofolio</h2>
        <div className="row mt-5 g-3 mb-5">

          <div className={`col-md-4 ${portoStyle.portoItem} overflow-hidden `}>
            <div className="content bg-danger position-relative" onClick={()=>openLayer("../../images/cabin.png")}>
              <img src="../../images/cabin.png" className='w-100' alt="" />
              <div className={`${portoStyle.layer} w-100 h-100 position-absolute top-0 d-flex align-items-center  `}>
                <i className="fa-solid fa-plus w-100"></i>

              </div>
            </div>

          </div>
          <div className={`col-md-4 ${portoStyle.portoItem} overflow-hidden  `}>
            <div className="content bg-danger position-relative "onClick={()=>openLayer("../../images/cake.png")}>
              <img src="../../images/cake.png" className='w-100' alt="" />
              <div className={`${portoStyle.layer} w-100 h-100 position-absolute top-0 d-flex align-items-center `}>
                <i className="fa-solid fa-plus w-100"></i>

              </div>
            </div>

          </div>
          <div className={`col-md-4 ${portoStyle.portoItem} overflow-hidden  `}>
            <div className="content bg-danger position-relative" onClick={()=>openLayer("../../images/circus.png")}>
              <img src="../../images/circus.png" className='w-100' alt="" />
              <div className={`${portoStyle.layer} w-100 h-100 position-absolute top-0 d-flex align-items-center`}>
                <i className="fa-solid fa-plus w-100"></i>

              </div>
            </div>

          </div>
          <div className={`col-md-4 ${portoStyle.portoItem} overflow-hidden  `}>
            <div className="content bg-danger position-relative" onClick={()=>openLayer("../../images/game.png")}>
              <img src="../../images/game.png" className='w-100' alt="" />
              <div className={`${portoStyle.layer} w-100 h-100 position-absolute top-0 d-flex align-items-center `}>
                <i className="fa-solid fa-plus w-100"></i>


              </div>
            </div>

          </div>
          <div className={`col-md-4 ${portoStyle.portoItem} overflow-hidden  `}>
            <div className="content bg-danger position-relative" onClick={()=>openLayer("../../images/safe.png")}>
              <img src="../../images/safe.png" className='w-100' alt="" />
              <div className={`${portoStyle.layer} w-100 h-100 position-absolute top-0 d-flex align-items-center`}>
                <i className="fa-solid fa-plus w-100"></i>

              </div>
            </div>

          </div>
          <div className={`col-md-4 ${portoStyle.portoItem} overflow-hidden  `}>
            <div className="content bg-danger position-relative"onClick={()=>openLayer("../../images/submarine.png")}>
              <img src="../../images/submarine.png" className='w-100' alt="" />
              <div className={`${portoStyle.layer} w-100 h-100 position-absolute top-0 d-flex align-items-center`}>
                <i className="fa-solid fa-plus w-100"></i>

              </div>
            </div>

          </div>



        </div>
      </div>
    </>
  )

}
