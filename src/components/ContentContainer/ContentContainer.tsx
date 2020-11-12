import React from "react";
import './ContentContainer.scss'

type ContentContainerProps = {
    smallContainer?: boolean,
    wrapperStyle?:string,
    containerStyle?:string
}

export default class ContentContainer extends React.Component<ContentContainerProps,{}>{
    render(){
        return(
            <div className={this.props.wrapperStyle ? this.props.wrapperStyle : "container-wrapper"}>
                <div className={this.props.containerStyle ? this.props.containerStyle : "content-container" }>
                    {this.props.children}
                </div>
            </div>
        )
    }
}