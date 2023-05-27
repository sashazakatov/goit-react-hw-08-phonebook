import { RotatingLines } from  'react-loader-spinner'
import { Div } from './Loader.styled'

const Loader = ({width}) => {
    return(
        <Div>
            <RotatingLines
                strokeColor="grey"
                strokeWidth="5"
                animationDuration="0.75"
                width={width}
                visible={true}
            />
        </Div>
    )
}
export default Loader;