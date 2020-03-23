import React ,{useState} from 'react'
//star itself
function Star({ marked,starId}) {
    return (
        <span star-id={starId} className="stars" role="button">
        {/* empty/solid */}
        {marked ? "\u2605" : "\u2606"}</span>
    )
}
//評分
function Staring(props) {
    // 顯示分數
    const [rating, setrating] = React.useState(
        typeof props.rating =="number" ? props.rating : 0
    )
    // hovereffect
    const [selection , setSelection] = React.useState(0)

    const hoverOver = event => {
        let val = 0
        if (event && event.target && event.target.getAttribute("star-id"))
            val = event.target.getAttribute("star-id")
        setSelection(val)
    }
    return (
        <>
            <div
                onMouseOut={() => hoverOver(null)}
                onClick={event =>
                setrating(event.target.getAttribute("star-id") || rating)
                }
                onMouseOver={hoverOver}
                >
                    {Array.from({ length:5},(v ,i) => (
                        <Star
                            starId={i + 1}
                            key={`star_${i+1}`}
                            marked={selection ? selection >= i + 1 : rating >= i + 1}
                        />
                    ))}
                </div>
        </>
    )
}

export default Staring
