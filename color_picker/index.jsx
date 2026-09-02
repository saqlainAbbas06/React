const { useState } = React;

export const ColorPicker = () => {
  const [bgColor, setBgColor] = useState('#ffffff')
  const colorHandler = (e)=>{
    setBgColor(e.target.value)
  }
  return (
    <div id = "color-picker-container" style={{backgroundColor:bgColor}}>
      <input type='color' value={bgColor} id = "color-input" onChange = {colorHandler}/>
    </div>
  )
};