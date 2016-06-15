import * as React from 'react'
import * as ReactDOM from 'react-dom'
import * as classNames from 'classnames'
import * as $ from 'jquery'
import * as module from './module'
import {others} from '../../../../common/transmit-transparently/src'
import './index.scss'

const renderTab = (name: string)=> {
    return (active: boolean)=> {
        if (!active) {
            return (
                <div className="center-text">{name}</div>
            )
        } else {
            return (
                <div className="tab-bar-content">
                    <div className="tab-bar-left">
                        <div className="tab-bar-left-nav"></div>
                    </div>
                    {name}
                    <div className="tab-bar-right">
                        <div className="tab-bar-right-nav"></div>
                    </div>
                </div>
            )
        }
    }
}

export default class Tabs extends React.Component <module.PropsInterface, module.StateInterface> {
    static defaultProps: module.PropsInterface = new module.Props()
    public state: module.StateInterface = new module.State()
    previousTitleIndex: number
    dom: Element

    componentWillMount() {
        this.state = {
            activeKey: this.props.activeKey || this.props.defaultActiveKey
        }
        this.previousTitleIndex = -1
    }

    componentDidMount() {
        this.dom = ReactDOM.findDOMNode(this)

        let activeIndex = -1
        React.Children.map(this.props.children, (item: any, index: number)=> {
            if (this.state.activeKey === item.key) {
                activeIndex = index
            }
        })
        setTimeout(()=> {
            this.setActive(this.state.activeKey, activeIndex)
        })
    }

    componentWillReceiveProps(nextProps: module.PropsInterface) {
        if ('activeKey' in nextProps && nextProps.activeKey !== null) {
            this.setState({
                activeKey: nextProps.activeKey
            })
        }
    }

    setActive(value: string|number, index: number) {
        if (index === this.previousTitleIndex)return

        const $dom = $(this.dom)

        // tab标题容器
        const titleContainer = $dom.find('.title-container')

        // 当前选择标题元素
        const titleItem = $dom.find(`.title-item-${index}`)

        // 当前标题元素距离容器的做边距
        const currentLeft = titleItem.offset().left - titleContainer.offset().left

        this.setState({
            activeKey: value,
            isForward: index > this.previousTitleIndex,
            moveBarStyle: {
                left: currentLeft,
                right: titleContainer.width() - currentLeft - titleItem.width() - 20
            }
        })

        this.previousTitleIndex = index
    }

    handleTitleClick(value: string|number, index: number) {
        this.setActive(value, index)
        this.props.onChange(value)
    }

    render() {
        const classes = classNames({
            '_namespace': true,
            [this.props['className']]: !!this.props['className'],
            'retro': this.props.type === 'retro'
        })

        let Title = React.Children.map(this.props.children, (item: any, index: number)=> {
            const isActive = this.state.activeKey === item.key
            let titleClassNames = classNames({
                'active': isActive,
                'title-item': true,
                [`title-item-${index}`]: true
            })

            let titleContent: React.ReactElement<any> = item.props.tab || item.props.tabRender(isActive)
            switch (this.props.type) {
                case 'retro':
                    titleContent = renderTab(item.props.tab)(isActive)
                    break
            }

            return (
                <div onClick={this.handleTitleClick.bind(this,item.key,index)}
                     className={titleClassNames}>{titleContent}</div>
            )
        })

        let Children = React.Children.map(this.props.children, (item: any)=> {
            return React.cloneElement(item, {
                active: this.state.activeKey === item.key
            })
        })

        let moveBarClassnames = classNames({
            'move-bar': true,
            'forward': this.state.isForward,
            'backward': !this.state.isForward
        })

        return (
            <div {...others(new module.Props(), this.props)} className={classes}>
                <div className="title-container">
                    <div className={moveBarClassnames}
                         style={this.state.moveBarStyle}></div>
                    {Title}
                </div>
                <div className="content-container">
                    {Children}
                </div>
            </div>
        )
    }
}