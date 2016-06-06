import * as React from 'react'
import * as classNames from 'classnames'
import * as module from './module'
import {others} from '../../../../common/transmit-transparently/src'

export default class TabPanel extends React.Component <module.PropsInterface, module.StateInterface> {
    static defaultProps: module.PropsInterface = new module.Props()
    public state: module.StateInterface = new module.State()

    constructor(props: any) {
        super(props)
        this.state = {}
    }

    render() {
        const {className, active} = this.props
        const classes = classNames({
            '_namespace': true,
            [this.props['className']]: !!this.props['className']
        })

        if (!active) {
            return null
        }

        return (
            <div {...others(new module.Props(), this.props)} className={classes}>
                {this.props.children}
            </div>
        )
    }
}