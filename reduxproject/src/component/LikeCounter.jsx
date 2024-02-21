import { useDispatch, useSelector } from "react-redux"
import Actions from "./Actions"
function LikeCounter (){
        const count=useSelector((state)=>state)
        const dispatch=useDispatch()
        return(
            <>
                <h1>{count}</h1>
                <button onClick={()=>{dispatch(Actions.Increase())}}>Like</button>
                <button onClick={()=>{dispatch(Actions.Decrease())}}>Unlike</button>
            </>
        )
    }
export default LikeCounter;