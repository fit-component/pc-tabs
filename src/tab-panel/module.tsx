import * as React from 'react'

export interface PropsInterface {
    /**
     * 对应Tabs的defaultActiveKey
     */
    key?: string

    /**
     * 标签名
     */
    tab?: string

    /**
     * 标签名,可以渲染任意 React 元素
     */
    tabRender?: (isActive?: boolean)=>React.ReactElement<any>

    /**
     * 是否处于显示状态
     */
    active?: boolean

    [x: string]: any
}

export class Props implements PropsInterface {
    key = ''
    tab = ''
    active = false
    tabRender = (): any=> {
        return null
    }
}

export interface StateInterface {

}

export class State implements StateInterface {

}