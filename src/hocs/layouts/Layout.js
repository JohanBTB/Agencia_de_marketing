import { connect } from "react-redux";

function Layout({children}){

    return(
        <div class="min-w-[30rem]">
            {children}
        </div>
    )

}

const mapStateToProp = state=>({

})

export default connect(mapStateToProp, {

}) (Layout);



