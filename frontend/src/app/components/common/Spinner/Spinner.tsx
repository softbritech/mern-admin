import {ClipLoader} from "react-spinners";

const override = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "auto auto",
    position: "absolute",
    top: "50%",
    left:"50%",
    transform: "translate(-50%, -50%)"
};
const Spinner = ({loading}) => {
    return (
        <ClipLoader
            color='#000'
            loading={loading}
            cssOverride={override}
            size={150}
        />
    )
}
export default Spinner