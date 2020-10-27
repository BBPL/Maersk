import React from "react";

type ContentContainerProps = {
    children?: ChildNode,
    smallContainer?: boolean
}

export default class ContentContainer extends React.Component<{},{}>{
    render(){
        return(
            <div className="container-wrapper">
                {this.props.children}
            </div>
        )
    }
}