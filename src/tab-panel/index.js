import React from 'react'
import classNames from 'classnames'

export default class TabPanel extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        const {className, active, ...others} = this.props
        const classes = classNames({
            '_namespace': true,
            [className]: className
        })

        if (!active) {
            return null
        }

        return (
            <div {...others} className={classes}>
                {this.props.children}
            </div>
        )
    }
}

TabPanel.defaultProps = {
    // @desc 对应Tabs的defaultActiveKey
    key: '',

    // @desc 标签名
    tab: '标签',

    // @desc 是否处于显示状态
    active: false
}