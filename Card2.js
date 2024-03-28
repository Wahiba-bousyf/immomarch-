import './card2.css'
const list=[
    {
        title:"settat",
        img:"ryan-spencer-WJDR8_QxVR8-unsplash.jpg"
    },
    {
        title:"settat",
        img:"pixasquare-dFBPEUfwPDc-unsplash.jpg"
    },
    {
        title:"settat",
        img:"pixasquare-dFBPEUfwPDc-unsplash.jpg"
    },
    {
        title:"settat",
        img:"pixasquare-dFBPEUfwPDc-unsplash.jpg"
    },
    {
        title:"settat",
        img:"pixasquare-dFBPEUfwPDc-unsplash.jpg"
    },
    {
        title:"settat",
        img:"pixasquare-dFBPEUfwPDc-unsplash.jpg"
    },
]
export default function Card2(){
    return(
        <>
        <h1>Explore City</h1>
        <span>lorem ppay sendo rijhu nugys ghvfdr dore any some lared hiut  </span>
        <div class="container">
        <div class="row">
        {list.map(item=>{
            return(
                <div class="col-4">
                    <h3>{item.title}</h3>
                    <img src={item.img}/>
                    <p>Show more for this</p>
                </div>
            )
        })}
        </div>
        </div>
        </>
    )
}