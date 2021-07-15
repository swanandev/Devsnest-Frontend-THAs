import React, { useState } from 'react'

const GenerateMeme = ({memeData, chooseTemplate, updateMemeData}) => {
    const [formData, setFormData] = useState({template_id:memeData.id, username:"destro1108", password:"Xyro123456", boxes:[]});
    console.log(memeData);
    const generateMeme = () => {
        let url = `https://api.imgflip.com/caption_image?template_id=${formData.template_id}&username=${formData.username}&password=${formData.password}`
        formData.boxes.forEach((el, inx) => {
            url += `&boxes[${inx}][text]=${el.text}`
        })
        fetch(url).then(res => res.json())
        .then(data => {
            console.log(data);
            updateMemeData({...memeData, url:data.data.url})
        })
    }

    let aspectRatio = memeData.width / memeData.height;
    let width = 400;
    let height = 400 * aspectRatio;

    return (
        <div className="gen-meme-wrapper">
            {memeData && 
                <React.Fragment>
                <div style={{backgroundImage:`url(${memeData.url})`,width, height}} className="gen-image"> </div>
                <div className="meme-inputs">
                    {[...Array(memeData.box_count)].map((_, inx) => {
                    return (<div className="meme-input-div"> <input 
                    onChange={(e) => {
                        const newBoxes = formData.boxes;
                        newBoxes[inx] = {text:e.target.value}
                        setFormData({...formData, boxes:newBoxes})
                    }} 
                    key={inx} type="text" className="meme-input" placeholder={`Meme Caption ${inx+1}`} name={`Caption${inx+1}`} id={`Caption${inx+1}`} /> </div>)
                    })}
                </div>
                <div className="meme-actions">
                    <div onClick={() => {generateMeme(formData)}} className="button">Generate Meme</div>
                    <div onClick={() => {chooseTemplate()}} className="button">Choose Template</div>
                </div>    
                </React.Fragment>}
        </div>
    )
}

export default GenerateMeme
